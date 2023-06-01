"use";
var _buttons = document.getElementsByTagName("button");
(_length = _buttons.length), (i = 0);
_result = document.getElementById("result");

for (i = 0; i < _length; i++) {
  _buttons[i].onclick = calculate;
}

function calculate() {
  var _answer = this.innerHTML;
  if (_answer == "=") {
    try {
      _result.value = eval(_result.value);
    } catch (e) {
      _result.value = "0";
    }
    return;
  }
  _result.value += _answer;
}
