document.addEventListener("DOMContentLoaded",function(){

    const numberInput = document.getElementById("input");
    const checkButton = document.getElementById("btn");
    const resultMessage = document.getElementById("result-msg");

    checkButton.addEventListener("click",function(){

        const number = parseInt(numberInput.value);
        
        if(isNaN(number)){
            resultMessage.textContent = "Please enter a valid number";
            
            return;
        }    

        if(isPrime(number)){
            resultMessage.textContent = `${number} is a prime number`
            
        }else{
            resultMessage.textContent = `${number} is not a prime number`
           
        }


    });

    function isPrime(num){

        if (num <= 1) return false;
        if (num <=3) return true;

        if(num % 2 === 0 || num % 3 === 0) return false;

        return true;
    }


});