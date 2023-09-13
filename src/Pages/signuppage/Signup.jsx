
import { Header } from '../header/Header'
import { Footer } from '../Footer/Footer'

export const Signup = () => {
  return (
    <>
    <Header/>
    <section className="section-forgot">
      <div className="card-forgot">
        <div className="inner-forgot">
          <div>
            <h1>Sign up</h1>
          </div>
          <div>
            <input name="email" type="email" placeholder="Enter your Name" />
             
          </div>
          <div>
            <input name="email" type="email" placeholder="Enter your Email" />
             
          </div>
          <div>
            <input type="text" name="password" placeholder="Enter your password" />
            
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
