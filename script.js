function append(character) {
    const result = document.getElementById('result');
    result.value += character;
}

function clearScreen() {
    const result = document.getElementById('result');
    result.value = '';
}

function backspace() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
