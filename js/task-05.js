let input = document.getElementById("name-input");
let span = document.getElementById("name-output");

input.oninput = function () {
    if (input.value === '') {
       span.innerHTML = 'Anonymous';
    } else{
    span.innerHTML = input.value;
    }
}