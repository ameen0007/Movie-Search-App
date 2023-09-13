
import { Header } from '../header/Header'
import {  Searchinput} from '../searchinput/Searchinput';
import {Searchlist} from '../searchlist/Searchlist';


import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Header/>
       <Searchinput/>
       <Searchlist/>
       <Footer/>
    </div>
  )
}
