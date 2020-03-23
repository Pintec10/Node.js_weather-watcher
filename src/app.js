const path = require('path');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Watcher',
        name: 'Roberto Milani'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'What is this..?'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Get some Help',
        helpMessage: 'this is a placeholder help message'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        forecast: 'bleak',
        location: 'here'
    })
})





app.listen(3000, () => {
    console.log('Server running on port 3000');
});