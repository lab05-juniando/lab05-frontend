"use client";
//DESCRIÇÃO ABAIXO//

//TROCAR ICONES DE INPUT DE EMAIL E SENHA

// ALTERAR CORRIDO E CORRIGIR//

// CRIAR NOVAS FUNÇÕES PARA INPUTS DE SENHA E EMAIL

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
}

export default function Input({ text, type, ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const leftIcon =
        type === "email" ? (
            <Mail size={18} className="text-slate-400" />
        ) : type === "password" ? (
            <Lock size={18} className="text-slate-400" />
        ) : null;

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-1 w-full">
            {text && (
                <label className="block text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    {text}
                </label>
            )}

            <div className="flex items-center gap-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 focus-within:border-blue-500 transition-colors">
                {leftIcon}

                <input
                    type={inputType}
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                    {...props}
                />

                {type === "password" ? (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-slate-400 cursor-pointer shrink-0"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                ) : null}
            </div>
        </div>
    );
}

