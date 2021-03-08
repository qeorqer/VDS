//adding new contact phone
let addPhone = document.querySelector(".addPhone");
if (addPhone) {
    addPhone.addEventListener("click", () => {
        addPhone.insertAdjacentHTML("beforebegin", "<input type=\"tel\">");
    })
}
//adding new branch
let addBranch = document.querySelector(".addBranch");
if (addBranch) {
    addBranch.addEventListener("click", () => {
        addBranch.insertAdjacentHTML("beforebegin", "<input type=\"text\" name=\"obl\" placeholder=\"Область\">\n" +
            "                        <input type=\"text\" name=\"city\" placeholder=\"Город\">\n" +
            "                        <input type=\"text\" name=\"street\" placeholder=\"Улица\">");
    })
}

//making password show onclick
let passwordInput = document.querySelectorAll(".passwordInput input");
let togglePassword = document.querySelectorAll(".passwordInput span");
if (passwordInput && togglePassword) {
    togglePassword.forEach((el,key) => {
        el.addEventListener("click", () => {
            if (passwordInput[key].type === "password") {
                passwordInput[key].type = "text";
            } else {
                passwordInput[key].type = "password";
            }
        })
    })

}
