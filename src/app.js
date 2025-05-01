import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import StaffLogin from './components/StaffLogin';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Error from './components/Error';
import appStore from './store/appStore';
import { createBrowserRouter, Outlet } from 'react-router';
const AppLayout=()=>{
    return(
        <div>
            <Provider store={appStore}>
                <Header/>
                <Outlet/>
                <Footer/>            
            </Provider>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Feed/>
            },
            {
                path:'/stafflogin',
                element:<StaffLogin/>
            }
        ],
        errorElement:<Error/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);