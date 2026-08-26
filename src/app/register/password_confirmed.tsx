"use client";

import React, { useState, useEffect } from "react";
import Input from "@/src/components/input";
import { FaAddressCard } from "react-icons/fa6";
import { LockKeyhole, User } from "lucide-react";
import {
  formatCnpj,
  isCnpjValid,
  isNameValid,
  isPasswordStrong,
} from "@/src/utils/validations";

// ---------- NOME ----------
type NameFieldProps = {
  onValidityChange: (isValid: boolean, name: string) => void;
};

export function NameField({ onValidityChange }: NameFieldProps) {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = isNameValid(name);

  useEffect(() => {
    onValidityChange(isValid, name);
  }, [isValid, name, onValidityChange]);

  return (
    <div>
      <Input
        label="Nome Pessoal"
        type="text"
        required
        icon={<User className="text-slate-400 shrink-0" />}
        placeholder="Digite seu nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && setTouched(true)}
      />
      {touched && (
        <span
          className={`text-xs mt-1 block ${isValid ? "text-green-500" : "text-red-500"}`}
        >
          {isValid
            ? "Nome válido"
            : "Informe nome e sobrenome (mín. 3 letras cada)"}
        </span>
      )}
    </div>
  );
}

// ---------- SENHA + CONFIRMAR ----------
type PasswordFieldsProps = {
  onValidityChange: (isValid: boolean, pwd: string) => void;
};

export function PasswordFields({ onValidityChange }: PasswordFieldsProps) {
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdTouched, setPwdTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);

  const isStrong = isPasswordStrong(pwd);
  const pwdsMatch = pwd === confirmPwd && confirmPwd.length > 0;

  useEffect(() => {
    onValidityChange(isStrong && pwdsMatch, pwd);
  }, [isStrong, pwdsMatch, pwd, onValidityChange]);

  return (
    <>
      <div>
        <Input
          label="Senha"
          type="password"
          required
          icon={<LockKeyhole className="text-slate-400 shrink-0" />}
          placeholder="Digite sua senha"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setPwdTouched(true)}
        />
        {pwdTouched && (
          <span
            className={`text-xs mt-1 block ${isStrong ? "text-green-500" : "text-red-500"}`}
          >
            {isStrong
              ? "Senha forte"
              : "Senha fraca — use 8+ caracteres, maiúscula, número e símbolo"}
          </span>
        )}
      </div>

      <div>
        <Input
          label="Confirmar Senha"
          type="password"
          required
          icon={<LockKeyhole className="text-slate-400 shrink-0" />}
          placeholder="Confirme sua senha"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setConfirmTouched(true)}
        />
        {confirmTouched && (
          <span
            className={`text-xs mt-1 block ${pwdsMatch ? "text-green-500" : "text-red-500"}`}
          >
            {pwdsMatch ? "Senha confirmada" : "As senhas não coincidem"}
          </span>
        )}
      </div>
    </>
  );
}

// ---------- CNPJ ----------
type CnpjFieldProps = {
  onValidityChange: (isValid: boolean, cnpj: string) => void;
};

export function CnpjField({ onValidityChange }: CnpjFieldProps) {
  const [cnpj, setCnpj] = useState("");
  const [touched, setTouched] = useState(false);
  const isValid = isCnpjValid(cnpj);

  useEffect(() => {
    onValidityChange(isValid, cnpj);
  }, [isValid, cnpj, onValidityChange]);

  return (
    <div>
      <Input
        label="CNPJ"
        type="text"
        required
        icon={<FaAddressCard className="text-slate-400 shrink-0" />}
        placeholder="00.000.000/0000-00"
        value={cnpj}
        onChange={(e) => setCnpj(formatCnpj(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && setTouched(true)}
        maxLength={18}
      />
      {touched && (
        <span
          className={`text-xs mt-1 block ${isValid ? "text-green-500" : "text-red-500"}`}
        >
          {isValid ? "CNPJ válido" : "CNPJ deve ter 14 dígitos numéricos"}
        </span>
      )}
    </div>
  );
}
