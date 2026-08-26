"use client";

import React, { useState } from "react";
import Input from "@/src/components/input";
import { Button } from "@/src/components/buttons";
import { Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import api from "@/src/config/api";

import { PacmanLoader } from "react-spinners";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface IFormRegisterData {
  company: {
    name: string;
    cnpj: string;
  };
  user: {
    name: string;
    email: string;
    password: string;
  };
}

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IFormRegisterData>({});

  const onSubmit = async (data: IFormRegisterData) => {
    setIsLoading(true);
    try {
      await api.post("/api/users/register", {
        ...data,
        user: {
          ...data.user,
          role: "ADMIN",
        },
      });
      toast.success("Sua conta foi registrada!");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const responseMessage = axiosError.response?.data?.message;
      let errorMessage = "Aconteceu um erro!";

      if (responseMessage) {
        try {
          errorMessage =
            JSON.parse(responseMessage)[0]?.message ?? responseMessage;
        } catch {
          errorMessage = responseMessage;
        }
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full h-screen items-center justify-center">
        <PacmanLoader
          color="#fff"
          size={32}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <h1 className="text-xs mt-4">Calma lá meu amigo, carregando...</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 py-10 bg-[#101B36] rounded-lg shadow-md w-full max-w-xl"
      >
        <h1 className="text-2xl font-bold font-inter text-center mb-4">
          {" "}
          LAB05 - FinacesFlow
        </h1>
        <h2 className="text-lg font-inter mt-2">Seja bem-vindo(a)!</h2>
        <h2 className="text-xs font-inter mb-2">
          Deseja Registrar sua Empresa Conosco? Comece aqui!
        </h2>
        <div className="gap-3 flex flex-col">
          <Input
            label="Nome"
            placeholder="Nome do usuário"
            required
            {...register("user.name")}
          />
          <Input
            label="Email"
            type="email"
            required
            icon={<Mail className="text-slate-400 shrink-0" />}
            placeholder="Digite seu email"
            {...register("user.email")}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            required
            type="password"
            {...register("user.password")}
          />
        </div>

        <h1 className="text-xl font-bold text-center mt-4 mb-2">
          Registre Sua Empresa
        </h1>
        <div className="flex flex-col gap-3 mb-4">
          <Input
            label="Nome"
            placeholder="Nome da empresa"
            required
            {...register("company.name")}
          />
          <Input
            label="CNPJ"
            required
            placeholder="CNPJ da empresa"
            {...register("company.cnpj")}
          />
        </div>

        <Button
          colorsParam="light"
          weight="600"
          iconType="arrow"
          iconPosition="right"
          size="compact"
        >
          Registrar
        </Button>
      </form>
    </div>
  );
}
