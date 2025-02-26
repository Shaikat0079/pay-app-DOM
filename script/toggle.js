document.getElementById('cash-out').style.display = 'none';

document.getElementById('add-money-btn').addEventListener('click',
    function(){
        document.getElementById('add-value').style.display = 'block';
        document.getElementById('cash-out').style.display = 'none';
    }
)
document.getElementById('cash-out-btn').addEventListener('click',
    function(){
        document.getElementById('add-value').style.display = 'none';
        document.getElementById('cash-out').style.display = 'block';
    }
)
