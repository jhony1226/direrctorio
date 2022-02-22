import contacto from "../model/contacto"; 

const AdicionarContacto= async (req, res) => {
    if (!req.body.name ) 
    return res.status(400).send({ message: "Nombre Vacio" });

    if (ExisteContacto(req.body.name))
      return res.status(400).send({ message: "El contacto ya existe" });
 
    
  }; 

 const ExisteContacto= async (req, res) => {
    const buscarContacto = await contacto.findOne({ name: req.body.name });
    return buscarContacto;
 } 
 const ListarContactos = async (req,res)=>{ 
    const Contactos = await contacto.find(); 
        return res.status(200).send({ status: true, Contacto: Contactos});   
 }

 const EliminarContacto = async (req, res) => {
    const findContacto = await contacto.findById({ _id: req.body._id });
    if(!findContacto) 
    return res.status(400).send({ message: "No se encuentra Registrado" });

    const eliminaContacto = await contacto.findByIdAndDelete(req.params._id, {
        status: false,
      });

      return !eliminaContacto
    ? res.status(400).send({ message: "No se Puede Eliminar" })
    : res.status(200).send({ message: "Contacto ELiminado" });


 }

 export default {
    AdicionarContacto,ExisteContacto, ListarContactos
  }
