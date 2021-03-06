import { Provider } from "react-redux";
import { store } from "./store/store";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css';
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { Routes, Route } from "react-router-dom";
import BuildChatbot from "./pages/buildChatbot/BuildChatbot";
import ChatCenter from "./pages/chatCenter/ChatCenter";


function App() {
  return (
    <Provider store={store}>
      <Topbar />
      <div className="container">
        <Sidebar />
    <Routes>
        <Route path='/' element={<BuildChatbot />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chatcenter' element={<ChatCenter />} />

    </Routes>
      </div>
    </Provider>
  );
}

export default App;
