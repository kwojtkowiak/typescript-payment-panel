import { HasFormatter } from '../interfaces/HasFormatter'
/*implements HasFormatter so I make sure that it has format() method inside */
export class Payment implements HasFormatter {
  constructor(readonly recipient: string, private details: string, public amount: number, readonly position: string) {}

  format() {
    return `${this.recipient} otrzyma ${this.amount} PLN za ${this.details}`
  }
}
