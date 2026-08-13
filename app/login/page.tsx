import React from 'react';
import Input from '@/app/components/input';
import { Button } from '@/app/components/buttons';
import Low from '@/app/components/low';

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto mt-20 p-6 bg-[#101B36] rounded-lg shadow-md">
      <h2 className="font-bold text-xl">Bem-vindo de volta</h2>
      <h3 className="text-gray-300">Por favor, insira seus dados para entrar.</h3>

      <div className="flex flex-col gap-3 mt-2">
        <Input text="Endereço de E-mail" type="email" placeholder="nome@empresa.com" />
        <Input
          text="Senha"
          type="password"
          placeholder="••••••••"
          rightLabel={
            <a href="/esqueci-senha" className="text-blue-400 hover:underline">
              Esqueceu a senha?
            </a>
          }
        />
      </div>

      <div className="flex flex-col gap-6 mt-4">
        <Button colorsParam="light" weight="600" iconType="arrow" iconPosition="right" size="compact">
          Entrar
        </Button>

        <Low />
      </div>
    </div>
  );
}