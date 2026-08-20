"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Mail, Smartphone, Cake } from "lucide-react";
import Input from "@/src/components/input";
import { Button } from "@/src/components/buttons";
import { Confirmation } from "@/src/app/screen_config/confirmation";
import { validateConfig, hasError, type ConfigErrors } from "./validate";

const EMPTY_ERRORS: ConfigErrors = { email: "", phone: "", birthDate: "" };

export default function CanvasConfig() {
  const [email, setEmail] = useState("odeioosZenin@gmail.com");
  const [phone, setPhone] = useState("+55 83 94002-8922");
  const [birthDate, setBirthDate] = useState("20/02/2002");

  const [errors, setErrors] = useState<ConfigErrors>(EMPTY_ERRORS);
  const [saving, setSaving] = useState(false);
  const [screen, setScreen] = useState<"form" | "success">("form");



  //conferir dados//
  function validateField(field: keyof ConfigErrors, value: string) {
    const updatedErrors = validateConfig(
      field === "email" ? value : email,
      field === "phone" ? value : phone,
      field === "birthDate" ? value : birthDate
    );

    setErrors((current: ConfigErrors) => ({ ...current, [field]: updatedErrors[field] }));
  }


  //validando dados//
  function handleSubmit() {
    if (saving) return;

    const updatedErrors = validateConfig(email, phone, birthDate);
    setErrors(updatedErrors);

    if (hasError(updatedErrors)) return;

    setSaving(true);

    setTimeout(() => {
      setSaving(false);
      setScreen("success");
    }, 800);
  }

  return (
    <div className="relative w-full max-w-sm mx-auto pt-50">
      {screen === "success" ? (
        <Confirmation onBack={() => setScreen("form")} />
      ) : (
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
          <div className="h-24 bg-blue-50" />

          <div className="flex flex-col items-center px-6 pb-6 -mt-14">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                <Image
                  src="/foto-perfil.jpg"
                  alt="Foto de perfil"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                type="button"
                className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1.5 border-2 border-white hover:bg-blue-700 transition-colors"
              >
                <Camera size={14} className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full px-6 pb-6">
            <div className="flex flex-col gap-1">
              <Input
                text="Email"
                type="email"
                icon={<Mail size={18} className="text-slate-400 shrink-0" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && validateField("email", email)}
                onBlur={() => validateField("email", email)}
              />
              {errors.email && (
                <span className="text-xs text-red-500 pl-1">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                text="Telefone"
                type="text"
                icon={<Smartphone size={18} className="text-slate-400 shrink-0" />}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && validateField("phone", phone)}
                onBlur={() => validateField("phone", phone)}
              />
              {errors.phone && (
                <span className="text-xs text-red-500 pl-1">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <Input
                text="Data de Nascimento"
                type="text"
                icon={<Cake size={18} className="text-slate-400 shrink-0" />}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && validateField("birthDate", birthDate)}
                onBlur={() => validateField("birthDate", birthDate)}
              />
              {errors.birthDate && (
                <span className="text-xs text-red-500 pl-1">{errors.birthDate}</span>
              )}
            </div>

            <Button
              colorsParam="light"
              weight="600"
              iconType="arrow"
              size="compact"
              onClick={handleSubmit}
            >
              {saving ? "Salvando..." : "Alterar Configurações"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}