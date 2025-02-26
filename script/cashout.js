document.getElementById('cash-remove').addEventListener('click',
    function(event){
        event.preventDefault();
        const pin = parseInt(document.getElementById("cashout-pin").value);
        const amount = parseFloat(document.getElementById("cashout-amount").value);
        const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
        if(pin===1234){
            let sum = mainBalance - amount
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert("Enter Valid Pin")
        }
    }
)