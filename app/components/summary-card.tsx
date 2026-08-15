import { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  subtitle?: string;
  variation?: string;
  icon?: ReactNode;
  type?: "entrada" | "saida" | "saldo";
}

export default function SummaryCard({
  title,
  value,
  subtitle,
  variation,
  icon,
  type = "saldo",
}: SummaryCardProps) {
  const styles = {
    entrada: {
      value: "text-sky-300",
      variation: "text-sky-300",
    },

    saida: {
      value: "text-red-300",
      variation: "text-red-300",
    },

    saldo: {
      value: "text-slate-300",
      variation: "text-slate-400",
    },
  };

  return (
    <div className="min-h-[150px] w-full rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-md">
      
      <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-slate-400">
        {title}
      </h3>

      <p className={`mt-4 text-3xl font-light ${styles[type].value}`}>
        {value}
      </p>

      <div className="mt-5 flex items-center gap-2">
        
        {icon && (
          <span className={styles[type].variation}>
            {icon}
          </span>
        )}

        {variation && (
          <span className={`text-sm ${styles[type].variation}`}>
            {variation}
          </span>
        )}

        {subtitle && (
          <span className="text-sm text-slate-400">
            {subtitle}
          </span>
        )}

      </div>
    </div>
  );
}