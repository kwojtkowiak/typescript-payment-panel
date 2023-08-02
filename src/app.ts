import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

interface IsPerson {
  name: string
  age: number
}
const invOne = new Invoice('mario', 'work', 300)
const invTwo = new Invoice('luigi', 'work2', 200)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format())
})

const anchor = document.querySelector('a')! /*! to tell ts that it IS there*/

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector(
  '#type'
) as HTMLSelectElement /*it allows to use specific methods, as TS does not know whether this ID belongs to form/button/div etc*/
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter
  doc =
    type.value === 'invoice'
      ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
      : new Payment(tofrom.value, details.value, amount.valueAsNumber)
})
