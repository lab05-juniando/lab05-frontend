"use client";

import { useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  category: string;
  type: "entrada" | "saida";
  amount: number;
  date: string;
};

type TransactionFilterProps = {
  transactions: Transaction[];
  onFilter: (transactions: Transaction[]) => void;
};

export default function TransactionFilter({
  transactions,
  onFilter,
}: TransactionFilterProps) {
  const [category, setCategory] = useState("todas");
  const [type, setType] = useState("todos");
  const [period, setPeriod] = useState("30");

  function handleFilter() {
    const filtered = transactions.filter((transaction) => {
      const matchesCategory =
        category === "todas" || transaction.category === category;

      const matchesType =
        type === "todos" || transaction.type === type;

      const today = new Date();
      const transactionDate = new Date(transaction.date);

      const daysAgo = new Date();
      daysAgo.setDate(today.getDate() - Number(period));

      const matchesPeriod = transactionDate >= daysAgo;

      return (
        matchesCategory &&
        matchesType &&
        matchesPeriod
      );
    });

    onFilter(filtered);
  }

  return (
    <div className="w-full rounded-2xl border border-[#293141] bg-[#10192B] p-5 text-[#BDC8D1] shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

        {/* ========= PERÍODO ========= */}

        <div>
          <label className="font-mono mb-2 block text-sm font-medium">
            PERÍODO
          </label>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="7">Últimos 7 Dias</option>
            <option value="15">Últimos 15 Dias</option>
            <option value="30">Últimos 30 Dias</option>
            <option value="passado">Mês passado</option>
          </select>
        </div>

        {/* ============= TIPO ====================== */}

        <div>
          <label className="font-mono mb-2 block text-sm font-medium">
            TIPO
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="todos">Todos os tipos</option>
            <option value="entrada">Entradas</option>
            <option value="saida">Saídas</option>
          </select>
        </div>

        {/*================ CATEGORIA =============== */}

        <div>
          <label className="font-mono mb-2 block text-sm font-medium">
            CATEGORIA
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="todas">Todas as categorias</option>
          </select>
        </div>

        {/* ============= FILTRO ================ */}

        <div className="flex items-end">
          <button
            type="button"
            onClick={handleFilter}
            className="h-10 w-full rounded-xl bg-slate-800 px-5 text-sm font-medium text-white transition hover:bg-slate-700 md:w-auto"
          >
            Filtrar transações
          </button>
        </div>

      </div>
    </div>
  );
}