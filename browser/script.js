String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.substring(1);
}

window.onload = function() {
  var button = document.getElementById('button');
  var input = document.getElementById('input');
  var inputDiv = document.querySelector('.inputDiv');
  var output = document.getElementById('output');
  var length = document.getElementById('length');
  var copy1 = document.getElementById('copy1');
  var copy2 = document.getElementById('copy2');
  var copy3 = document.getElementById('copy3');
  var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink"]

  function updateSlider() {
    length.textContent = input.value / 2;
    inputDiv.style.backgroundColor = colors[(input.value - 2) / 2];
  }

  function makePassword() {
    var phrase = window.niceware.generatePassphrase(Number(input.value)).map(el => el.capitalize()).join(' ');
    output.value = phrase;
  }

  function copyPassword() {
    output.select();
    document.execCommand('copy');
  }

  function copyRandom() {
    var cache = output.value;
    var randomcase = output.value.split(' ').join('');
    var len = randomcase.length;
    var out = '';
    for (var i = 0; i < len; i++) {
      out += Math.round(Math.random()) ? randomcase[i].toUpperCase() : randomcase[i].toLowerCase();
    }
    output.value = out;
    copyPassword();
    output.value = cache;
  }

  function copyUpper() {
    var cache = output.value;
    var upper = output.value.split(' ').join('').toUpperCase();
    output.value = upper;
    copyPassword();
    output.value = cache;
  }

  function copyCamel() {
    var cache = output.value;
    var camel = output.value.split(' ').join('');
    output.value = camel;
    copyPassword();
    output.value = cache;
  }

  button.onclick = makePassword;
  input.onchange = updateSlider;
  copy1.onclick = copyRandom;
  copy2.onclick = copyUpper;
  copy3.onclick = copyCamel;
  updateSlider();
}
