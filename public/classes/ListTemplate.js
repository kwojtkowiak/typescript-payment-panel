export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = heading === 'invoice' ? 'Faktura' : 'Opłata';
        li.append(h4);
        p.innerText = item.format();
        li.append(p);
        position === 'start' ? this.container.prepend(li) : this.container.append(li);
    }
}
