"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboardIcon, ShoppingCartIcon, ReceiptIcon } from 'lucide-react';


const nav_items = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon},
  { label: "Transactions", href: "/dashboard/transactions", icon: ReceiptIcon},
  { label: "Shopping List", href: "/dashboard/shopping-list", icon: ShoppingCartIcon},
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
  <aside className="flex w-[220px] flex-col border-r border-r-[#3E484F] bg-[#131B2E] py-6">
      <div className="px-4 pb-7">
        <h1 className="text-[18px] font-bold leading-tight text-[#8ED5FF]">
          Gestão Financeira
        </h1>
        <span className=" block font-mono text-[10px] text-[#BDC8D1]">
          CORPORATE FINANCE
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5">
        {nav_items.map(( item ) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-4.5 py-2 text-[12px] transition-colors ${
                active
                  ? "bg-[#1F2D42] text-[#8ED5FF] border-r-3 border-[#8ED5FF]-500"
                  : "text-[#BDC8D1]"
              }`}
            >
              <Icon size={16}/>
              <span className={`transition-all duration-150 ${active ? 'font-bold' : 'font-normal'}`}>
                {item.label}
              </span>            
            </Link>
          );
        })}
      </nav>

      <div className="mt-2 flex items-center gap-2.5 border-t border-t-[#3E484F] px-4.5 pt-2.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#38BDF8] text-[12px] text-[#004965] font-bold">
          AD
        </div>
        <div>
          <div className="text-[12px] font-inter leading-tight text-primary">
            Admin User
          </div>
          <div className="font-inter tracking-[0.06em] text-[7px] text-[#BDC8D1]">
            SÓCIO PROPRIETÁRIO
          </div>
        </div>
      </div>
    </aside>
  );
}