let seatCount = 0;
let seatLeft = 40;
let totalPrice = 0;
// let grandTotal = totalPrice;

const allSeat = document.querySelectorAll('.seat_btn');

for(const seat of allSeat){
    seat.addEventListener('click', function(e){
        // added btn style
        console.log(e.target);
        e.target.style.backgroundColor = '#1DD100';
        e.target.style.color = '#FFFFFF';
        e.target.setAttribute('disabled', true)

        // counted selected seat & availavle seat
        seatCount += 1;
        setInnerText('seat_count', seatCount)
        seatLeft -= 1;
        setInnerText('seat_left', seatLeft);

        // seat details added
        const seatDetails = document.getElementById('seat_details');
        const p = document.createElement('p');
        p.innerText = e.target.innerText;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = '550';
        p3.style.textAlign = 'end';
        seatDetails.append(p);
        seatDetails.append(p2);
        seatDetails.append(p3);

        // added total & grand total price
        totalPrice += 550;
        setInnerText('total_price', totalPrice);
        grandTotal = totalPrice;
        setInnerText('grand_total', grandTotal);
    })
}

// discount apply section
const discountBtn = document.getElementById('discount_apply');
const discountInput = document.getElementById('discount_input');

discountBtn.addEventListener('click', function(){
    if(discountInput.value == 'NEW15'){
        // calculet discount
        const discount = totalPrice * (15/100);
        setInnerText('discount', discount);
        setInnerText('grand_total', totalPrice-discount)
        discountInput.value = '';

        // show discunt price & hide input fild
        const discountFild = document.querySelector('.discount_fild');
        discountFild.classList.remove('hidden');

        const inputFild = document.querySelector('.coupon_input_fild');
        console.log(inputFild);
        inputFild.classList.add('hidden');

    }
    else if(discountInput.value == 'Couple 20'){
        // calculet discount
        const discount = totalPrice * (20/100);
        setInnerText('discount', discount);
        setInnerText('grand_total', totalPrice-discount);
        discountInput.value = '';
    }
    else{
        alert('Invalid copune code')
    }
})