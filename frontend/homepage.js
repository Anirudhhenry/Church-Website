document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Burger animation
        burger.classList.toggle('toggle');
    });
    loadEvents();
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);
});

function loadEvents() {
    const eventsList = document.getElementById('events-list');
    const events = [
        { date: 'June 10, 2024', description: 'Community Outreach Program' },
        { date: 'July 15, 2024', description: 'Youth Summer Camp' },
        { date: 'August 20, 2024', description: 'Annual Church Picnic' },
    ];

    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.date} - ${event.description}`;
        eventsList.appendChild(li);
    });
}

function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMessage = document.getElementById('contactMessage');

    if (name && email && message) {
        contactMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        contactMessage.style.color = 'green';
    } else {
        contactMessage.textContent = 'Please fill in all fields.';
        contactMessage.style.color = 'red';
    }

    contactMessage.style.display = 'block';
}
