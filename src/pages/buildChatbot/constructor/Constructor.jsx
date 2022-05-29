import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { sendMessage, startBotMessage } from '../../../actions/botActions';
import {useForm} from '../../../hooks/useForm';

import './constructor.css';

export default function Constructor() {

  const dispatch = useDispatch();
  
  const [ formValues, handleInputChange] = useForm();
  
  const { message } = formValues;
  
  const handleMessage = (e) => {
    e.preventDefault();
    console.log(message)
    dispatch(sendMessage(message));
    dispatch(startBotMessage(message));
  }

  return (
    <>
      <div className="buildChatbotfirst">
        <div className="build__title">Posibles respuestas del Bot</div>
         <div className="buildContainer">
          <form onSubmit={handleMessage}>
         <div className="buildContainerCenter">
           <textarea
             className='build__textarea'
             placeholder='Respuesta del bot'
             name='message'
             value={message}
             onChange={handleInputChange}
           >

           </textarea>
         </div> 
         <div className="buildContainerEnd">
           <Button className='btn-outline' >Cancelar</Button>
           <Button type='submit' className='btn-primary'>Guardar</Button>
         </div>
         </form>
         </div>
      </div>
    </>
  )
}
