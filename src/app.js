import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import StaffLogin from './components/StaffLogin';
import Feed from './components/Feed';
import Body from './components/Body';
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
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);