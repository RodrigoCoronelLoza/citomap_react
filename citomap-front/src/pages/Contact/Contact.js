import React from "react";
import classes from "./contact.module.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Contact() {
  const numero = "+59172529466";
  return (
    <div className={classes.container}>
      <h1> ✆ CONTACTO</h1>
      <p>'Zona San Luis Tasa, Av. Heroes del pacifico. No 7. Piso 2'</p>
      <p> Cel: 71350532</p>
      <FloatingWhatsApp
        phoneNumber="+59172529466"
        accountName="CITOMAP"
        chatMessage="Hola como puedo ayudarte?"
        avatar="none"
      ></FloatingWhatsApp>
    </div>
  );
}
