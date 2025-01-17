document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generate-btn");
    const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
        "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
    ];

    let pass1 = document.getElementById("pass-1");
    let pass2 = document.getElementById("pass-2");

    function generatePass() {
        const passwordLength = 10;
        let password1 = "";
        let password2 = "";

        for (let i = 0; i < passwordLength; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)];
            password2 += characters[Math.floor(Math.random() * characters.length)];
        }

        pass1.textContent = password1;
        pass1.dataset.password = password1;

        pass2.textContent = password2;
        pass2.dataset.password = password2;
    }

    function copyToClipboard(passwordElement) {
        navigator.clipboard.writeText(passwordElement.textContent).then(() => {
            passwordElement.classList.add("copied");
            passwordElement.textContent = "Copied!";

            setTimeout(() => {
                passwordElement.classList.remove("copied");
                passwordElement.textContent = passwordElement.dataset.password;
            }, 1000);
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }

    button.addEventListener("click", generatePass);

    pass1.addEventListener("click", () => copyToClipboard(pass1));
    pass2.addEventListener("click", () => copyToClipboard(pass2));
});
