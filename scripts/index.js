const seats = document.querySelectorAll('.seats');
const ticketPrice = ticketPriceById('ticketPrice');
const nextButton = document.getElementById('nextButton');
const couponInput = document.getElementById('couponInput');
const couponClaimButton = document.getElementById('couponClaimButton');
const couponOnePercentage = getInnerValueById('couponFirst');
const couponOneCode = document.getElementById('couponOneCode').innerText;
const couponTwoPercentage = getInnerValueById('couponTwo');
const couponTwoCode = document.getElementById('couponTwoCode').innerText;

let countValue = 0;

userNumber.addEventListener('input', function (e) {
    const lengthOfInput = e.target.value;
    const lengthOfInputFeild = lengthOfInput.length;
    if (lengthOfInputFeild == 0 || countValue == 0) {
        const nextButton = document.getElementById('nextButton');
        nextButton.setAttribute("disabled", true);
        nextButton.style.backgroundColor = '#F7F8F8';
    }
    else if (lengthOfInputFeild >= 1 && countValue >= 1) {
        const nextButton = document.getElementById('nextButton');
        nextButton.removeAttribute("disabled");
        nextButton.style.backgroundColor = '#1DD100';
    }
})

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        const pressedSeat = e.target.innerText;
        const pressedSeatButton = document.getElementById(pressedSeat);
        if (countValue >= 4) {
            alert('You have selected maximum number of seats !');
            return;
        } 
        addColorById(pressedSeat);
        const remainingSeatValue = getInnerValueById('remainingSeatCount');
        const remainingSeat = remainingSeatValue - 1;
        setInnerValueById('remainingSeatCount', remainingSeat);
        const newCountValue = increaseCounterValueById('selectedseatCount');
        setInnerValueById('selectedseatCount', newCountValue);
        addingSelectedSeatDetailsById('selectedSeatDetails', pressedSeat, ticketPrice);
        const updatedTotalPrice = updateElementValueById('totalPrice', ticketPrice);
        setInnerValueById('totalPrice', updatedTotalPrice);
        const GrandTotalPrice = updateGrandTotalPrice(updatedTotalPrice);
        setInnerValueById('grandTotal', GrandTotalPrice);
        countValue++;
        const numberLength = numberValueLength('userNumber');
        if (numberLength >= 1 && countValue >= 1) {
            const nextButton = document.getElementById('nextButton');
            nextButton.removeAttribute("disabled");
            nextButton.style.backgroundColor = '#1DD100';
        }
        pressedSeatButton.setAttribute('disabled' , true)
        if (countValue >= 4) {
            couponInput.removeAttribute("disabled");
            couponClaimButton.removeAttribute("disabled");
            couponClaimButton.style.backgroundColor = '#1DD100';
            return;
        }
    });
}

couponClaimButton.addEventListener('click' , function(){
    const couponInputValue = couponInput.value;
    if(couponInputValue === couponOneCode){
        calculateUpdateWithCouponOne();
        return;
    }
    else if(couponInputValue === couponTwoCode){
        calculateUpdateWithCouponTwo();
        return;
    }
    else{
        alert('Your Provided Coupon is not valid !!');
        return;
    }
})