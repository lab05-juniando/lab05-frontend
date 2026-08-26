"use client";
import { Button } from "@/src/components/buttons";
import CashFlowChart from "../../components/cash-flow-chart";
import RecentTransactions from "../../components/RecentTransactions";
import SummaryCard from "../../components/summary-card";
import { TransactionsTable } from "../../components/TransactionsTable";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
  const [isModalopen, setIsModalopen] = useState(false);
  return (

    <div className=" w-full  p-6  flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono">
               <p className="font-mono font-medium text-[#BDC8D1]">FINANÇAS</p>
               <p className="font-mono font-medium  text-[#BDC8D1]">/</p>
               <p className="text-[#8ED5FF] font-mono">TRANSAÇÕES</p>
              </div>
    
               <h2 className="text-lg font-sans font-bold text-[#DAE2FD] tracking-tight">Visão Geral</h2>
               <h2 className="text-lg font-sans text-[#AEB6CD] tracking-tight">Acompanhe suas movimentações financeiras</h2>
            </div>
          
          
          <div className="flex items-center gap-3">

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#2A3A52] bg-[#111C2E] px-4 py-2.5 text-sm font-medium text-[#BDC8D1] transition hover:bg-[#18263A]"
          >
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-[#9AA7B8]"
            />

            Últimos 30 dias
          </button>

          <Button
            weight="500"
            className="font-sans"
            size="medium"
            colorsParam="medium"
            iconType="add"
            onClick={() => setIsModalopen(true)}
          >
            Nova Transação
          </Button>

</div>
          
        </div>
     
    <div className="w-full space-y-6 p-6">

      
      <section className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">

        <SummaryCard
          title="SALDO ATUAL"
          value="R$ 45.892,00"
          variation="+12,5%"
          subtitle="em relação ao mês anterior"
          type="saldo"
          icon="↗"
        />

        <SummaryCard
          title="ENTRADAS"
          value="R$ 12.450,00"
          subtitle="Previsão: R$ 15.000,00"
          type="entrada"
          icon="↗"
        />

        <SummaryCard
          title="SAÍDAS"
          value="R$ 5.120,00"
          subtitle="42% do orçamento mensal utilizado"
          type="saida"
          icon="↘"
        />

      </section>

      
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">

        <CashFlowChart />

        <RecentTransactions />

      </section>

      
      <section className="w-full rounded-xl border border-[#222A3D] bg-[#131B2E] p-5">

        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-[#F1F5F9]">
              Histórico de Transações
            </h2>

            <p className="mt-1 text-xs text-[#AEB6CD]">
              Acompanhe suas movimentações financeiras
            </p>
          </div>

          <button
            type="button"
            className="rounded-md border border-[#3E484F] px-3 py-2 text-xs text-[#BDC8D1] transition hover:bg-[#1F2D42]"
          >
            Filtrar
          </button>

        </div>

        <TransactionsTable />

      </section>

    </div>
    </div>
  );
}
/**/