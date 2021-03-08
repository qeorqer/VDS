//adding new contact phone
let addPhone = document.querySelector(".your__offer__auth input[type=tel] + span");
if (addPhone) {
    addPhone.addEventListener("click", () => {
        addPhone.insertAdjacentHTML("beforebegin", "<input type=\"tel\" placeholder=\"Контактный телефон\">");
    })
}

//calculating the total price
let priceInputs = document.querySelectorAll(".enter__number input");
let priceOutputs = document.querySelectorAll(".row__total__price input");
let itemsQuantity = Array.from(document.querySelectorAll(".table__item .quantity"));
let itemsQuantityToNumber = itemsQuantity.map(el => {
    return parseInt(el.innerHTML);
})

if(priceInputs && priceOutputs &&  itemsQuantityToNumber){
    priceInputs.forEach((el,key) => {
        el.addEventListener("change",()=>{
            priceOutputs[key].value = itemsQuantityToNumber[key] * el.value;
        })
    })
}