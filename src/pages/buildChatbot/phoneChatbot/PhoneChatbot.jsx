import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './phoneChatbot.css';

export default function PhoneChatbot() {

  const [msg, setMsg] = useState([]);

  const state = useSelector( state => state );

  console.log(state);

  useEffect(() => {
    console.log(msg);
    setMsg( state.botIn.msg );
  }, [state])
  
  return (
    <div>
      <div className="buildChatbotPhone">
         <div className={msg ? "buildChatbotPhoneMessage" : ""}>
           #{msg}
         </div>
      </div>
    </div>
  )
}
