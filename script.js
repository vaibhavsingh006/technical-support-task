
function selectOption(optionNumber) {
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        const sizeColor = option.querySelector('.size-color');
        const radio = option.querySelector('input[type="radio"]');

        if (index + 1 === optionNumber) {
            option.classList.add('selected');
            radio.checked = true;

            // Display the size and color section
            if (sizeColor) {
                sizeColor.style.opacity = '1';
                sizeColor.style.maxHeight = '250px';
                sizeColor.style.transition = 'max-height 0.6s ease, opacity 0.6s ease';
            }
        } else {
            option.classList.remove('selected');
            radio.checked = false;

            // Hide the size and color section
            if (sizeColor) {
                sizeColor.style.opacity = '0';
                sizeColor.style.maxHeight = '0';
                sizeColor.style.transition = 'max-height 0.6s ease, opacity 0.6s ease';
            }
        }
    });
}
