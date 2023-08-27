let displayValue = " "
let btns=document.querySelectorAll(".button")



Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            displayValue=eval(displayValue);
            document.querySelector('input').value = displayValue;
        }

        else if (e.target.innerHTML == 'AC'){
            displayValue="0";
            document.querySelector('input').value = displayValue;
        }

        else if (e.target.innerHTML == '%') {
            displayValue=(eval(displayValue)/100);
            document.querySelector('input').value = displayValue;
        }
        else if (e.target.innerHTML == '+/-') {
            displayValue = (eval(displayValue))*(-1);
            document.querySelector('input').value = displayValue;
        }

        else if (e.target.innerHTML == '+/-') {
            displayValue = eval(displayValue).includes(dot)
            document.querySelector('input').value = displayValue;
        }

        else{
        console.log(e.target)
        displayValue= displayValue + e.target.innerHTML;
        document.querySelector('input').value = displayValue;
        }
    })
})


