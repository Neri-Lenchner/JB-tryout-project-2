export declare class Currency {
    id: string;
    symbol: string;
    name: string;
    isOn: boolean;
    image: string | {
        thumb: string;
        small: string;
        large: string;
    };
    priceUSD: string;
    priceEUR: string;
    priceILS: string;
    timeStamp: number;
    isCollapsed: boolean;
    constructor(id: string, symbol: string, name: string, isOn?: boolean, image?: string | {
        thumb: string;
        small: string;
        large: string;
    }, priceUSD?: string, priceEUR?: string, priceILS?: string, timeStamp?: number, isCollapsed?: boolean);
}
//# sourceMappingURL=currency.model.d.ts.map