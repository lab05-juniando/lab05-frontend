"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export type Transaction = {
  id: number;
  description: string;
  subtitle: string;
  amount: number;
  type: "in" | "out";
  date: string;
  category: string;
  status: "Concluído" | "Pago" | "Pendente";
};

// Dados mockados de exemplo
const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    description: "Venda Projeto Alpha",
    subtitle: "TechSolutions Inc.",
    amount: 12500,
    type: "in",
    date: "24 Out 2023",
    category: "Serviços",
    status: "Concluído",
  },
  {
    id: 2,
    description: "AWS Cloud Services",
    subtitle: "Recorrência Mensal",
    amount: 2450,
    type: "out",
    date: "22 Out 2023",
    category: "Infraestrutura",
    status: "Pago",
  },
  {
    id: 3,
    description: "Aluguel Escritório",
    subtitle: "Sede Principal",
    amount: 8200,
    type: "out",
    date: "20 Out 2023",
    category: "Operacional",
    status: "Pendente",
  },
  {
    id: 4,
    description: "Consultoria Digital",
    subtitle: "Contrato Semestral",
    amount: 5800,
    type: "in",
    date: "18 Out 2023",
    category: "Serviços",
    status: "Concluído",
  },
];

export function TransactionsTable() {
  const [transactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  function formatarMoeda(valor: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#3E484F] bg-[#182236]">
      {/* Tabela Principal */}
      <table className="w-full border-collapse text-left bg-[#171f33] text-sm text-slate-300">
        <thead>
          <tr className="border-b border-[#1e293b] bg-[#182236]/40 h-12">
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1]">Descrição</th>
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1]">Valor</th>
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1]">Data</th>
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1]">Categoria</th>
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1]">Status</th>
            <th className="px-6 font-mono text-xs uppercase tracking-wider text-[#BDC8D1] text-right">Ações</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#1e293b]">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-[#151f32]/50 transition-colors text-[#BDC8D1]">
              {/* Coluna 1: Ícone + Descrição e Subtítulo */}
              <td className="px-6 py-4">
                <div className="flex items-center gap-3 tracking-wide">
                  <div className={`p-2 rounded-lg ${tx.type === "in" ? "bg-[#223147] text-[#8ED5FF]" : "bg-[#2e2e3f] text-[#FFB4AB]"}`}>
                    {tx.type === "in" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-sans text-[#DAE2FD]">{tx.description}</p>
                    <p className="text-xs font-sans text-[#BDC8D1]">{tx.subtitle}</p>
                  </div>
                </div>
              </td>

              {/* Coluna 2: Valor (+ ou -) */}
              <td className={`px-6 py-4 font-mono ${tx.type === "in" ? "text-[#8ED5FF]" : "text-[#FFB4AB]"}`}>
                {tx.type === "in" ? "+ " : "- "}
                {formatarMoeda(tx.amount)}
              </td>

              {/* Coluna 3: Data */}
              <td className="px-6 py-4 text-slate-400 font-mono text-xs">{tx.date}</td>

              {/* Coluna 4: Categoria (Badge Escura) */}
              <td className="px-6 py-4">
                <span className="bg-[#182234] border border-[#26354d] px-3 py-1 font-sans rounded-md text-xs text-[#BDC8D1]">
                  {tx.category}
                </span>
              </td>

              {/* Coluna 5: Status (Badges Coloridas) */}
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${
                  tx.status === "Concluído" ? "bg-[#223147] text-[#8ED5FF] " :
                  tx.status === "Pago" ? "bg-[#223147] text-[#8ED5FF] " :
                  "bg-[#93000A] text-[#FFB4AB] "
                }`}>
                  {tx.status}
                </span>
              </td>

              {/* Coluna 6: Botão de Ações (...) */}
              <td className="px-6 py-4 text-right">
                <button className="text-slate-400 hover:text-slate-100 p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Rodapé / Paginação */}
      <div className="flex justify-between items-center font-sans px-6 py-4 border-t border-[#1e293b] text-xs text-slate-400">
        <p>Mostrando 1-10 de 156 transações</p>
        <div className="flex items-center gap-1 text-[#DAE2FD">
          <button className="p-1.5 rounded border border-[#2a3548] hover:bg-bg-[#182236]"><ChevronLeft className="w-4 h-4" /></button>
          <button className="px-3 py-1 rounded bg-[#38bdf8] text-slate-950 font-bold">1</button>
          <button className="px-3 py-1 rounded border border-[#2a3548] hover:bg-[#182236]">2</button>
          <button className="px-3 py-1 rounded border border-[#2a3548] hover:bg-[#182236]">3</button>
          <button className="p-1.5 rounded border border-[#2a3548] hover:bg-[#182236]"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}