const form = document.getElementById('#paymentForm');
console.log(form)

form.addEventListener('submit', function (event) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            document.querySelector('error-message').style.display = "block";
            input.classList.add('error-input');
        } else {
            input.nextElementSibling.style.display = 'none';
            input.classList.remove('error-input');
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});