import { TrendingUp, TrendingDown } from "lucide-react";
import ExportCsv from "./export-csv";

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

const DEFAULT_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    description: "Venda Projeto Alpha",
    subtitle: "TechSolutions Inc.",
    amount: 12500,
    type: "in",
    date: "24 Out 2023",
    category: "Serviços",
    status: "Concluído",
  },
  {
    id: "2",
    description: "AWS Cloud Services",
    subtitle: "Recorrência Mensal",
    amount: -2450,
    type: "out",
    date: "22 Out 2023",
    category: "Infraestrutura",
    status: "Pago",
  },
  {
    id: "3",
    description: "Aluguel Escritório",
    subtitle: "Sede Principal",
    amount: -8200,
    type: "out",
    date: "20 Out 2023",
    category: "Operacional",
    status: "Pendente",
  },
  {
    id: "4",
    description: "Consultoria Digital",
    subtitle: "Contrato Semestral",
    amount: 5800,
    type: "in",
    date: "18 Out 2023",
    category: "Serviços",
    status: "Concluído",
  },
];

export function TransactionsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#171F33] border border-[#3E484F]  tracking-wide p-5 rounded-xl">
        <p className="text-xs font-mono text-[#BDC8D1] uppercase">Entradas (mês)</p>
        <p className="text-2xl font-sans text-[#8ED5FF] mt-2">R$ 45.230,00</p>
        <p className="text-xs font-sans text-[#8ED5FF] mt-2 flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5" /> +12% em relação ao anterior
        </p>
      </div>

      <div className="bg-[#171F33] border border-[#3E484F] tracking-wide p-5 rounded-xl">
        <p className="text-xs font-mono text-[#BDC8D1] uppercase">Saídas (mês)</p>
        <p className="text-2xl font-sans text-[#FFB4AB] mt-2">R$ 21.050,40</p>
        <p className="text-xs font-sans text-[#FFB4AB] mt-2 flex items-center gap-1">
          <TrendingDown className="w-3.5 h-3.5" /> -5% em relação ao anterior
        </p>
      </div>

      <div className="bg-[#171F33] border border-[#3E484F] tracking-wide p-5 rounded-xl">
        <p className="text-xs font-mono text-[#BDC8D1] uppercase">Saldo Operacional</p>
        <p className="text-2xl font-sans text-[#B9C8DE] mt-2">R$ 24.179,60</p>
        <p className="text-xs font-sans text-[#BDC8D1] mt-2">Saldo líquido projetado</p>
      </div>

      <ExportCsv transactions={DEFAULT_TRANSACTIONS} />
    </div>
  );
}