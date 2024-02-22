import './style.css'
import img from '../../Img/img-portifolio.jpg'
import profile from '../../Img/jose_santos.jpg'
import GitHub from '../GitHub'
import TechStack from '../TechStack'
import Projects from '../Projects'

export default function Presentation () {
  return(
    <div>
      <div className='card-title'>
        <h2>
          Olá, eu sou o José Erisvaldo, <br></br>um desenvolvedor Front-End, <br></br>apaixonado pelo que faz!
        </h2>
        <img src={img} alt='img-inicio'/>
      </div>
      <a name="about"></a>
      <h2>Saiba um pouco sobre mim</h2>
      <div className='card-about'>
        <div className='card-desc'>
          <img src={profile} />
          <ul className='list-about'>
            <li>
              👨🏻‍💻   Eu tive meu primeiro contato com linhas de código aos 22 anos de idade, quando queria criar um robo para investimentos na bolsa de valores. Depois de muita pesquisa consegui desenvolver. Desde então, eu decidi que eu queria me aprofundar na linguagem de progamação — eu queria ser um programador.
            </li>
            <li>
              🚀   Atualmente, tenho como foco principal da minha carreira as áreas de desenvolvimento web. Utilizo a stack JavaScript (React) para desenvolver em ambas as frentes.
            </li>
            <li>
              🕹️   Sou apaixonado por games. É o que eu mais gosto de fazer pra me divertir e esvaziar a cabeça haha!
            </li>
          </ul>
        </div>
      </div>
      <TechStack/>
      <GitHub/>
      <Projects/>
    </div>
  )
}