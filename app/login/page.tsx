import React from 'react';
import Input from '@/app/components/input';



export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-20 p-6 bg-[#1F2D42] rounded-lg shadow-md">
      <Input text="Endereço de E-mail" type="email" placeholder="nome@empresa.com" />
      <Input text="Senha" type="password" placeholder="••••••••" 
      rightLabel={
        <a href="/esqueci-senha" className="text-with-400 hover:underline">
          Esqueceu a senha?
        </a>
      }
      />
    </div>
  );
}
