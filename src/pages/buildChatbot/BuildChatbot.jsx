
import { useState } from 'react';
import './buildChatbot.css';
import Constructor from './constructor/Constructor';
import PhoneChatbot from './phoneChatbot/PhoneChatbot';

export default function BuildChatbot({message}) {

  const [msg, setMsg] = useState('');

  if(message){
    setMsg(message);
  }

  return (
    <div className='buildChatbotContainer'>
    <div className="buildChatbotNotice">
     <h3 className='buildChatbotNoticeText'>Construye el flujo de tu chatbot</h3>
    </div>
    <br />
    <div className='buildChatbot'>
      <Constructor/>
      <PhoneChatbot message={msg}/>
      <div className="buildChatbotIntents">
          third
      </div>
    </div>
    </div>  
  )
}
