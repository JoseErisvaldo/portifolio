import RedeSociais from '../RedeSociais'
import './style.css'

export default function Header () {
  return(
    <div className='container-header'>
      <div className='card-header'>
        <div id='logo'>JS  <span className='dev'>Dev</span></div>
        <div className='card-nav'>
          <ul>
            <li><a>Inicio</a></li>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href='#about'>Sobre</a></li>
            <li>Contatos</li>
          </ul>
        </div>
        <RedeSociais/>
      </div>
    </div>
  )
}