import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js'
const anchor = document.querySelector('a') /*! to tell ts that it IS there*/
const form = document.querySelector('.new-item-form')
const type =
  document.querySelector(
    '#type'
  ) /*it allows to use specific methods, as TS does not know whether this ID belongs to form/button/div etc*/
const tofrom = document.querySelector('#tofrom')
const details = document.querySelector('#details')
const amount = document.querySelector('#amount')
const position = document.querySelector('#position')
const ul = document.querySelector('ul')
const list = new ListTemplate(ul)
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const positionValue = position.value
  const detailsValue = details.value.trim() || 'nie podano szczegółów!'
  let values
  values = [tofrom.value, detailsValue, amount.valueAsNumber, positionValue]
  let doc
  if (positionValue === 'start' || positionValue === 'end') {
    doc =
      type.value === 'invoice'
        ? new Invoice(
            ...values
          ) /*thanks to using tuple in line 25 I can use spread operator here (order of types is satisfied)*/
        : new Payment(...values)
    list.render(doc, type.value, positionValue)
  }
})
