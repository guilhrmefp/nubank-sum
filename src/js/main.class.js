class NubankCheck {
  constructor () {
    total: 0
    tab: document.querySelector('.md-tab-content:not(.ng-hide)')
    bills: this.tab.querySelectorAll('.charges-list .charge')
    totalTheme: `<li class="group ng-scope total-checked">
                  <div class="label">Total selecionado</div>
                  <div class="amount positive ng-binding">R$0</div>
                </li>`
  }

  insertTotalLi () {
    this.tab.querySelector('.summary ul').insertAdjacentHTML('beforeend', totalTheme)
  }

  insertCheckboxes () {
    this.bills.forEach(function(bill){
      let amount = bill.querySelector('.amount').textContent.replace(',', '.')

      let input = '<input type="checkbox" value="' + amount + '" class="bill-input">'
      let inputTheme = '<label class="bill-check">' + input + '<span class="bill-check__icon"></span></label>'

      let description = bill.querySelector('.description')
      description.insertAdjacentHTML('afterbegin', inputTheme)
    })
  }

  amountTotal (el) {
    let amount = parseFloat(el.value)

    if (el.checked) {
      this.total += amount
    } else {
      this.total -= amount
    }

    document.querySelector('.total-checked .amount').textContent = this.total.toLocaleString(
      'pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }
    );
  }

  addClick () {
    // listens to clicks only inside current bills div
    this.tab.addEventListener('click', function(e) {
      let target = e.target
      if (target.className === 'bill-input') {
        this.amountTotal(target)
      }
    }, false);
  }
}

let putACheckPls = new NubankCheck()

    putACheckPls.insertTotalLi()
    putACheckPls.insertCheckboxes()
    putACheckPls.addClick()