//menu toggling
const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".header__menu");

toggler.addEventListener("click", () => {
    [menu, toggler].forEach(el => {
        el.classList.toggle("menuOpen");
    })

})

//working with select tags
const sidebar = document.querySelector(".sidebar");
if (sidebar) {
    const selectors = document.querySelectorAll(".select__form");
    const titles = document.querySelectorAll(".select__title");
    //opening the menu
    titles.forEach((el, key) => {
        el.addEventListener('click', () => {

            if ('active' === selectors[key].getAttribute('data-state')) {
                selectors[key].setAttribute('data-state', '');
                selectors[key].style.zIndex = 0;
            } else {
                selectors[key].setAttribute('data-state', 'active');
                selectors[key].style.zIndex = selectors.length - key;
            }
        });
    })

    //changing the title
    selectors.forEach((el, key) => {
        let labels = el.querySelectorAll("label");
        let title = el.querySelector(".select__title");
        el.addEventListener('click', () => {

            labels.forEach(item => {
                item.addEventListener('click', (e) => {

                    title.textContent = e.target.textContent;
                    selectors[key].setAttribute('data-state', '');

                })
            })

        })

    })
}


/*working with filters on mobile*/
let filtersToggler = document.querySelector(".show__filters");
let filtersList = document.querySelector(".sidebar .sidebar__bottom");
let closeFilters = document.querySelector(".close__filters");
let useFilters = document.querySelector(".use__filters");
if (filtersToggler && filtersList && closeFilters && useFilters) {

    filtersToggler.addEventListener("click", () => {
        filtersList.classList.add("open__filters");
    })
    closeFilters.addEventListener("click", () => {
        filtersList.classList.remove("open__filters");
    })
    useFilters.addEventListener("click", () => {
        /*add logic to use filters here*/
        filtersList.classList.remove("open__filters");
    })
}


/*star system*/
let rating = document.querySelectorAll("[data-rating]");
let displayRating = document.querySelectorAll(".stars span");
if (rating && displayRating) {
    displayRating.forEach((el, key) => {
        el.style.width = 100 * rating[key].dataset.rating / 3 + "%";
    })
}