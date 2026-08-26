"use client";

import React, { useState } from "react";
import Input from "@/src/components/input";
import { Button } from "@/src/components/buttons";
import SocialMedias from "@/src/components/socialmedias";
import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import api from "../config/api";
import { toast } from "react-toastify";
import { PacmanLoader } from "react-spinners";

interface IFormLoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IFormLoginData>({});

  const onSubmit = async (data: IFormLoginData) => {
    setIsLoading(true);
    try {
      await api.post("/api/auth/", data);
      toast.success("Login efetuado com sucesso!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error: unknown) {
      toast.error(
        (error as { response: { data: { error: string } } }).response.data
          .error || "Ocorreu um erro!",
      );
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
      <h1 className="text-center text-2xl font-bold mb-6">Finances</h1>
      <div className="flex flex-col gap-3 py-10 px-8 bg-[#101B36] min-w-130 rounded-lg shadow-md">
        <h2 className="font-bold text-xl">Bem-vindo de volta</h2>
        <h3 className="text-gray-300">
          Por favor, insira seus dados para entrar.
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-2"
        >
          <Input
            label="Email"
            type="email"
            required
            icon={<Mail className="text-slate-400 shrink-0" />}
            placeholder="Digite seu email"
            {...register("email")}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            required
            type="password"
            {...register("password")}
          />

          <Button
            colorsParam="light"
            weight="600"
            iconType="arrow"
            iconPosition="right"
            size="compact"
          >
            Entrar
          </Button>
        </form>

        <div className="flex flex-col gap-6 mt-4">
          <SocialMedias />
        </div>
      </div>
    </div>
  );
}
