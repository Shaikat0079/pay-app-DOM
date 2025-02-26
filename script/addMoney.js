document.getElementById('add-money').addEventListener('click',
    function(event){
         event.preventDefault()
         const amount = parseFloat(document.getElementById('amount').value);
        //  console.log(amount,typeof(amount))
        const pin = parseInt(document.getElementById("pin").value);
        const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
        // console.log(mainBalance)

        if(pin === 1234){
            // console.log("You can be added")
            let sum = amount + mainBalance;
            // console.log(sum)
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            console.log("Wrong PIN!")
        }
    }
)
