import mongoose from "mongoose";
 

const Contacto = new mongoose.Schema({
  name: String,
  telefono: String, 
  celular:string 
});

const contacto = mongoose.model("contacto", Contacto);

export default contacto;