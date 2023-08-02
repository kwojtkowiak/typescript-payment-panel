/*implements HasFormatter so I make sure that it has format() method inside */
export class Payment {
    constructor(recipient, details, amount, position) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.position = position;
    }
    format() {
        return `${this.recipient} otrzyma ${this.amount} PLN za ${this.details}`;
    }
}
