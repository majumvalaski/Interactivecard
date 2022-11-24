const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    /*modal.classList.toggle("hide");
    fade.classList.toggle("hide"); */
    /*jeito mais compacto de escrever linha 27 e 28*/
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


document.querySelector('.inputTemplateNumber').oninput = () =>{
    document.querySelector('.cardNumberFront').innerText = document.querySelector('.inputTemplateNumber').value;
}

document.querySelector('.inputTemplateName').oninput = () =>{
    document.querySelector('.cardholderNameFront').innerText = document.querySelector('.inputTemplateName').value;
}

/* document.querySelector('.month-input').oninput = () =>{
    document.querySelector('exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('exp-year').innerText = document.querySelector('.year-input').value;
} */

document.querySelector('.code').oninput = () =>{
    document.querySelector('.cvc').innerText = document.querySelector('.code').value;
}

