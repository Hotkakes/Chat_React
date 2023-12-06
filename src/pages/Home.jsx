import { Component, useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
const Home = () => {

  const [form, setForm] = useState({
    mensaje: "",
    messages: [
      {mensaje:'Hola...'},
    ]
  });

  const { storeNewProduct } = useFakestoreApi();
  // const state = {
  //   message: '',
  //   messages: [
  //     {id:0, text:'Hola'},
  //     {id:1, text:'Hola2'},
  //   ]
  // }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const list = form.messages;
      const newMessage = {
        mensaje: form.message
      };
      list.push(newMessage);
      //const setState({messages: list})
      setForm({
        ...form,
        messages: list,
      });
  //   //const this.setState({messages: list})
      const res = await storeNewProduct(form);
      //navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSubmit=(e) => {
  //   e.preventDefault();
  //   const list = state.messages;
  //   const newMessage = {
  //     id: state.messages.lenght,
  //     text: state.message
  //   };
  //   list.push(newMessage);
  //   //const this.setState({messages: list})
  //   const [form, setForm] = useState({
  //     id: state.messages.lenght,
  //     text: state.message
  //   });
  // }

    

  const UpdateMesagge = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 

  const {messages} = form;
  const messagesList = messages.map(message => {
    return <> <li>
     <span>{message.mensaje}</span>
    </li>
    </>
  })

  return (
    <>
    <div className="contenido">
      <div className="contactos">
        <h3>Mis Contactos</h3>
        <ul>David</ul>
        <ul>Talent Tech</ul>
      </div>
      <div className="chat">
        <ul>
        {messagesList}
        </ul>
      
      <form className="mensaje" onSubmit={handleSubmit}>
        <input type="text" placeholder="ok" name="message" onChange={UpdateMesagge.bind(this)}></input>
        <button>Enviar</button>
      </form>
      </div>
    </div>
    </>
  );
};

export default Home;
