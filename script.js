let output = document.getElementById("output-screen");

function display(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (err) {
        alert("Invalid");
    }
}

function clearScreen() {
    output.value = "";
}

function deleteLastCharacter() {
    output.value = output.value.slice(0, -1);
}