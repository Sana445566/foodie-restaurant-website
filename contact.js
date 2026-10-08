// ==========================
// CONTACT FORM
// ==========================

let contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Page refresh hone se rokna
        event.preventDefault();

        alert("Thank you! Your message has been sent.");

        // Form clear karna
        contactForm.reset();

    });

}

