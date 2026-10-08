// ==========================
// MENU FILTER
// ==========================

let buttons = document.querySelectorAll(".category-btn");
let cards = document.querySelectorAll(".food-card");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let filter = button.getAttribute("data-filter");

        // Active button
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Cards filter
        cards.forEach(function(card) {

            let category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.closest(".col-lg-3").style.display = "";

            } else {

                card.closest(".col-lg-3").style.display = "none";

            }

        });

    });

});

// ==========================
// SPECIAL OFFER BUTTON
// ==========================

let offerButton = document.getElementById("offer-order-btn");

if (offerButton) {

    offerButton.addEventListener("click", function() {

        alert("Today's Special Offer: 20% OFF!");

    });

}