import { createBrowserRouter } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from './components/home/Home';
import Chat from './components/chat/Chat';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/chat/:_id',
        element: <Chat/>
    }
]);

export default router;
