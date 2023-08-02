import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/listTemplate.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const anchor = document.querySelector('a')! /*! to tell ts that it IS there*/

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector(
  '#type'
) as HTMLSelectElement /*it allows to use specific methods, as TS does not know whether this ID belongs to form/button/div etc*/
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const position = document.querySelector('#position') as HTMLSelectElement
const positionValue = position.value as 'start' | 'end'

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  if (positionValue === 'start' || positionValue === 'end') {
    doc =
      type.value === 'invoice'
        ? new Invoice(tofrom.value, details.value, amount.valueAsNumber, positionValue)
        : new Payment(tofrom.value, details.value, amount.valueAsNumber, positionValue)

    list.render(doc, type.value, positionValue)
  }
})
