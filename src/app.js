import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import StaffLogin from './components/staff/StaffLogin';
import Feed from './components/Feed/Feed';
import Body from './components/Body';
import StaffLogout from './components/staff/StaffLogout';
import AdminLogin from './components/AdminLogin';
import appStore from './store/appStore';
import { BrowserRouter, createBrowserRouter, Outlet, Route, Routes } from 'react-router';
import Body from './components/Body';
const AppLayout=()=>{
    return(
        <div>            
            <Provider store={appStore}>                                
                <BrowserRouter basename='/'>
                    <Routes>                        
                        <Route path='/' element={<Body/>}>
                            <Route path='/' element={<Feed/>}/>
                            <Route path='/stafflogin' element={<StaffLogin/>}/>
                            <Route path='/adminlogin' element={<AdminLogin/>}/>
                            <Route path='/stafflogout' element={<StaffLogout/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);