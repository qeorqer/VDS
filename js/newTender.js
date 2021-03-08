let tenderRow = document.querySelector(".tender__inputs li");
let tenders = document.querySelector(".tender__inputs ol");
let addTender = document.querySelector(".add__tender__row")

//adding tenders row
if (tenderRow && tenders) {
    addTender.addEventListener("click", () => {
        tenders.insertAdjacentHTML("beforeEnd", "<li>\n" +
            "                    <div class=\"tender__row\">\n" +
            "                        <input type=\"text\" placeholder=\"Наименование товара\">\n" +
            "                        <input type=\"text\" placeholder=\"Производитель / тип / модель\">\n" +
            "                        <div class=\"tender__item__wrapper\">\n" +
            "                            <input type=\"number\" placeholder=\"Количество\">\n" +
            "                            <select>\n" +
            "                                <option value=\"Шт.\">Шт.</option>\n" +
            "                                <option value=\"Пример\">Пример</option>\n" +
            "                            </select>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </li>");
    })
}
//adding new contact phone
let addPhone = document.querySelector(".contactInfo span");
if (addPhone) {
    addPhone.addEventListener("click", () => {
        addPhone.insertAdjacentHTML("beforebegin", "<input type=\"tel\" placeholder=\"Контактный телефон\">");
    })
}

//making password show onclick
let passwordInput = document.querySelector(".passwordInput input");
let togglePassword = document.querySelector(".passwordInput span");
if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type == "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    })
}



