"use client";

import React, { useState, useCallback } from "react";
import Input from "@/app/components/input";
import { Button } from "@/app/components/buttons";
import { FaAddressCard } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { NameField, PasswordFields, CnpjField } from "./password_confirmed";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    const [nameValid, setNameValid] = useState(false);
    const [pwdValid, setPwdValid] = useState(false);
    const [cnpjValid, setCnpjValid] = useState(false);

    const [formError, setFormError] = useState("");

    const handleNameValidity = useCallback((isValid: boolean) => setNameValid(isValid), []);
    const handlePwdValidity = useCallback((isValid: boolean) => setPwdValid(isValid), []);
    const handleCnpjValidity = useCallback((isValid: boolean) => setCnpjValid(isValid), []);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setFormError("");

        if (!email || !company) {
            setFormError("Todos os campos são obrigatórios.");
            return;
        }

        if (!nameValid || !pwdValid || !cnpjValid) {
            setFormError("Verifique os campos de nome, senha e CNPJ — algum deles está inválido.");
            return;
        }

        console.log("Formulário válido, enviando cadastro...");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-md mx-auto mt-20 p-6 bg-[#101B36] rounded-lg shadow-md"
        >
            <h1 className="text-2xl font-inter text-center"> Corporate Finance</h1>
            <h2 className="text-lg font-inter">Seja bem-vindo(a)!</h2>
            <h2 className="text-md font-inter">Deseja Registrar sua Empresa Conosco? Comece aqui!</h2>

            <NameField onValidityChange={handleNameValidity} />

            <Input
                text="Email"
                type="email"
                required
                icon={<Mail className="text-slate-400 shrink-0" />}
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordFields onValidityChange={handlePwdValidity} />

            <h1 className="text-xl font-bold text-center ">Registre Sua Empresa</h1>

            <Input
                text="Nome da Empresa"
                type="text"
                required
                icon={<FaAddressCard className="text-slate-400 shrink-0" />}
                placeholder="Digite o nome da sua empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <CnpjField onValidityChange={handleCnpjValidity} />

            {formError && <span className="text-sm text-red-500 text-center">{formError}</span>}

            <Button colorsParam="light" weight="600" iconType="arrow" iconPosition="right" size="compact">
                Registrar
            </Button>
        </form>
    );
}