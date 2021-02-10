import React, { useState } from 'react';
import '../App.css';

const TareaForm = (props) =>{
    const [inputText, setInputText]=useState("");
    const [validacion, setValidacion] = useState(true);
    const manejarFormulario = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        } else{
            setValidacion(false);
        }
       
    }
     
    return(
       <div id="arriba">
        <form className='form' onSubmit={submit}>
            <span>Insertar Tarea</span>
            <input value={inputText} onChange={manejarFormulario}/>
            
            <button class="btn btn-dark">Adiccionar</button>
        </form>

        {
          !validacion &&
          <div className="validacion"> Adiccione una tarea, por favor</div>
        }

       </div>

    )
}

export default TareaForm;
