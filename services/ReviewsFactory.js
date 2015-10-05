nicksFlicks.factory("ReviewsFactory", function ReviewsFactory(){
    var factory = {};

    factory.reviews = [
        { name: "Braveheart the Musical is Truly a Modern Day Classic.",
        description: "The highlight of the film is the stunning rendition of 'FREEEDOOOOOMMMMM', though the dance-choreography of The Battle of Stirling surely comes at a close second",
        id: 1},

        { name: "The Hobbit Part 4: Return of Smaug Proves that There is No Such Thing as Too Many Hobbit Movies",
        description: "In a word: wow. Who knew that Jackson could pull off yet another Hobbit film, this time instead of just stretching the source material to its most illogical extremes, he just made it up!",
        id: 3},

        { name: "Adam: The Story of Adam Sandler is the Masterful Chronicle of One Comedian's Stellar Career",
        description: "Woah, this one was even better than Grown Ups 2.",
        id: 4},
    ];
    return factory;
});
