// ==========================
// ORDER NOW BUTTON
// ==========================

let orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Your order has been added!");

    });

});


// ==========================
// CART
// ==========================

let cartButtons = document.querySelectorAll(".add-cart-btn");

let cartItems = document.getElementById("cart-items");

let cartTotal = document.getElementById("cart-total");

let cartNumber = document.getElementById("cart-count");

let cart = [];


// ==========================
// ADD TO CART
// ==========================

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let card = button.closest(".food-card");

        let foodName = card.querySelector("h5").textContent;

        let foodPriceText = card.querySelector("strong").textContent;

        let foodPrice = parseFloat(
            foodPriceText.replace("$", "")
        );

        cart.push({
            name: foodName,
            price: foodPrice
        });

        showCart();

        alert(foodName + " added to cart!");

    });

});


// ==========================
// SHOW CART
// ==========================

function showCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        let itemDiv = document.createElement("div");

        itemDiv.classList.add("cart-item");

        itemDiv.innerHTML = `
            <p>
                ${item.name} - $${item.price.toFixed(2)}
            </p>
        `;

        cartItems.appendChild(itemDiv);

        total = total + item.price;

    });


    cartTotal.textContent = total.toFixed(2);


    if (cartNumber) {

        cartNumber.textContent = cart.length;

    }

}


// ==========================
// EXPLORE MENU
// ==========================

let exploreButton = document.getElementById("explore-menu");

if (exploreButton) {

    exploreButton.addEventListener("click", function() {

        alert("Welcome to our menu!");

    });

}


// ==========================
// CONTACT BUTTON
// ==========================

let contactButton = document.getElementById("contact-btn");

if (contactButton) {

    contactButton.addEventListener("click", function() {

        alert("You can contact us for your order!");

    });

}