"use client";

import React, { useState } from "react";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text?: string;
    rightLabel?: React.ReactNode;
}

export default function Input({ text, rightLabel, type, ...props }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const leftIcon =
        type === "email" ? (
            <Mail size={20} className="text-slate-400" />
        ) : type === "password" ? (
            <LockKeyhole size={20} className="text-slate-400" />
        ) : null;

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-1 w-full">
            {(text || rightLabel) && (
                <div className="flex items-center justify-between mb-1">
                    {text && (
                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                            {text}
                        </label>
                    )}
                    {rightLabel && <div className="text-xs">{rightLabel}</div>}
                </div>
            )}

            <div className="flex items-center gap-2 w-full rounded-xl bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
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