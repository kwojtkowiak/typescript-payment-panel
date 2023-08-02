import { HasFormatter } from '../interfaces/HasFormatter'
/*implements HasFormatter so I make sure that it has format() method inside */
export class Invoice implements HasFormatter {
  constructor(readonly client: string, private details: string, public amount: number, readonly position:string) {}

  format() {
    return `${this.client} musi zapłacić ${this.amount} PLN za ${this.details}`
  }
}
