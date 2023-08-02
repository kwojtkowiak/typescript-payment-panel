/*implements HasFormatter so I make sure that it has format() method inside */
export class Invoice {
    constructor(client, details, amount, position) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.position = position;
    }
    format() {
        return `${this.client} musi zapłacić ${this.amount} PLN za ${this.details}`;
    }
}
