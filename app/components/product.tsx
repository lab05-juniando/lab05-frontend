"use client";

import { useState } from "react";

type Produto = {
  id: number;
  produto: string;
  valor: string;
  descricao: string;
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
      valor: "12.500,00",
      descricao: "Upgrade da infraestrutura de dados local.",
    },
    {
      id: 2,
      produto: "Licença Adobe Suite 2024",
      valor: "3.200,00",
      descricao: "Assinatura anual para o time de marketing.",
    },
    {
      id: 3,
      produto: "Mobiliário Escritório",
      valor: "4.850,00",
      descricao: "Cadeiras ergonômicas para a nova sala de reuniões.",
    },
  ]);

  function cadastrarProduto() {
    if (!produto || !valor || !descricao) {
      return;
    }

    const novoProduto: Produto = {
      id: Date.now(),
      produto,
      valor,
      descricao,
    };

    setProdutos((prev) => [...prev, novoProduto]);

    setProduto("");
    setValor("");
    setDescricao("");

    setModalAberto(false);
  }

  return (
    <div className="w-full">
      {/* Botão para abrir o modal */}
      <button
        type="button"
        onClick={() => setModalAberto(true)}
        className="rounded-md bg-[#38BDF8] px-4 py-2 text-sm font-semibold text-[#000] transition hover:bg-[#096a94]"
      >
        Novo Produto
      </button>

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
                ×
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
                placeholder="Nome do produto"
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
      <div className="mt-6 w-full overflow-hidden rounded-md border border-[#2a3548] bg-[#111a2c]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="h-[58px] border-b border-[#2a3548]">
              <th className="w-[58px] px-5 text-left">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px]"
                />
              </th>

              <th className="px-4 text-left text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Produto
              </th>

              <th className="w-[138px] px-4 text-left text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Valor
                <br />
                estimado
              </th>

              <th className="px-4 text-left text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Descrição
              </th>

              <th className="w-[140px] px-5 text-left text-[10px] uppercase tracking-[1.5px] text-[#b8c0ce]">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#2a3548] last:border-b-0"
              >
                <td className="px-5 py-4">
                  <input
                    type="checkbox"
                    className="h-[15px] w-[15px]"
                  />
                </td>

                <td className="px-4 py-4 text-sm font-medium text-[#dce3f0]">
                  {item.produto}
                </td>

                <td className="px-4 py-4 text-sm text-[#dce3f0]">
                  R$ {item.valor}
                </td>

                <td className="px-4 py-4 text-sm text-[#b8c0ce]">
                  {item.descricao}
                </td>

                <td className="px-5 py-4">
                  <button className="text-left text-sm font-semibold text-[#c4cee0] hover:text-white">
                    Marcar como
                    <br />
                    Comprado
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