"use client";

import { useState } from "react";

type Produto = {
  id: number;
  produto: string;
  valor: number;
  descricao: string;
  comprado: boolean;
};

export default function Produtos() {
  const [modalAberto, setModalAberto] = useState(false);

  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");

  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: 1,
      produto: "Servidor Dell PowerEdge",
      valor: 12500.00,
      descricao: "Upgrade da infraestrutura de dados local.",
      comprado: false,
    },
    {
      id: 2,
      produto: "Licença Adobe Suite 2024",
      valor: 3200.00,
      descricao: "Assinatura anual para o time de marketing.",
      comprado: false,
    },
    {
      id: 3,
      produto: "Mobiliário Escritório",
      valor: 4850.00,
      descricao: "Cadeiras ergonômicas para a nova sala de reuniões.",
      comprado: false,
    },
  ]);

  function cadastrarProduto() {
    if (!produto || !valor || !descricao) {
      return;
    }

    const novoProduto: Produto = {
      id: Date.now(),
      produto,
      valor :Number(valor),
      descricao,
      comprado : false
    };

    setProdutos((prev) => [...prev, novoProduto]);

    setProduto("");
    setValor("");
    setDescricao("");
    
    
    setModalAberto(false);
  }

  function selecionarTodos(){
    const todosSelecionados = produtos.every(
      (produto) => produto.comprado
    );

    setProdutos((produtosAtuais) =>
      produtosAtuais.map((produto) => ({
        ...produto,
        comprado: !todosSelecionados,
      }))
    );
  }

  function alternarCompra(id: number) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.map((produto) =>
        produto.id === id
          ? {
              ...produto,
              comprado: !produto.comprado,
            }
          : produto
      )
    );
  }

  function formatarMoeda(valor: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  }
  return (
    <div className="w-full px-2">
      {/* Botão para abrir o modal */}
      <div className="mb-5 mt-5 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-[20px] font-inter tracking-tight text-white">
              Lista de Compras
            </h1>

            <p className="mt-1 max-w-md text-[13px] leading-5 text-slate-400">
              Gerencie aquisições futuras e provisione saídas automáticas.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Informação */}
            <div className="flex min-h-[46px] items-center gap-3 rounded-md border border-slate-700 bg-[#101a2d] px-3 py-2 text-xs text-slate-400">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-500 text-[10px]">
                i
              </div>

              <span>
                Itens comprados são registrados como
                <br />
                &apos;Saída&apos;
              </span>
            </div>

            {/* Botão */}
            <button
              type="button"
              onClick={() => setModalAberto(true)}
              className="flex min-h-[46px] items-center justify-center gap-3 rounded-md bg-[#28b6ef] px-5 text-sm font-medium text-[#07111f] transition hover:bg-[#4bc3f2]"
            >
              <span className="text-lg leading-none">+</span>
              <span>
                Novo
                <br className="sm:hidden" /> Produto
              </span>
            </button>
          </div>
        </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-[500px] rounded-lg border border-[#2a3548] bg-[#111a2c] p-6 shadow-2xl">
            
            {/* Cabeçalho */}
            <div className=" mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#e5eaf3]">
                  Cadastrar produto
                </h2>

                <p className="mt-1 text-sm text-[#8f9bad]">
                  Adicione um novo produto à sua lista.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalAberto(false)}
                className="text-xl text-[#8f9bad] transition hover:text-white"
              >
               
              </button>
            </div>

            {/* Produto */}
            <div className="mb-4">
              <label className="mb-2 block text-sm  font-mono text-[#cbd3e1]">
                Produto
              </label>

              <input
                type="text"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
                placeholder="produto do produto"
                className="w-full rounded-md border border-[#2f3a4f] bg-[#182236] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#687386] focus:border-blue-500"
              />
            </div>

            {/* Valor */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-[#cbd3e1]">
                Valor estimado
              </label>

              <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="R$ 0,00"
                className="w-full rounded-md border border-[#2f3a4f] bg-[#182236] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#687386] focus:border-blue-500"
              />
            </div>

            {/* Descrição */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-[#cbd3e1]">
                Descrição
              </label>

              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descreva o produto..."
                rows={4}
                className="w-full resize-none rounded-md border border-[#2f3a4f] bg-[#182236] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#687386] focus:border-blue-500"
              />
            </div>

            {/* Botões */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalAberto(false)}
                className="rounded-md border border-[#354158] px-4 py-2.5 text-sm font-medium text-[#cbd3e1] transition hover:bg-[#1a2538]"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={cadastrarProduto}
                className="rounded-md bg-[#38BDF8] px-4 py-2 text-sm font-semibold text-[#000] transition hover:bg-[#096a94]"
              >
                Cadastrar produto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tabela */}
      <div className="mt-5 w-full overflow-hidden rounded-md border border-[#2a3548] bg-[#111a2c]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[58px] border-b border-[#2a3548]">
              <th className="w-[58px] px-4 text-left">
                <input
                  type="checkbox"
                  onChange={selecionarTodos}
                  aria-label="Selecionar todos"
                  className="h-3 w-3 cursor-pointer appearance-none rounded-sm border border-slate-600 bg-transparent checked:border-[#28b6ef] checked:bg-[#28b6ef]"
                />
              </th>

              <th className="px-4 text-left font-mono text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Produto
              </th>

              <th className="w-[138px] px-4 text-left font-mono text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Valor
                <br />
                estimado
              </th>

              <th className="px-4 text-left font-mono text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Descrição
              </th>

              <th className="w-[140px] px-5 text-left font-mono text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
                {produtos.map((produto) => (
                  <tr
                    key={produto.id}
                    className={`border-b border-slate-700/80 last:border-b-0 ${
                      produto.comprado ? "bg-[#101a2b]/60" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="px-4 py-5 align-middle">
                      <input
                        type="checkbox"
                        checked={produto.comprado}
                        onChange={() => alternarCompra(produto.id)}
                        aria-label={`Selecionar ${produto.produto}`}
                        className="h-3 w-3 cursor-pointer appearance-none rounded-sm border border-slate-600 bg-transparent checked:border-[#28b6ef] checked:bg-[#28b6ef]"
                      />
                    </td>

                    {/* Produto */}
                    <td className="px-3 py-5 align-middle">
                      <span
                        className={`text-[12px] font-inter ${
                          produto.comprado
                            ? "text-slate-500 line-through"
                            : "text-slate-200"
                        }`}
                      >
                        {produto.produto}
                      </span>
                    </td>

                    {/* Valor */}
                    <td className="px-3 py-5 align-middle">
                      <span
                        className={`font-mono text-[12px] ${
                          produto.comprado
                            ? "text-slate-500"
                            : "text-slate-200"
                        }`}
                      >
                        {formatarMoeda(produto.valor)}
                      </span>
                    </td>

                    {/* Descrição */}
                    <td className="px-3 py-5 align-middle">
                      <span
                        className={`text-[12px] leading-5 font-inter ${
                          produto.comprado
                            ? "text-slate-600"
                            : "text-slate-400"
                        }`}
                      >
                        {produto.descricao}
                      </span>
                    </td>

                    {/* Ação */}
                    <td className="px-4 py-5 align-middle">
                      <button
                        type="button"
                        onClick={() => alternarCompra(produto.id)}
                        className={`text-[11px] font-medium leading-4 transition font-inter ${
                          produto.comprado
                            ? "text-emerald-400 hover:text-emerald-300"
                            : "text-slate-300 hover:text-[#28b6ef]"
                        }`}
                      >
                        {produto.comprado ? (
                          <>
                            Comprado
                            <br />
                            ✓
                          </>
                        ) : (
                          <>
                            Marcar como
                            <br />
                            Comprado
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
  );
}