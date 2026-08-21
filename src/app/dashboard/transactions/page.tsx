import Filters from "../../../components/filters";
import ExportCsv from "@/src/components/export-csv";

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

export default function TransactionsPage() {
  return (
    <div>
      <Filters />     
      <ExportCsv transactions={DEFAULT_TRANSACTIONS}/>
    </div>);
}
