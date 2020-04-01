export class Quotes {
    public showname: boolean;
    constructor(public quoteName: string, public quoteQuotes: string, public completeDate: Date) {
        this.showname = false;
    }
}