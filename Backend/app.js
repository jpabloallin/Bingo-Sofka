var express = require("express");
var app = express();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var multer = require('multer'),
    bodyParser = require('body-parser'),
    path = require('path');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productDB");
var fs = require('fs');
var user = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

app.use("/", (req, res, next) => {
    try {
        if (req.path == "/login" || req.path == "/register" || req.path == "/") {
            next();
        } else {
            /* token if authorized*/
            jwt.verify(req.headers.token, 'shhhhh11111', function (err, decoded) {
                if (decoded && decoded.user) {
                    req.user = decoded;
                    next();
                } else {
                    return res.status(401).json({
                        errorMessage: 'Usuario no autorizado!',
                        status: false
                    });
                }
            })
        }
    } catch (e) {
        res.status(400).json({
            errorMessage: 'Algo no funcionó bien!',
            status: false
        });
    }
})

// app.get("/", (req, res) => {
//     res.status(200).json({
//         status: true,
//         title: 'Inicio'
//     });
// });

/* login api */
app.post("/login", (req, res) => {
    try {
        if (req.body && req.body.username && req.body.password) {
            user.find({ username: req.body.username }, (err, data) => {
                if (data.length > 0) {

                    if (bcrypt.compareSync(data[0].password, req.body.password)) {
                        checkUserAndGenerateToken(data[0], req, res);
                    } else {

                        res.status(400).json({
                            errorMessage: 'Nombre de usuario o contraseña es incorrecta!',
                            status: false
                        });
                    }

                } else {
                    res.status(400).json({
                        errorMessage: 'Nombre de usuario o contraseña es incorrecta!',
                        status: false
                    });
                }
            })
        } else {
            res.status(400).json({
                errorMessage: 'Añade un parámetro apropiado primero!',
                status: false
            });
        }
    } catch (e) {
        res.status(400).json({
            errorMessage: 'Error, algo no funcionó!',
            status: false
        });
    }

});

/* register api */
app.post("/register", (req, res) => {
    try {
        if (req.body && req.body.username && req.body.password) {

            user.find({ username: req.body.username }, (err, data) => {

                if (data.length == 0) {

                    let User = new user({
                        username: req.body.username,
                        password: req.body.password
                    });
                    User.save((err, data) => {
                        if (err) {
                            res.status(400).json({
                                errorMessage: err,
                                status: false
                            });
                        } else {
                            res.status(200).json({
                                status: true,
                                title: 'Registro satisfactorio!'
                            });
                        }
                    });

                } else {
                    res.status(400).json({
                        errorMessage: `Nombre de usuario ${req.body.username} ya existe!`,
                        status: false
                    });
                }
            });

        } else {
            res.status(400).json({
                errorMessage: 'Añade un parámetro apropiado primero!',
                status: false
            });
        }
    } catch (e) {
        res.status(400).json({
            errorMessage: 'Error, algo no funcionó!',
            status: false
        });
    }
});

function checkUserAndGenerateToken(data, req, res) {
    jwt.sign({ user: data.username, id: data._id }, 'shhhhh11111', { expiresIn: '1d' }, (err, token) => {
        if (err) {
            res.status(400).json({
                status: false,
                errorMessage: err,
            });
        } else {
            res.json({
                message: 'Inicio de sesión satisfactorio!.',
                token: token,
                status: true
            });
        }
    });
}

app.listen(1000, () => {
    console.log("Server is Runing On port 1000");
  });
module.exports = app;
