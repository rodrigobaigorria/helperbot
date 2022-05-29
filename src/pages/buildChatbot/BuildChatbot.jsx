
import './buildChatbot.css';
import Constructor from './constructor/Constructor';
import Intents from './intents/Intents';
import PhoneChatbot from './phoneChatbot/PhoneChatbot';

export default function BuildChatbot() {

  return (
    <div className='buildChatbotContainer'>
    <div className="buildChatbotNotice">
     Construye el flujo de tu chatbot
    </div>
    <br />
    <div className='buildChatbot'>
      <Constructor/>
      <PhoneChatbot/>
      <Intents />
    </div>
    </div>  
  )
}
