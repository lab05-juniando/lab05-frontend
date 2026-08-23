"use client";

import { Button } from "@/src/components/buttons";
import Filters from "../../../components/filters";
import { ModalBase } from "@/src/components/modal";
import { useState } from "react";
import { TransactionsStats } from "@/src/components/transactions-stats";
import { TransactionsTable } from "@/src/components/TransactionsTable";



export default function TransactionsPage() {
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

           <h2 className="text-4xl font-sans font-bold text-[#DAE2FD] tracking-tight">Histórico de Transações</h2>
        </div>
      
      <div>
      <Button  weight="500"
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

   <Filters /> 
   <TransactionsStats />
   <TransactionsTable />
   
    {isModalopen && (
      <ModalBase
      isOpen={isModalopen} 
      onRequestClose={() => setIsModalopen(false)}>
        <div className="flex flex-col gap-4">
           <div>
             <h2 className="text-xl font-mono flex justify-center items-center">Cadastrar produto</h2>

             <p className="text-sm text-gray-500 flex justify-center font-sans items-center">Adicione um produto à sua lista.</p>
           </div>

           <div className="flex flex-col gap-2">
              <label htmlFor="product" className="font-sans">
                Produto
              </label>

              <input id="product"
              type="text"
              placeholder="Nome do produto"
              className=" w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none" 
              />
           </div>

           <div className="flex flex-col gap-2">
            <label htmlFor="value" className="font-sans">
              Valor estimado
            </label>

            <input 
            id="value"
            type="number"
            placeholder="R$ 0,00"
            className=" w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none" 
            />
           </div>

           <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-sans">
                Descrição
              </label>

              <textarea id="description"
              placeholder="Descrição do produto"
              className=" w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none"
              rows={4}
              ></textarea>
           </div>

           <div className="flex justify-end gap-3">
              <button 
              type="button"
              onClick={() => setIsModalopen(false)}
              className="px-4 py-2 roundend-lg border border-[#3e484f] hover:bg-[#1822367a] cursor-pointer font-sans bg-[#182236] rounded-lg"
              >
                Cancelar
              </button>

              <button 
              type="button"
              className="px-9 py-3 rounded-lg bg-[#38BDF8] text-black font-sans font-semibold cursor-pointer hover:bg-[#8ED5FF]">
                Cadastrar
              </button>
           </div>
           </div>
      </ModalBase>
    )}
   </div>
  );
}


