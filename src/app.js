import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import StaffLogin from './components/StaffLogin';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import MenuBar from './components/MenuBar';
import Error from './components/Error';
import AdminLogin from './components/AdminLogin';
import appStore from './store/appStore';
import { BrowserRouter, createBrowserRouter, Outlet, Route, Routes } from 'react-router';
const AppLayout=()=>{
    return(
        <div>
            <Provider store={appStore}>
                <BrowserRouter basename='/'>
                    <Header/>
                    <MenuBar/>
                    <Routes>
                        <Route path='/' element={<Feed/>}>
                            <Route path='/stafflogin' element={<StaffLogin/>}/>
                            <Route path='/adminlogin' element={<AdminLogin/>}/>
                        </Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);