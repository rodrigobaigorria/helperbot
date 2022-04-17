import './chatCenter.css';
import avatar from '../../assets/img/avatar.jpg';

export default function ChatCenter() {
  return (
    <div className='chatcenter'>
      <div className="chatCenterContainer">
        <div className="chatCenterContacts">
          <div className="chatCenterContactsHead"> Chats </div>
          <div className="chatCenterContactsBody">
            <div className="chatCenterContactsBodyOne">
             <img className='chatCenterContactsBodyOneAvatar' src={avatar} alt="" />
             <span className="chatCenterContactsBodyOnename">Jhon keller</span>
             <div className="chatCenterContactsBodyOnelast">

             <span className="chatCenterContactsBodyOneTime">22:12 hs</span>
             <span className="chatCenterContactsBodyOneDate">Today</span>
             </div>

            </div>
            <div className="chatCenterContactsBodyOne">
             <img className='chatCenterContactsBodyOneAvatar' src={avatar} alt="" />
             <span className="chatCenterContactsBodyOnename">Jhon keller</span>
             <div className="chatCenterContactsBodyOnelast">

             <span className="chatCenterContactsBodyOneTime">22:12 hs</span>
             <span className="chatCenterContactsBodyOneDate">Today</span>
             </div>

            </div>
            <div className="chatCenterContactsBodyOne">
             <img className='chatCenterContactsBodyOneAvatar' src={avatar} alt="" />
             <span className="chatCenterContactsBodyOnename">Jhon keller</span>
             <div className="chatCenterContactsBodyOnelast">

             <span className="chatCenterContactsBodyOneTime">22:12 hs</span>
             <span className="chatCenterContactsBodyOneDate">Today</span>
             </div>

            </div>
            <div className="chatCenterContactsBodyOne">
             <img className='chatCenterContactsBodyOneAvatar' src={avatar} alt="" />
             <span className="chatCenterContactsBodyOnename">Jhon keller</span>
             <div className="chatCenterContactsBodyOnelast">

             <span className="chatCenterContactsBodyOneTime">22:12 hs</span>
             <span className="chatCenterContactsBodyOneDate">Today</span>
             </div>

            </div>
            <div className="chatCenterContactsBodyOne">
             <img className='chatCenterContactsBodyOneAvatar' src={avatar} alt="" />
             <span className="chatCenterContactsBodyOnename">Jhon keller</span>
             <div className="chatCenterContactsBodyOnelast">

             <span className="chatCenterContactsBodyOneTime">22:12 hs</span>
             <span className="chatCenterContactsBodyOneDate">Today</span>
             </div>

            </div>
          </div>
        </div>
        <div className="chatCenterChat">
          
        </div>
      </div>
    </div>
  )
}
