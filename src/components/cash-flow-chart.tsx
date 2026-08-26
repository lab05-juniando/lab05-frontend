"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";

// saida  = magnitude da saída (sempre positiva, ex: 5 = R$5k de saída)
// entrada = valor total da entrada (ex: 10 = R$10k de entrada)
const RAW_DATA = [
  { week: "SEM 1", saida: 5, entrada: 10 },
  { week: "SEM 2", saida: 8, entrada: 18 },
  { week: "SEM 3", saida: 6, entrada: 10 },
  { week: "SEM 4", saida: 4, entrada: 10 },
];

// Gap fixo entre a camada de saída e a camada de entrada
const GAP = 0.3;

// As 3 camadas empilhadas por semana:
// 1) saida        -> base da coluna (salmão)
// 2) gap          -> sempre 0.5 (preto)
// 3) entradaTopo  -> entrada - (saida + gap) (azul)
const data = RAW_DATA.map((d) => ({
  week: d.week,
  saida: d.saida,
  gap: GAP,
  entradaTopo: Math.max(d.entrada - (d.saida + GAP), 0),
  // valores originais guardados só para exibir no tooltip
  _saidaOriginal: d.saida,
  _entradaOriginal: d.entrada,
}));

const COLORS = {
  bg: "#0f1b2d",
  panel: "#16233a",
  grid: "#202838",
  entradasFill: "#8ED5FF",
  saidasFill: "#FFB4AB",
  gapFill: "#131B2E",
  text: "#c7d1e0",
  textDim: "#5c6b85",
};

// Linhas horizontais pontilhadas — desenhadas por cima das colunas
const GRID_VALUES = [6, 11, 17, 21];

function Legend() {
  return (
    <div style={{ display: "flex", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: COLORS.entradasFill,
            display: "inline-block",
          }}
        />
        <span style={{ color: COLORS.text, fontSize: 14 }}>Entradas</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: COLORS.saidasFill,
            display: "inline-block",
          }}
        />
        <span style={{ color: COLORS.text, fontSize: 14 }}>Saídas</span>
      </div>
    </div>
  );
}

type ChartTooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload?: {
      _entradaOriginal?: number;
      _saidaOriginal?: number;
    };
  }>;
  label?: string | number;
};

function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const row = payload[0]?.payload;
  if (!row) return null;

  const entrada = row._entradaOriginal ?? 0;
  const saida = row._saidaOriginal ?? 0;

  return (
    <div
      style={{
        background: "#0a1220",
        border: `1px solid ${COLORS.grid}`,
        borderRadius: 8,
        padding: "8px 12px",
        color: COLORS.text,
        fontSize: 13,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>{label}</div>
      <div style={{ color: COLORS.entradasFill }}>
        Entradas: R$ {entrada}k
      </div>
      <div style={{ color: COLORS.saidasFill }}>
        Saídas: R$ {saida}k
      </div>
    </div>
  );
}

export default function CashFlowChart() {
  return (
    <div
      style={{
        background: COLORS.bg,
        borderRadius: 8,
        border: "1px solid #3E484F",
        padding: "20px 24px",
        width: "100%",
        height: "100%",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <h2
          style={{
            color: "#DAE2FD",
            fontSize: 17,
            fontWeight: 400,
            margin: 0,
          }}
        >
          Fluxo de Caixa
        </h2>
        <Legend />
      </div>

      <div>
        <ResponsiveContainer width="100%" height={315}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barCategoryGap={0}
            barGap={0}
          >
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: COLORS.textDim, fontSize: 12, fontFamily: 'mono'}}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: COLORS.textDim, fontSize: 12, fontFamily: 'mono' }}
              tickFormatter={(v) => `R$ ${v}k`}
              domain={[0, 21]}
              ticks={[0, 5, 10, 15, 20]}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />

            {/* 1) Saída: base da coluna, em salmão */}
            <Bar
              dataKey="saida"
              stackId="coluna"
              fill={COLORS.saidasFill}
              isAnimationActive={false}
            />

            {/* 2) Gap: faixa fixa de 0.3 separando saída de entrada */}
            <Bar
              dataKey="gap"
              stackId="coluna"
              fill={COLORS.gapFill}
              isAnimationActive={false}
            />

            {/* 3) Entrada: topo da coluna = entrada - (saida + gap), em azul */}
            <Bar
              dataKey="entradaTopo"
              stackId="coluna"
              fill={COLORS.entradasFill}
              isAnimationActive={false}
            />

            {/* Linhas pontilhadas desenhadas por cima das colunas,
                para se sobressaírem mesmo cruzando o azul e o salmão */}
            {GRID_VALUES.map((v) => (
              <ReferenceLine
                key={v}
                y={v}
                stroke={COLORS.grid}
                strokeDasharray="2 2"
                strokeWidth={0.6}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
/**/