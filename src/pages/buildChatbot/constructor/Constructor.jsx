import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BuildChatbot from '../BuildChatbot';
import PhoneChatbot from '../phoneChatbot/PhoneChatbot';

import './constructor.css';

export default function Constructor() {


  const handleMessage = () => {
    console.log("hola")
  }

  return (
    <>
      <div className="buildChatbotfirst">
        <div className="build__title">El Bot responde</div>
         <div className="buildContainer">
          
         <div className="buildContainerCenter">
           <textarea
             className='build__textarea'
             placeholder='Respuesta del bot'
           >

           </textarea>
         </div> 
         <div className="buildContainerEnd">
           <Button className='btn-outline' onClick={()=>{PhoneChatbot({message:'hola a todos!!'})}}>Cancelar</Button>
           <Button className='btn-primary' onClick={()=>{PhoneChatbot({message:'hola a todos!!'})}}>Guardar</Button>
         </div>
         </div>
      </div>
    </>
  )
}
