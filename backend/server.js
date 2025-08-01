const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
    res.json({
        name: 'Kiran Yadav',
        referralCode: 'kiran2025',
        donations: 3700
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
