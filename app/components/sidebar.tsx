"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const nav_items = [
  { label: "Dashboard", href: "/dashboard"},
  { label: "Transactions", href: "/transactions"},
  { label: "Shopping List", href: "/shopping-list"},
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
  <aside className="flex w-[220px] shrink-0 flex-col border-r border-border-soft bg-sidebar px-4 py-6">
      <div className="px-2 pb-7">
        <h1 className="text-[20px] font-bold tracking-tight text-[#8ED5FF]">
          Gestão Financeira
        </h1>
        <span className="mt-0.5 block font-mono text-[10px] font-semibold tracking-[0.12em] text-muted">
          CORPORATE FINANCE
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5">
        {nav_items.map(({ label, href}) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13.5px] font-medium transition-colors ${
                active
                  ? "bg-accent text-white"
                  : "text-secondary hover:bg-panel hover:text-primary"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-2 flex items-center gap-2.5 border-t border-border-soft px-2 pt-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent-soft bg-[#38BDF8] text-[15px] text-[#004965] font-bold text-accent">
          AD
        </div>
        <div>
          <div className="text-[13px] font-semibold leading-tight text-primary">
            Admin User
          </div>
          <div className="font-mono text-[10px] tracking-[0.06em] text-muted">
            SÓCIO PROPRIETÁRIO
          </div>
        </div>
      </div>
    </aside>
  );
}