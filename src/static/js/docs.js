const formDataToElement = (form) => {
    const targetElement = document.getElementById(form.dataset.target);
    const inputs = form.querySelectorAll('input');

    targetElement.setAttribute('class', '');

    inputs.forEach((input) => {
        switch (input.type) {
            case "color":
                targetElement.style.setProperty('--foreground', input.value);
                break;
            case "checkbox":
            case "radio":
                if (input.checked && !input.dataset.default && input.value) {
                    targetElement.classList.add(input.value)
                }
                break;
        }
    });  
} 

document.querySelectorAll('form[data-target]').forEach((form) => {
    formDataToElement(form);
})

document.querySelectorAll('input').forEach( input => {
    input.addEventListener('change', ({target}) => {
        formDataToElement(target.closest('form'));
    });
});
