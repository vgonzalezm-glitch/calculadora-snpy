const display = document.getElementById('display');

function appendCharacter(char) {
  if (display.value === '0' && char !== '.') {
    display.value = char;
  } else {
    display.value += char;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === '') return;
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error 🐾';
    setTimeout(() => clearDisplay(), 1500);
  }
}
