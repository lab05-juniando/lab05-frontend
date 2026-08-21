import CashFlowChart from "../../components/cash-flow-chart";
import RecentTransactions from "../../components/RecentTransactions";
import SummaryCard from "../../components/summary-card";

export default function DashboardPage() {
  return (
    <main className="w-full p-6 space-y-6">

      
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

      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

        <section>
          <CashFlowChart/>
        </section>

        <aside>
          <RecentTransactions />
        </aside>

      </div>

    </main>
  );
}
/*..*/
