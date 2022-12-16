let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = '=' + string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == '÷') {
            string = string + e.target.innerHTML
            let length = string.length
            string = string.replace("÷", "/");
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == 'X') {
            string = string + e.target.innerHTML
            let length = string.length
            string = string.replace("X", "*");
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == '%') {
            string = string + e.target.innerHTML
            let length = string.length
            string = string.replace("%", "");
            document.querySelector('input').value = string
        }
        else {
            console.log(e.target);

            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
});