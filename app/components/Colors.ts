
/* @type {import('tailwindcss').Config} */

// Cores do projeto //
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // =========================
        // LIGHT MODE
        // =========================

  // ====== CORES DE BACKGROUNDS ========= //

        light: {
          background: {
            primary: "#FFFFFF", // Background primario do painel de controle
            secondary: "#F8F9FF", // Background secundario do painel de controle
            tertiary: "#F0F8FB", // Quando o mouse passar por cima dos links da navbar 
            fourth: "#CCE2DB", // Usar no grafico "Fluxo de Caixa" / Usar no background do icone "Transacao 2 (Salario Mensal)"
            fifth: "#006C49", //  Usar no grafico "Fluxo de Caixa" 
            sixth: "#EFF4FF", // Usar no "Header - Top Navegation Bar"
            seventh: "#BA1A1A", // // Usar no botao de saida em "Historico de Transacoes" / Usar no grafico "Fluxo de Caixa"  
            eighth: "#F9E9E9", // Usar no botao de saida em "Historico de Transacoes" / Usar no grafico "Fluxo de Caixa"
            ninth: "#DCE9FF", // Usar no botao de filtro em "Transacoes"
            tenth: "#6CF8BB", // Usar no Card "Economia Projetada"
          },

           //========== CORES DE TITULO ======== //
          title: {
            primary: "#0B1C30", /* Usar no: titulo principal "Visao Geral" /  alguns botoes: "Ultimos 30 dias". / No titulo dos Cards: "SALDO ATUAL", "ENTRADAS", SAIDAS) / Titulo do admin "HorizontalBorder" / Titulo Fluxo de Caixa / Titulo "Recent Transactions" */ 
            secondary: "#45474C", // Cor dos links da navbar (Dashboard, Transactions, Shopping List) 
          },

            // ============= CORES DE TEXTO ================== //

          text: {
            primary: "#006C49", // paragrafo Card "SALDO ATUA", Card "Entradas" / Fluxo de Caixa / Transacao 2 
            secondary: "#BA1A1A", // Usar no "SAIDAS" /
            tertiary: "#45474C", // Paragrafos 
            fourth: "#6CF8BB1A", // Usar no botao de "Exportar CSV"
          },

            // =========== CORES DE BORDAS ============= //

          border: {
            primary: "#C5C6CD",  // Usar nas bordas da navbar, nos cards, barra de navegacao, no header, Fluxo de Caixa,  "Recent Transactions"
          },

           //============== ICONES ===============//

          icon: {
            primary: "#1E293B", // background do icone do perfil do admin "HorizontalBorder"
            secondary: "#45474C", // icones como o da notificacao
            tertiary: "#E5EEFF", //  Recent Transactions (Quick View) 
            fourth: "#000000", //  botao do "Hisorico de Transacoes"
          },
        },

        // =========================
        // DARK MODE
        // =========================
        
        dark: {

           // ====== CORES DE BACKGROUNDS ========= //

          background: {
            primary: "#0B1326", // Background do projeto todo 
            secondary: "#131B2D",  // Usar na tela de login
            tertiary: "#C1C6D6",  // Usar no input da tela de Login
            fourth: "#BDC8D1", // Usar no paragrafo da tela de Login
            fifth: "#8ED5FF", // Usar no botao entrar da tela de login / no grafico do "Fluxo de Caixa"
            sixth: "#2B4158", // Usar no grafico "Fluxo de Caixa"
            seventh: "#3E484F", // Usar no background da barra de Pesquisa
            eighth: "#38BDF8", // Usar no background do perfil do admin
            ninth: "#10243B", // Usar quando o mouse passar por cima dos links da navbar
            tenth: "#FFB4AB", // Usar no botao de saida em "Historico de Transacoes" / Usar no grafico "Fluxo de Caixa" 
            eleventh: "#423A47", // Usar no botao de saida em "Historico de Transacoes" / Usar no grafico "Fluxo de Caixa" 
            twelfth: "#93000A", // Usar no botao 'pendente' da Transions table
            thirteenth: "#FFC176", // Usar no Card "Economia Projetada"
            fourteenth: "#222126", // Usar no Card "Economia Projetada"
          },

           // ============== CORES DE TITULO ========== // 

          title: {
            primary: "#DAE2FD", // Usar no: titulo principal "Visao Geral" /  alguns botoes: "Ultimos 30 dias". / No titulo dos Cards: "SALDO ATUAL", "ENTRADAS", SAIDAS) / Titulo do admin "HorizontalBorder" / Titulo Fluxo de Caixa / Titulo "Recent Transactions" */ 
            secondary: "#FFB4AB", // Usar no botao de saida em "Historico de Transacoes" / Usar no grafico "Fluxo de Caixa" 

          },

          // =========== CORES DOS ICONES ============= // 

          icon: {
            primary: "#717785", // Usar o icone do Login
            secondary: "#1F2F42", // Usar no bakcground do card "Recent Transactions"
            tertiary: "#2A2A3A", // Usar no background dos  icones do Dashboard
            fourth: "#2D3449", // Usar no background dos icones do Dashboard
            fifth: "#7BD0FF",  // Usar nos background dos icones no geral
          },
        },
      },
    },
  },
  plugins: [],
};