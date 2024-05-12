function ticketPriceById(elementId) {
    const ticketPriceElement = document.getElementById(elementId);
    const ticketPriceElementText = ticketPriceElement.innerText;
    const ticketPriceValue = parseInt(ticketPriceElementText);
    return ticketPriceValue;
}
function addColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.color = 'white';
    element.style.backgroundColor = '#1DD100';
}

function getInnerValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

function setInnerValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function increaseCounterValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    const elementNewValue = elementValue + 1;
    return elementNewValue;
}

function addingSelectedSeatDetailsById(elementId, seatName, seatPrice) {
    const container = document.getElementById(elementId);

    const div = document.createElement('div');

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = seatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    container.appendChild(div);
}

function updateElementValueById(elementId, ticketPrice) {
    const currentTotalPriceElement = document.getElementById(elementId);
    const currentTotalPriceText = currentTotalPriceElement.innerText;
    const currentTotalPrice = parseInt(currentTotalPriceText);
    const updatedTotalPrice = currentTotalPrice + ticketPrice;
    return updatedTotalPrice;
}

function updateGrandTotalPrice(updatedTotalPrice) {
    const updatedGrandTotalPrice = updatedTotalPrice;
    return updatedGrandTotalPrice;
}


function numberValueLength(elementId) {
    const numberValue = document.getElementById(elementId).value;
    const numberValueLength = numberValue.length;
    return numberValueLength;
}

function calculateUpdateWithCouponOne(){
    const currentGrandTotalPrice = getInnerValueById('totalPrice');
        const discountedPrice = currentGrandTotalPrice * couponOnePercentage / 100;
        const updatedGrandTotalPrice = currentGrandTotalPrice - discountedPrice;
        setInnerValueById('grandTotal' , updatedGrandTotalPrice);
        const discountedPriceContainer = document.getElementById('discountedPriceContainer');
        discountedPriceContainer.classList.remove("hidden");
        setInnerValueById('discountedPrice' , discountedPrice);
        couponFieldDisabled();
}

function calculateUpdateWithCouponTwo(){
    const currentGrandTotalPrice = getInnerValueById('totalPrice');
        const discountedPrice = currentGrandTotalPrice * couponTwoPercentage / 100;
        const updatedGrandTotalPrice = currentGrandTotalPrice - discountedPrice;
        setInnerValueById('grandTotal' , updatedGrandTotalPrice);
        const discountedPriceContainer = document.getElementById('discountedPriceContainer');
        discountedPriceContainer.classList.remove("hidden");
        setInnerValueById('discountedPrice' , discountedPrice);
        couponFieldDisabled();
}

function couponFieldDisabled(){
    const couponField = document.getElementById('couponInput');
    const couponClaimButton = document.getElementById('couponClaimButton');
    couponField.setAttribute("disabled" , true);
    couponClaimButton.setAttribute("disabled" , true);
}