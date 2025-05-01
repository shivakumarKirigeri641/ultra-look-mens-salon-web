import ReactDOM from 'react-dom/client'
const AppLayout=()=>{
    return(
        <div className='bg-slate-200'>
            <button className="btn btn-primary">Click Me</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout/>);