
import { Header } from '../header/Header'
import { Footer } from '../Footer/Footer';
import './forgot.css'

export const Forgot = () => {
    
  return (
    <>
    <Header/>
    <section className="section-forgot">
      <div className="card-forgot">
        <div className="inner-forgot">
          <div>
            <h1>Forgot password</h1>
          </div>
          <div>
            <input name="email" type="email" placeholder="Enter New Password" />
             
          </div>
          <div>
            <input type="text" name="password" placeholder="Re Enter password" />
            
          </div>
          <div>
            <button>Submit</button>
          </div>
          <div >
           
          </div>
         
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
