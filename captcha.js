const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// Function to generate a random string of given length
const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};

// Function to generate captcha
const generateCaptcha = () => {
    const randomString = generateRandomString(5);
    const captchaText = randomString.split('').map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char)).join(' ');
    captchaTextBox.value = captchaText;
    captchaInputBox.value = '';
    message.classList.remove('active');
};

// Function to validate the entered captcha
const validateCaptcha = () => {
    const enteredCaptcha = captchaInputBox.value.replace(/\s/g, ''); // Remove spaces from user input
    const actualCaptcha = captchaTextBox.value.replace(/\s/g, ''); // Remove spaces from generated captcha

   
    if (enteredCaptcha === actualCaptcha) {
        message.innerText = 'Entered captcha is correct';
        message.style.color = '#826afb';
    } else {
        message.innerText = 'Entered captcha is not correct';
        message.style.color = '#FF2525';
    }
};

// Add event listeners
refreshButton.addEventListener('click', generateCaptcha);
captchaInputBox.addEventListener('keyup', validateCaptcha);
submitButton.addEventListener('click', () => {
    validateCaptcha(); // Validate the captcha when the submit button is clicked
    message.classList.add('active'); // Add the 'active' class to show the message
});


// Initial generation of captcha
generateCaptcha();
