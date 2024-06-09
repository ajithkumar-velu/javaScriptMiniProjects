const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call fake spaghetti? An impasta.",
    "How does a penguin build its house? Igloos it together.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why don’t programmers like nature? It has too many bugs.",
    "What do you call cheese that isn't yours? Nacho cheese!"
];

document.querySelector(".btn").onclick = () => {
    var rand = Math.floor(Math.random() * 10);
    document.querySelector(".joke").innerHTML = jokes[rand]
}