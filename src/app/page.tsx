import React from "react";
import Input from "@/src/components/input";
import { Button } from "@/src/components/buttons";
import SocialMedias from "@/src/components/socialmedias";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <h1 className="text-center text-2xl font-bold mb-6">Finances</h1>
      <div className="flex flex-col gap-3 py-10 px-8 bg-[#101B36] min-w-130 rounded-lg shadow-md">
        <h2 className="font-bold text-xl">Bem-vindo de volta</h2>
        <h3 className="text-gray-300">
          Por favor, insira seus dados para entrar.
        </h3>

        <div className="flex flex-col gap-3 mt-2">
          <Input
            text="Endereço de E-mail"
            type="email"
            placeholder="nome@empresa.com"
          />
          <Input
            text="Senha"
            type="password"
            placeholder="••••••••"
            rightLabel={
              <a
                href="/esqueci-senha"
                className="text-with-400 hover:underline"
              >
                Esqueceu a senha?
              </a>
            }
          />
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <Button
            colorsParam="light"
            weight="600"
            iconType="arrow"
            iconPosition="right"
            size="compact"
          >
            Entrar
          </Button>

          <SocialMedias />
        </div>
      </div>
    </div>
  );
}
