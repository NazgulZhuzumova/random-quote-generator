let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    'This above all: to thine own self be true', 
    'We must not allow other peoples limited perceptions to define us', 'Be a first rate version of yourself, not a second rate version of someone else', 
    'What you do speaks so loudly that I cannot hear what you say', 'The only true wisdom is knowing that you know nothing', 
    'Music in the soul can be heard by the universe',
    'If opportunity doesn’t knock, build a door',
    'You miss 100% of the shots you don’t take'
];

btn.addEventListener("click", function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
});