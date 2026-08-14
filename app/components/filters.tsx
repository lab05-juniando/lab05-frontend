"use client";

import Select from "./ui/select";

import { typesFilterTransaction } from "./static/typesFilterTransactions";
import { Button } from "./buttons";
import { ListFilter } from "lucide-react";

export default function TransactionFilter() {
  return (
    <div className="p-6 mx-6 my-8 rounded-lg border border-[#293142] bg-[#11192C] text-[#BDC8D1] shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            className="bg-[#222A3D] border-[#3E484F] border"
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
