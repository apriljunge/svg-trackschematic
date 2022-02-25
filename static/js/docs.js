const formDataToElement = (form) => {
    const targetElement = document.getElementById(form.dataset.target);
    const inputs = form.querySelectorAll('input');

    targetElement.setAttribute('class', '');

    inputs.forEach((input) => {
        if (input.dataset.property === undefined) {
            if (input.checked && !input.dataset.default && input.value) {
                targetElement.classList.add(input.value)
            }
        } else {
            let value = input.value;

            if (input.dataset.unit !== '') {
                value += input.dataset.unit;
            }

            if (input.nextElementSibling) {
                input.nextElementSibling.value = value;
            }

            if (input.value === input.dataset.default) {
                value = null;
            }

            targetElement.style.setProperty(input.dataset.property, value);
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

    input.addEventListener('keyup', ({target}) => {
        formDataToElement(target.closest('form'));
    });
});
