const express = require('express')
// const { Sequelize } = require('sequelize');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// koneksi ke sequelize
// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: 'localhost',

// });

// const connections = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
      
// }
app.get('/penjumlahan', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (typeof a !== 'number') {
        
        res.status(400).json({
            status: 'validation error',
            message: 'a harus number!'
        });
    } else if (typeof b !== 'number') {
        res.status(400).json({
            status: 'validation error',
            message: 'b harus number!'
        });
    } else {
        res.json({
            a,
            b,
            result: a + b
        });
    }
})
app.use('/api/', routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})