require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/enviar-correo", async(req, res) => {
    const { nombre, email, mensaje } = req.body;

    const mailOptions = {
        to: process.env.RECEIVER_EMAIL,
        from: process.env.EMAIL_USER,
        subject: "Nuevo mensaje de contacto",
        text: `Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`,
    };

    try {
        await sgMail.send(mailOptions);
        res.json({ message: "Correo enviado con éxito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al enviar el correo" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});