// useSummary.ts
import { useCallback, useState } from 'react';
import { Stock } from 'types/stock';

const useSummary = () => {
    const [summary, setSummary] = useState<{ currentTotalValue: number; totalInvested: number, todaysPNL: number, totalPNL: number }>({
        currentTotalValue: 0,
        totalInvested: 0,
        todaysPNL: 0,
        totalPNL: 0
    });

    const calculateSummary = useCallback((stocks: Stock[]) => {
        if (stocks.length > 0) {
            const currentTotalValue = stocks.reduce((total, stock) => {
                return total + stock.quantity * stock.ltp;
            }, 0);
            const totalInvested = stocks.reduce((total, stock) => {
                return total + stock.quantity * stock.avgPrice;
            }, 0) - currentTotalValue;

            const todaysPNL = stocks.reduce((total, stock) => {
                return total + (stock.close - stock.ltp) * stock.quantity;
            }, 0);
            const totalPNL = currentTotalValue - totalInvested

            setSummary({
                currentTotalValue: +currentTotalValue.toFixed(2),
                totalInvested: +totalInvested.toFixed(2),
                todaysPNL: +todaysPNL?.toFixed(2),
                totalPNL: + totalPNL?.toFixed(0)
            });
        }
    }, []);

    return { summary, calculateSummary };
};

export default useSummary;
