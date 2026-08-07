"use client";

import { IconLupa } from "./search";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border-soft px-7 py-4">
      <div className="flex w-[340px] max-w-[40vw] items-center gap-2 rounded-md border border-border bg-panel px-3 py-2">
        <IconLupa ></IconLupa>
        <input
          type="text"
          placeholder="Pesquisar transações..."
          className="w-full bg-transparent text-[13.5px] text-primary placeholder:text-muted outline-none"
        />

      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          aria-label="Notificações"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-secondary transition-colors hover:text-primary"
        >

        </button>

        <button
          type="button"
          aria-label="Configurações"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-panel text-secondary transition-colors hover:text-primary"
        >
          
        </button>
      </div>
    </header>
  );
}