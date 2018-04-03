let _TOTAL = 0
let _TAB = document.querySelector('.md-tab-content:not(.ng-hide)')

let totalTheme = '<li class="group ng-scope total-checked"><div class="label">Total selecionado</div><div class="amount positive ng-binding">R$0</div></li>'
_TAB.querySelector('.summary ul').insertAdjacentHTML('beforeend', totalTheme)

let bills = _TAB.querySelectorAll('.charges-list .charge')

bills.forEach(function(bill){
  let amount = bill.querySelector('.amount').textContent.replace(',', '.')

  let input = '<input type="checkbox" value="' + amount + '" class="bill-input">'
  let inputTheme = '<label class="bill-check">' + input + '<span class="bill-check__icon"></span></label>'

  let description = bill.querySelector('.description')
  description.insertAdjacentHTML('afterbegin', inputTheme)
})

const amountTotal = function (el) {
  let amount = parseFloat(el.value)

  if (el.checked) {
    _TOTAL += amount
  } else {
    _TOTAL -= amount
  }

  document.querySelector('.total-checked .amount').textContent = _TOTAL.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// listens to clicks only inside current bills div
_TAB.addEventListener('click', function(e) {
  let target = e.target
  if (target.className === 'bill-input') {
    amountTotal(target)
  }
}, false);
