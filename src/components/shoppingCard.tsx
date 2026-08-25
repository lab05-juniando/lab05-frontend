import { ArrowLeftRight, PiggyBank } from 'lucide-react';

export default function shoppingCards() {
  return (
  <div className="w-full  mx-auto p-6 bg-[#0B1326] font-sans">
  {/* Grid com os 3 Cards Lado a Lado */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Card 1 - Integração Automática */}
    <div className="py-6 px-6 rounded-2xl bg-[#060E20] text-base border-2 border-dashed  border-[#3E484F] flex flex-col justify-between h-64">
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-[#222A3D] text-[#8ED5FF]  border border-[#3E484F] w-fit flex items-center justify-center">
          <ArrowLeftRight className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-semibold text-[#DAE2FD]">Integração Automática</h3>
        <p className="text-base text-[#BDC8D1]leading-relaxed">
          Ao marcar um item como comprado, o sistema converterá o valor estimado em uma transação de{' '}
          <span className="text-[#FFB4AB] font-medium">saída real</span> vinculada à data de hoje. Isso permite um controle rigoroso sem a necessidade de re-lançamento manual.
        </p>
      </div>
    </div>

    {/* Card 2 - Gestão de Inventário */}
    <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800/80 group">
      {/* Imagem de fundo com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url('/f9e01cbea8e881229185b9f60505c2f34c631c82.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1326] via-[#0b132660]/60 to-transparent" />

      {/* Conteúdo do Card */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-mono text-[#DAE2FD]">Gestão de Inventário</h3>
        <p className="text-base text-[#BDC8D1] mt-1">
          Otimize a reposição de ativos da sua empresa.
        </p>
      </div>
    </div>

    {/* Card 3 - Economia Projetada */}
    <div className="relative h-64 p-6 rounded-2xl bg-[#1d1a1e] border border-amber-900/20 flex flex-col justify-between overflow-hidden">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
          <PiggyBank className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-mono text-[#DAE2FD]">Economia Projetada</h3>
        <p className="text-base text-[#BDC8D1] leading-relaxed">
          Acompanhe as variações entre o estimado e o real em suas transações.
        </p>
      </div>

      <div className="text-2xl font-bold text-amber-500">
        12%
      </div>

      {/* Grafismo decorativo ao fundo no canto inferior direito */}
      <svg
        className="absolute -bottom-2 -right-2 w-24 h-24 text-amber-900/20 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        viewBox="0 0 100 100"
      >
        <path d="M 20 80 L 50 50 L 70 70 L 100 30" />
      </svg>
    </div>

  </div>
</div>
  );
}