
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './Components/Authcontext.jsx'
import { Apiproivider } from './Pages/contextapi.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

   <Apiproivider>
   <Authprovider>
     <BrowserRouter>
        
            <App />
            
     </BrowserRouter>
     </Authprovider>
     </Apiproivider>
    
   
)
