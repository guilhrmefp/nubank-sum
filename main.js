_TOTAL = 0
_TAB = document.querySelector('.md-tab-content:not(.ng-hide)')

var totalTheme = '<li class="group ng-scope total-checked"><div class="label">Total selecionado</div><div class="amount positive ng-binding">R$0</div></li>'
_TAB.querySelector('.summary ul').insertAdjacentHTML('beforeend', totalTheme)

var bills = _TAB.querySelectorAll('.charges-list .charge')

bills.forEach(function(bill){
  var amount = bill.querySelector('.amount').textContent.replace(',', '.')

  var input = '<input type="checkbox" value="' + amount + '" class="bill-input">'
  var inputTheme = '<label class="bill-check">' + input + '<span class="bill-check__icon"></span></label>'

  var description = bill.querySelector('.description')
  description.insertAdjacentHTML('afterbegin', inputTheme)
})

const amountTotal = function (el) {
  var amount = parseFloat(el.value)

  if (el.checked) {
    _TOTAL += amount
  } else {
    _TOTAL -= amount
  }

  document.querySelector('.total-checked .amount').textContent = _TOTAL.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// listens to clicks only inside bills div
document.querySelector('.md-tab-content:not(.ng-hide)').addEventListener('click', function(e) {
  let target = e.target
  if (target.className === 'bill-input') {
    amountTotal(target)
  }
}, false);
