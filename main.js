insertCode = function () {
  _TOTAL = 0
  _TAB = document.querySelector('.md-tab-content:not(.ng-hide)')

  var totalTheme = '<li class="group ng-scope total-checked"><div class="label">Total selecionado</div><div class="amount positive ng-binding">R$0</div></li>'
  _TAB.querySelector('.summary ul').insertAdjacentHTML('beforeend', totalTheme)

  var bills = _TAB.querySelectorAll('.charges-list .charge')

  bills.forEach(function(bill){
    var amount = bill.querySelector('.amount').textContent.replace(',', '.')

    var input = '<input type="checkbox" value="' + amount + '" onClick="amountTotal(this)">'
    var inputTheme = '<label class="bill-check">' + input + '<span class="bill-check__icon"></span></label>'

    var description = bill.querySelector('.description')
    description.insertAdjacentHTML('afterbegin', inputTheme)
  })
}

amountTotal = function (el) {
  var amount = parseFloat(el.value)

  if (el.checked) {
    _TOTAL += amount
  } else {
    _TOTAL -= amount
  }

  document.querySelector('.total-checked .amount').textContent = 'R$' + _TOTAL.toFixed(2)
}
