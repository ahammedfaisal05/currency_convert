
//get elements
const currency_form = document.getElementById('currency_form');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');

//form submit
currency_form.onsubmit = (e) => {
    e.preventDefault();

    //get values
    let amount = currency_form.querySelector('input[name = "amount"]');
    let currency = currency_form.querySelector('select[name = "currency"]');

    if(amount.value == '' || currency.value == ''){
        msg.innerHTML = setAlert('All fields are required');
    }else{
        let rate = 0;
        switch(currency.value){
            case 'USD':
                rate = 117;
                break;
            case 'CAD':
                rate = 84;
                break;
            case 'EURO':
                rate = 127;
                break;
            case 'RIYAL':
                rate = 31;
                break;
            case 'RUPEE':
                rate = 1.40;
                break;
        }

        let final_amount = Math.round(amount.value * rate);

        details.innerHTML = setAlert(`${amount.value} ${currency.value} = ${final_amount} BDT`, 'success');
    }

}