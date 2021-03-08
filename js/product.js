//showing only required features
let togglers = document.querySelectorAll(".card__buttons span");
let blocks = document.querySelectorAll(".product__about ,.product__reviews,.product__sertificates");

let showBlockFunction = (arr,key) =>{
    for(let i = 0; i < arr.length; i++){
        if(i !== key){
            arr[i].classList.remove("active__block");
        } else{
            arr[i].classList.add("active__block");
        }
    }

}
if(togglers && blocks){
    togglers.forEach((el,key)  => {
        el.addEventListener("click",() =>{
            showBlockFunction(togglers,key);
            showBlockFunction(blocks,key);
        })
    } )
}

/*opening the popup*/
let popupToggler = document.querySelector("a.card__about");
let popup = document.querySelector(".popup__wrapper");
let closePopup = document.querySelector(".close__popup");
if(popupToggler && popup){
    popupToggler.addEventListener("click", (e) =>{
        e.preventDefault();
        popup.classList.add("popup__opened");
        document.querySelector("html").style.overflowY = "hidden";
    })
    closePopup.addEventListener("click", () =>{
        popup.classList.remove("popup__opened");document.querySelector("html").style.overflowY = "initial";
    })
}