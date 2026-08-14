import react from 'react';
import Input from '@/app/components/input';
import { Button } from '@/app/components/buttons';
import { FaMoneyBillTrendUp,FaAddressCard  } from "react-icons/fa6";
import { Mail, LockKeyhole, User } from "lucide-react";


export default function RegisterPage() { 

    return ( 
        <div className="flex flex-col gap-3 max-w-md mx-auto mt-20 p-6 bg-[#101B36] rounded-lg shadow-md">
            <h1 className ="text-2xl font-inter text-center"> Corporate Finance</h1>

            <h2 className="text-lg font-inter">Seja bem-vindo(a)!</h2>
            <h2 className="text-md font-inte">Deseja Registrar sua Empresa Conosco? Comece aqui!</h2>

            <Input text="Nome Pessoal" type="text" icon = {<User className="text-slate-400 shrink-0" />} placeholder="Digite seu nome completo" />

            <Input text="Email" type="email" icon = {<Mail className="text-slate-400 shrink-0" />} placeholder="Digite seu email" />

            <Input text="Senha" type="password" icon = {<LockKeyhole className="text-slate-400 shrink-0" />} placeholder="Digite sua senha" />

            <Input text="Confirmar Senha" type="password" icon = {<LockKeyhole className="text-slate-400 shrink-0" />} placeholder="Confirme sua senha" />


            <h1 className="text-xl font-bold text-center ">Registre Sua Empresa</h1>

            <Input text="Nome da Empresa" type="text" icon = {<FaAddressCard className="text-slate-400 shrink-0" />} placeholder="Digite o nome da sua empresa" />



            <Input text="CNPJ" type="text" icon = {<FaAddressCard className="text-slate-400 shrink-0" />} placeholder="Digite o CNPJ da sua empresa" />


            <Button colorsParam="light" weight="600" iconType="arrow" iconPosition="right" size="compact">
                Registrar
            </Button>
        </div>


        



    );
}
