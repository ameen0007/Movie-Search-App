
import './footer.css'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import { PiYoutubeLogoFill} from "react-icons/pi";


export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='inner-div'>
            <div className='wrapper'>
            <div >
                <li>Questions? Call 1-844-505-2993</li>
                <li>FAQ</li>
                <li>Cookie Preferences</li>
                <div className='drop'>
                <select id="language">
                  <option value="english">English</option>
                 <option value="malayalam">Malayalam</option>
                </select>
                </div>
            </div>
            <div>
                  <li>Help Center</li>
                  <li>Corporate Information</li>
            </div>
            <div>
                 <li>Terms of Use</li>
                 <li>Privacy</li>
            </div>
            <div className='icons'>
                
                <li><a href=""><AiFillFacebook/></a></li>
                <li><a href=""><AiFillInstagram/></a></li>
                <li><a href=""><AiOutlineTwitter/></a></li>
                <li><a href=""><PiYoutubeLogoFill/></a></li>
                
                </div>
                </div>
                
        </div>
    </footer>
  )
}
