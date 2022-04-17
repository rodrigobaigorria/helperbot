import { useState } from 'react';
import './phoneChatbot.css';

export default function PhoneChatbot({message}) {

  const [msg, setMsg] = useState();

  if(message.length > 0){
    setMsg(message);
  }
  
  return (
    <div>
      <div className="buildChatbotPhone">
         <div className={msg ? "buildChatbotPhoneMessage" : ""}>
           {msg}
         </div>
      </div>
    </div>
  )
}
