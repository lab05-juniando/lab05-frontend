"use client"

import { Download } from "lucide-react";

interface Transaction {
  id: string;
  description: string;
  subtitle: string;
  amount: number;
  type: "in" | "out";
  date: string;
  category: string;
  status: "Concluído" | "Pago" | "Pendente";
}

function escapeCsvField(field: string | number): string {
  const str = String(field);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function exportTransactionsToCsv(transactions: Transaction[]) {
  if (!transactions.length) return;

  const headers = [
    "ID",
    "Descrição",
    "Detalhe",
    "Valor",
    "Tipo",
    "Data",
    "Categoria",
    "Status",
  ];

  const rows = transactions.map((t) => [
    t.id,
    t.description,
    t.subtitle,
    t.amount.toFixed(2).replace(".", ","),
    t.type === "in" ? "Entrada" : "Saída",
    t.date,
    t.category,
    t.status,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map(escapeCsvField).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.setAttribute("download", `transacoes_${timestamp}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function ExportCsv({
  transactions,
  onExport,
}: {
  transactions: Transaction[];
  onExport?: () => void;
}) {
  const handleExport = () => {
    exportTransactionsToCsv(transactions);
    onExport?.();
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <button
        type="button"
        onClick={handleExport}
        disabled={!transactions.length}
        className="flex flex-col items-center justify-center gap-2 
        rounded-xl border-2 border-dashed border-[#435D77] bg-[#171F33] 
        px-4 py-4 transition-colors hover:bg-slate-700 "
      >
        <Download className="h-5 w-5 text-sky-400" />
        <span className="text-sm font-bold">Exportar CSV</span>
      </button>
    </div>
  );
}