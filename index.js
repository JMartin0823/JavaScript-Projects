document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generate-btn"); // Find the button after the page loads
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    let pass1 = document.getElementById("pass-1");
    let pass2 = document.getElementById("pass-2");

    function generatePass() {
        pass1.textContent = "";
        pass2.textContent = "";
        for (let i = 0; i < 10; i++) {
            let randomIndex1 = Math.floor(Math.random() * characters.length);
            let randomIndex2 = Math.floor(Math.random() * characters.length);
            pass1.textContent += characters[randomIndex1];
            pass2.textContent += characters[randomIndex2];
        }
    }

    // Listen for a "click" on the button
    button.addEventListener("click", generatePass);
});
