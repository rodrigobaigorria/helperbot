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
         <div className="buildContainer">
           <div className="buildButtons">

         <ButtonGroup className='buildButtons' variant="text" color="primary" aria-label="outlined primary button group">
           
        <Button>Texto</Button>
        <Button>Boton</Button>
        <Button>Imagen</Button>
      </ButtonGroup>
           </div>
         <div className="buildContainerCenter">
         
         </div> 
         <div className="buildContainerEnd">
           <Button variant="contained" color="primary" onClick={()=>{PhoneChatbot({message:'hola a todos!!'})}}>Enviar</Button>
         </div>
         </div>
      </div>
    </>
  )
}
