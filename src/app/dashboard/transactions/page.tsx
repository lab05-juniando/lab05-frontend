"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import api from "@/src/config/api";
import { Button } from "@/src/components/buttons";
import Filters from "../../../components/filters";
import { ModalBase } from "@/src/components/modal";
import { TransactionsStats } from "@/src/components/transactions-stats";
import { TransactionsTable } from "@/src/components/TransactionsTable";

interface TransactionFormData {
  product: string;
  value: number;
  description: string;
}

// Interface para estruturar a resposta de erro da sua API
interface ApiErrorResponse {
  message?: string;
}

export default function TransactionsPage() {
  const [isModalopen, setIsModalopen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormData>();

  const onSubmit = async (data: TransactionFormData) => {
    setErrorMessage(null);
    setLoading(true);

    try {
      await api.post("/transactions", {
        product: data.product,
        value: Number(data.value),
        description: data.description,
      });

      reset();
      setIsModalopen(false);
      alert("Produto cadastrado com sucesso!");
    } catch (error: unknown) { // Removido o 'any' e inserido 'unknown'
      console.error("Erro ao cadastrar produto:", error);

      // Verificação de tipo segura para o Axios
      if (error instanceof AxiosError) {
        const apiError = error.response?.data as ApiErrorResponse | undefined;
        setErrorMessage(
          apiError?.message || "Não foi possível cadastrar a transação. Verifique os dados."
        );
      } else {
        setErrorMessage("Ocorreu um erro inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    reset();
    setErrorMessage(null);
    setIsModalopen(false);
  };

  return (
    <div className="w-full p-6 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <p className="font-mono font-medium text-[#BDC8D1]">FINANÇAS</p>
            <p className="font-mono font-medium text-[#BDC8D1]">/</p>
            <p className="text-[#8ED5FF] font-mono">TRANSAÇÕES</p>
          </div>

          <h2 className="text-4xl font-sans font-bold text-[#DAE2FD] tracking-tight">
            Histórico de Transações
          </h2>
        </div>

        <div>
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

      <Filters />
      <TransactionsStats />
      <TransactionsTable />

      {isModalopen && (
        <ModalBase isOpen={isModalopen} onRequestClose={handleCloseModal}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-mono flex justify-center items-center">
                Cadastrar produto
              </h2>
              <p className="text-sm text-gray-500 flex justify-center font-sans items-center">
                Adicione um produto à sua lista.
              </p>
            </div>

            {errorMessage && (
              <div className="bg-red-900/40 border border-red-500/50 text-red-200 text-sm p-3 rounded-md font-sans">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="product" className="font-sans text-sm text-[#DAE2FD]">
                Produto
              </label>
              <input
                id="product"
                type="text"
                placeholder="Nome do produto"
                className="w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] text-[#DAE2FD] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none"
                {...register("product", { required: "O nome do produto é obrigatório" })}
              />
              {errors.product && (
                <span className="text-xs text-red-400 font-sans">
                  {errors.product.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="value" className="font-sans text-sm text-[#DAE2FD]">
                Valor estimado
              </label>
              <input
                id="value"
                type="number"
                step="0.01"
                placeholder="R$ 0,00"
                className="w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] text-[#DAE2FD] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none"
                {...register("value", {
                  required: "O valor é obrigatório",
                  valueAsNumber: true,
                })}
              />
              {errors.value && (
                <span className="text-xs text-red-400 font-sans">
                  {errors.value.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="value" className="font-sans text-sms text-[#DAE2fd]">
                Categoria
              </label>

              <select name="Categoria" id="categoria" className="w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] text-[#687386] font-mono focus:ring-2 focus:border-blue-500 focus:outline-none">
                <option value="Todas as categorias" >Todas as categorias</option>
                <option value="Alimentação" >Alimentação</option>
                <option value="Transporte" >Transporte</option>
                <option value="Saúde" >Saúde</option>
                <option value="Lazer" >Lazer</option>
                <option value="Outros" >Outros</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="value" className="font-sans text-sms text-[#DAE2fd]">
                Categoria
              </label>

              <select name="Status" id="Status" className="w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] text-[#687386] font-mono focus:ring-2 focus:border-blue-500 focus:outline-none">
                <option value="Todas as categorias" >Em andamento</option>
                <option value="Concluído" >Concluído</option>
                <option value="Pago" >Pago</option>
                <option value="Pendente" >Pendente</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-sans text-sm text-[#DAE2FD]">
                Descrição
              </label>
              <textarea
                id="description"
                placeholder="Descrição do produto"
                rows={4}
                className="w-full border border-[#3e484f] rounded-md px-3 py-2.5 text-sm bg-[#182236] text-[#DAE2FD] font-mono placeholder:text-[#687386] focus:ring-2 focus:border-blue-500 focus:outline-none"
                {...register("description")}
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg border border-[#3e484f] hover:bg-[#1822367a] cursor-pointer font-sans bg-[#182236] text-[#DAE2FD]"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={loading}
                className="px-9 py-3 rounded-lg bg-[#38BDF8] text-black font-sans font-semibold cursor-pointer hover:bg-[#8ED5FF] disabled:opacity-50"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </ModalBase>
      )}
    </div>
  );
}