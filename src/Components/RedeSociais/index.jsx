import './style.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function RedeSociais () {
  return(
    <div className='card-rede'>
      <ul>
        <li> <a href='https://www.linkedin.com/in/jos%C3%A9erisvaldodossantos/' target='blank' ><CiLinkedin/> </a></li>
        <li> <a href='https://www.instagram.com/jose.erisvaldo/' target='blank' ><FaInstagram/></a> </li>
        <li> <a href='https://github.com/JoseErisvaldo' target='blank' ><FaGithub/></a></li>
      </ul>
    </div>
  )
}