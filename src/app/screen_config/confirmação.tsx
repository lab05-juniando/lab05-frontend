"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/buttons";

type ConfirmacaoProps = {
    onVoltar: () => void;
};

export function Confirmation ({ onVoltar }: ConfirmacaoProps) {
    return (
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="flex flex-col items-center px-6 py-10 gap-4">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-blue-600" />
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                    <h2 className="text-lg font-semibold text-slate-800">
                        Configurações atualizadas
                    </h2>
                    <p className="text-sm text-slate-400">
                        Suas informações foram salvas com sucesso.
                    </p>
                </div>

                <div className="w-full pt-4">
                    <Button
                        colorsParam="light"
                        weight="600"
                        iconType="arrow"
                        size="compact"
                        onClick={onVoltar}
                    >
                        Voltar
                    </Button>
                </div>
            </div>
        </div>
    );
}