import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Feed from'./components/Feed';
import AdminLogin from'./components/AdminLogin';
import StaffSignUp from'./components/StaffSignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import StaffLogin from './components/StaffLogin';
import Body from './components/Body';
import Feed from'./components/Feed';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';




const AppLayout=()=>{
    return(
        <div>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    )
};
ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);