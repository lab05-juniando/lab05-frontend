import Link from "next/link";

type TransactionType = "entrada" | "saida";

export interface RecentTransaction {
  id: number;
  title: string;
  date: string;
  time: string;
  amount: number;
  type: TransactionType;
  // icon: typeof faShoppingBag;
}

interface RecentTransactionsProps {
  transactions?: RecentTransaction[];
}

const mockTransactions: RecentTransaction[] = [
  {
    id: 1,
    title: "Amazon Brasil",
    date: "Hoje",
    time: "14:30",
    amount: 249.9,
    type: "saida",
    // icon: faShoppingBag,
  },
  {
    id: 2,
    title: "Salário Mensal",
    date: "Ontem",
    time: "09:15",
    amount: 8500,
    type: "entrada",
    // icon: faMoneyBillWave,
  },
  {
    id: 3,
    title: "Restaurante Sabor",
    date: "12 de Maio",
    time: "20:00",
    amount: 124,
    type: "saida",
    // icon: faUtensils,
  },
  {
    id: 4,
    title: "Posto Shell",
    date: "10 de Maio",
    time: "11:20",
    amount: 320,
    type: "saida",
    // icon: faCar,
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default function RecentTransactions({
  transactions = mockTransactions,
}: RecentTransactionsProps) {
  return (
    <section className="w-full rounded-xl border border-[#222A3D] bg-[#131B2E] p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#F1F5F9]">Recentes</h2>

        <Link
          href="/dashboard/transactions"
          className="text-xs font-semibold text-[#7DD3FC] underline underline-offset-2 transition hover:text-[#BAE6FD]"
        >
          Ver Tudo
        </Link>
      </div>

      <div className="space-y-3">
        {transactions.map((transaction) => {
          const isIncome = transaction.type === "entrada";

          return (
            <div
              key={transaction.id}
              className="flex items-center gap-3 rounded-lg border border-[#222A3D] bg-[#131B2E] p-3 transition hover:bg-[#192238]"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                  isIncome
                    ? "bg-[#1B3440] text-[#7DD3FC]"
                    : "bg-[#202B45] text-[#7DD3FC]"
                }`}
              >
                {/* <FontAwesomeIcon
                  icon={transaction.icon}
                  className="h-4 w-4"
                /> */}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#F1F5F9]">
                  {transaction.title}
                </p>

                <p className="mt-0.5 text-[10px] uppercase text-[#AEB6CD]">
                  {transaction.date}, {transaction.time}
                </p>
              </div>

              <div className="text-right">
                <div
                  className={`flex items-center justify-end gap-1 text-sm font-bold ${
                    isIncome ? "text-[#7DD3FC]" : "text-[#F3A6A6]"
                  }`}
                >
                  <span>{isIncome ? "+" : "-"}</span>
                  <span>{formatCurrency(transaction.amount)}</span>
                </div>

                <p className="mt-0.5 text-[10px] uppercase text-[#AEB6CD]">
                  {isIncome ? "Entrada" : "Saída"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
/*..*/
