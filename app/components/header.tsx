"use client";

import { IconLupa } from "./search";
import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 bg-[#0B1326] border-b border-b-[#3E484F] px-7 py-3">
      <div className="flex w-[448px] items-center gap-2 rounded-md border border-[#3E484F] px-2 py-2">
        <IconLupa ></IconLupa>
        <input
          type="text"
          placeholder="Pesquisar transações..."
          className="w-full text-[10px]"
        />

      </div>

      <div className="flex items-center gap-5 text-[#BDC8D1]">
        <button
          type="button"
          aria-label="Notificações"
          className="flex h-4 w-4 items-center"
        >
          <Bell></Bell>
        </button>

        <button
          type="button"
          aria-label="Configurações"
          className="flex h-4 w-4 items-center "
        >
          <Settings></Settings>
        </button>
      </div>
    </header>
  );
}