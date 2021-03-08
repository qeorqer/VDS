//making password show onclick
let passwordInput = document.querySelector(".passwordInput input");
let togglePassword = document.querySelector(".passwordInput span");
if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    })
}

//making select registerType work
let regTypes = document.querySelectorAll(".register__type span");
let regCustomer = document.querySelector(".customer__type");
let regSeller = document.querySelector(".seller__type");

if (regTypes && regCustomer && regSeller) {
    regTypes.forEach((el,key) => {
        el.addEventListener("click", () => {
            el.classList.add("activeType");
            regTypes[regTypes.length-1-key].classList.remove("activeType");
            if (el.dataset.type === "customer") {
                regSeller.classList.remove("activeType");
                regCustomer.classList.add
                ("activeType");
            } else {
                regSeller.classList.add("activeType");
                regCustomer.classList.remove("activeType");
            }
        })
    })
}
//adding one more contact phone
let addPhone = document.querySelector(".addPhone");
if (addPhone) {
    addPhone.addEventListener("click", () => {
        addPhone.insertAdjacentHTML("beforebegin", "<input type=\"tel\" placeholder=\"Контактный телефон\">");
    })
}
