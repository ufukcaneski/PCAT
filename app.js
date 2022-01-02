const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const photo = {
        id: 1,
        name: 'Photo 1',
        description: 'This is the first photo',
    }
    res.send(photo);
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));