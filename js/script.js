//Evan Torres
//Seminole State 
//COP 2381 Advanced Javascript
//Rebekah Gabel


// === Gallery Thumbnail Logic ===
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.querySelector(".mainImage img");
    const thumbnails = document.querySelectorAll(".thumbnails img");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function (event) {
            event.preventDefault();
            mainImage.src = this.src;
            mainImage.parentElement.href = this.parentElement.href;
        });
    });
});

// === NAV BAR MOUSE OVER/OUT ===
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = "#eee";
        link.style.color = "#333";
        link.style.transform = "scale(1.05)";
        link.style.transition = "all 0.2s ease";
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = "";
        link.style.color = "";
        link.style.transform = "scale(1)";
    });
});

// === jQuery Glossary Table Toggle ===
$(document).ready(function () {
    $('.glossary-section').each(function () {
        $(this).children('tr:not(.collapsible-header)').hide();
    });

    $('.collapsible-header').on('click', function () {
        $(this).siblings().slideToggle(300);
    });

    // === Hamburger Menu ===
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

// === Slide Show ===
let slideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = $(".slide");
    const dots = $(".dot");

    slides.stop(true, true).slideUp(600);
    slides.eq(index).stop(true, true).slideDown(800);

    dots.removeClass("active");
    dots.eq(index).addClass("active");

    slideIndex = index;
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % $(".slide").length;
        showSlide(slideIndex);
    }, 4000);
}

$(document).ready(function () {
    showSlide(slideIndex);
    startSlideshow();

    $(".dot").on("click", function () {
        clearInterval(slideInterval);
        const index = $(this).data("slide");
        showSlide(index);
        startSlideshow();
    });
});



// === Contact Form Validation ===
$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        e.preventDefault(); // Prevent form from submitting

        // Clear all error messages first
        $("#name-error, #email-error, #message-error").text("");

        // Get field values
        const name = $("#form-name").val().trim();
        const email = $("#form-email").val().trim();
        const message = $("#form-message").val().trim();

        let isValid = true;

        // Validate Name
        if (name === "") {
            $("#name-error").text("Please enter your name.");
            isValid = false;
        }

        // Validate Email
        if (email === "") {
            $("#email-error").text("Please enter your email.");
            isValid = false;
        } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            $("#email-error").text("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Message
        if (message === "") {
            $("#message-error").text("Please enter a message.");
            isValid = false;
        }

        // Redirect if form is valid
        if (isValid) {
            window.location.href = "contacted.html";
        }
    });
});
// === Contact DatePicker ===
$(function () {
    $("#datepicker").datepicker();
});



// === Newsletter Form Validation ===
$(document).ready(function () {
    $("#newsletter-form").submit(function (event) {
        event.preventDefault(); // prevent form submission until validated
        let isValid = true;

        // Get and trim all input values
        const email1 = $("#email_1").val().trim();
        const email2 = $("#email_2").val().trim();
        const firstName = $("#first_name").val().trim();

        // Clear previous error messages
        $("#email_1").next("span").text("");
        $("#email_2").next("span").text("");
        $("#first_name").next("span").text("");

        // Email 1 validation
        if (email1 === "") {
            $("#email_1").next("span").text("Email is required.");
            isValid = false;
        }

        // Email 2 validation
        if (email2 === "") {
            $("#email_2").next("span").text("Please confirm your email.");
            isValid = false;
        } else if (email1 !== email2) {
            $("#email_2").next("span").text("Emails do not match.");
            isValid = false;
        }

        // First name validation
        if (firstName === "") {
            $("#first_name").next("span").text("First name is required.");
            isValid = false;
        }

        // Submit the form if valid
        if (isValid) {
            window.location.href = "joinnewsletter.html";
        }
    });
});

// === Environment JS Object ===
const environment = {
    location: "Vivec City is located in the Ascadian Isles region of Morrowind.",
    weather: "Hot and humid during the day, cooler at night.",
    description: "The city is built on water, with cantons rising from the lake like massive stone blocks. The surrounding land features ashy plains from Red Mountain, coastal waters, and volcanic rock formations."
};

// Injecting data into each respective div
document.getElementById("location").innerHTML = `<p><strong>📍 Location:</strong> ${environment.location}</p>`;
document.getElementById("weather").innerHTML = `<p><strong>🌤 Weather:</strong> ${environment.weather}</p>`;
document.getElementById("climate").innerHTML = `<p><strong>🌍 Environment Description:</strong> ${environment.description}</p>`;

// Optional: Center and style the text
["location", "weather", "climate"].forEach(id => {
    const div = document.getElementById(id);
    div.style.textAlign = "center";
    div.style.margin = "20px auto";
    div.style.padding = "0 20px";          // Adds space inside on left/right
    div.style.maxWidth = "600px";
    div.style.fontSize = "1.1rem";

});

// === History Timelime Tabs ===

function showTab(index) {
    // Hide all panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected panel
    const targetPanel = document.getElementById('panel-' + index);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // Activate clicked button
    const targetButton = buttons[index];
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key >= '1' && e.key <= '7') {
        const tabIndex = parseInt(e.key) - 1;
        showTab(tabIndex);
    }
});



//Events
$(document).ready(function () {
    // Mobile hamburger menu
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('active');
    });

    // Event card hover effects
    $('.event-card').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );

    // CTA button interactions
    $('.event-cta, .featured-cta').click(function () {
        const eventTitle = $(this).closest('.event-card').find('.event-title').text() ||
            $(this).closest('.featured-banner').find('h3').text();
        alert('Thank you for your interest in: ' + eventTitle + '\n\nBooking system coming soon!');
    });

    // Smooth scroll for navigation
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });

    // Animation on scroll
    $(window).scroll(function () {
        $('.event-card, .attraction-card').each(function () {
            const cardTop = $(this).offset().top;
            const cardBottom = cardTop + $(this).outerHeight();
            const windowTop = $(window).scrollTop();
            const windowBottom = windowTop + $(window).height();

            if (cardBottom > windowTop && cardTop < windowBottom) {
                $(this).addClass('in-view');
            }
        });
    });
});

// SOURCES CITED

$(document).ready(function () {
    // Mobile hamburger menu
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('active');
    });

    // Smooth scroll for navigation
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 500);
        }
    });
});