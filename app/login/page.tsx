import React from 'react';
import Input from '@/app/components/input';



export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Testando Input</h1>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
    </div>
  );
}
