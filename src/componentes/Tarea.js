import React, { useState } from 'react';
import '../App.css';

const Tarea = (props) => {
    const [modoEdit, setModoEdit] = useState(false)
    const [editText, setEditText] = useState("");

    const editar = () => {
        setModoEdit(true);
    }

   const manejarEdit = (event) =>{
       setEditText(event.target.value);
   }

   const submitEdit = (event) => {
       event.preventDefault();
       props.editar(props.id, editText);
       setEditText("");
       setModoEdit(false);
   }

    const borrarTarea =() => {
        props.borrar(props.id);
    }

     return(
        <div id="global">  
              
              {
                  !modoEdit ?
                  <div className="tarea">
                  <span>{props.tarea}</span>
                  <button type="button" class="btn btn-outline-primary col-lg-10"  onClick={editar}>Editar</button>
                  <button type="button" class="btn btn-outline-danger col-lg-10" onClick={borrarTarea}>Borrar</button>
                   </div>
                   :
                   <form className="formEdit" onSubmit={submitEdit}>
                       <input value={editText} onChange={manejarEdit} /> <button class="btn btn-outline-success">Guardar</button>
                   </form>
              }

         </div>

     )
}

export default Tarea;