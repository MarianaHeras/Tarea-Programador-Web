var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  console.log(req.body);

  var obj = {
    to: 'marianaayelennajarro@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + "se contacto a través de la web y quiere más información a este correo : " + email + ". <br> Además, hizo este comentario:" + mensaje + ". <br> Su telefono es:" + telefono
  }


  var transport = nomemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  var info = await transport.sendMail(obj);

  req.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
});

module.exports = router;
