let submitButton = document.getElementById("submit");
let ratingResult = document.getElementById("ratingResult");
let card = document.getElementsByClassName("card")[0];
let popup = document.getElementsByClassName("popup")[0];
let buttons = document.querySelectorAll(".card__rating--button-group button")

submitButton.addEventListener('click', (event) => {
    card.style.visibility = "hidden";
    popup.style.visibility = "visible";
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });
        
        ratingResult.textContent = button.textContent;
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
    })
});