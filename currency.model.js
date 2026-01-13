export class Currency {
    id;
    symbol;
    name;
    isOn;
    image;
    priceUSD;
    priceEUR;
    priceILS;
    timeStamp;
    isCollapsed;
    constructor(id, symbol, name, isOn = false, image = '', priceUSD = '', priceEUR = '', priceILS = '', timeStamp = 0, isCollapsed = true) {
        this.id = id;
        this.symbol = symbol;
        this.name = name;
        this.isOn = isOn;
        this.image = image;
        this.priceUSD = priceUSD;
        this.priceEUR = priceEUR;
        this.priceILS = priceILS;
        this.timeStamp = timeStamp;
        this.isCollapsed = isCollapsed;
    }
}
//# sourceMappingURL=currency.model.js.map