import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const invOne = new Invoice('mario', 'work', 300);
const invTwo = new Invoice('luigi', 'work2', 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const anchor = document.querySelector('a'); /*! to tell ts that it IS there*/
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type'); /*it allows to use specific methods, as TS does not know whether this ID belongs to form/button/div etc*/
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    doc =
        type.value === 'invoice'
            ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
            : new Payment(tofrom.value, details.value, amount.valueAsNumber);
});
