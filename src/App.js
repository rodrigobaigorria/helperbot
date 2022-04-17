import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { Routes, Route } from "react-router-dom";
import BuildChatbot from "./pages/buildChatbot/BuildChatbot";
import ChatCenter from "./pages/chatCenter/ChatCenter";


function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/build' element={<BuildChatbot />} />
        <Route path='/chatcenter' element={<ChatCenter />} />

    </Routes>
      </div>
    </>
  );
}

export default App;
