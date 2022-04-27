const express = require('express');
const router = require('../routes/customer_route');

const app = express();
const PORT = process.env.PORT || 80;

app.use('/customer', router);

app.get('/hello', (req,res)=>{
    res.send("Hello from Iauro");
});

app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});
