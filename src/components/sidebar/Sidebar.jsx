import './sidebar.css';
import { 
    LineStyle, 
    PeopleOutline, 
    ChatBubbleOutline, 
    BuildOutlined,
    ExitToAppOutlined
} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                  <Link className='sidebarLink' to='/'>
                  <li className="sidebarListItem active">
                      <LineStyle className='sidebarIcon' />
                      Home
                  </li>
                  </Link>
                  <Link className='sidebarLink' to='/users'>

                  <li className="sidebarListItem">
                      <PeopleOutline className='sidebarIcon' />
                      Usuarios
                  </li>
                  </Link>
                  <Link className='sidebarLink' to='/chatcenter'>
                  <li className="sidebarListItem">
                      <ChatBubbleOutline className='sidebarIcon' />
                      ChatCenter
                  </li>
                  </Link>
                  <Link className='sidebarLink' to='/build'>
                  <li className="sidebarListItem">
                      <BuildOutlined className='sidebarIcon' />
                    Chatbot
                  </li>
                  </Link>
              </ul>
          </div>
     
          <div className="sidebarMenu">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                      <ExitToAppOutlined className='sidebarIcon' />
                      Close session
                  </li>    
              </ul>
          </div> 
       </div>      
    </div>
  )
}
