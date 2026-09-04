

interface ISummaryDash {

    balance: number;
    currentBalance: number;
    saldoEntrada: number;
    saldoSaida: number;
    monthlyBalanceChangePercentage: number;
    income: number;
    expenses: number;
    forecast: number;
    clashFlow: IClashFlow[];
    recentTransactions: IRecentTransactions[];
}



interface IClashFlow {
    date: string;
    type: string;
    total: number;

}

interface IRecentTransactions {
    id: number;
    companyId: number;
    descreption: string;
    amount: number;
    date: string;
    type: string;
    note: string;
}