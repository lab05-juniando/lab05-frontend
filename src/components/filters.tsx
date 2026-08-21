"use client";

import Select from "./ui/select";

import { typesFilterTransaction } from "./static/typesFilterTransactions";
import { Button } from "./buttons";
import { ListFilter } from "lucide-react";

export default function TransactionFilter() {
  return (
    <div className="p-6 my-5 rounded-lg  font-sans border border-[#293142] bg-[#11192C] text-[#DAE2FD] shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-6">
        <Select
          label="período"
          valueSelected={typesFilterTransaction.periods[0]}
          setSelection={() => console.log("setPeriod")}
          values={typesFilterTransaction.periods}
        />
        <Select
          label="tipo"
          valueSelected={typesFilterTransaction.periods[0]}
          setSelection={() => console.log("setPeriod")}
          values={typesFilterTransaction.types}
        />
        <Select
          label="categoria"
          valueSelected={typesFilterTransaction.periods[0]}
          setSelection={() => console.log("setPeriod")}
          values={typesFilterTransaction.categories}
        />

        <div className="flex items-end w-full">
          <Button
            className="bg-[#222A3D] text-[#DAE2FD] border-[#3E484F] border"
            colorsParam="medium"
            weight="400"
          >
            <ListFilter size={18} /> Filtrar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}
