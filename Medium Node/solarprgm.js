var fs = require('fs');

fs.writeFile('solarsystem.txt', 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto', function (err) {
    if (err) {
        console.log(err);
    } var content = fs.readFileSync('solarsystem.txt', 'utf8');
    console.log(content);
});

