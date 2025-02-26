// alert()
document.getElementById('login-btn').addEventListener('click',function(event){
    // console.log(event)
    console.log('hello')
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    console.log(accountNumber)
    const pin = parseInt(document.getElementById('pin').value)
    console.log(pin)
    if(accountNumber.length>=11){
        console.log(typeof(pin))
        console.log("Yess")
        if(pin === 1234){
            console.log("bhalo")
        }
    }else{
        console.log("Invalid")
    }
})