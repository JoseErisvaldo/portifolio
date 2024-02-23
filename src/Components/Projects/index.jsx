import './style.css'
import ReactFlix from '../../Img/Projects/react-flix.png'
import ModasOnline from '../../Img/Projects/modas-online.png'
import RedePost from '../../Img/Projects/redepost.png'
import AppCompras_1 from '../../Img/Projects/appcompras_1.png'
import Cryptocurrency from '../../Img/Projects/cryptocurrency.png'

export default function Projects () {
  return(
    <div>
      <a name="projetos"></a>
      <h2>Projetos</h2>
      <div>
        <ul id='list-projects'>
          <li>Todos os Projetos</li>
          <li>E-Commerce</li>
          <li>Hotel</li>
          <li>Barbearia</li>
          <li>Delivery</li>
        </ul>
      </div>
      <div id='container-projects'>
        <div className='card-projects'>
          <h3>React-Flix</h3>
          <img src={ReactFlix} />
          <div className='links-projects'>
            <a href="https://react-prime.netlify.app/" target='_blank'>Acessar site</a>
            <a href="https://github.com/JoseErisvaldo/prime-react" target='_blank'>Acessar Repositorio</a>
          </div>
        </div>
        <div className='card-projects'>
          <h3>Modas Online</h3>
          <img src={ModasOnline} />
          <div className='links-projects'>
            <a href="https://modasonline.netlify.app/" target='_blank'>Acessar site</a>
            <a href="https://github.com/JoseErisvaldo/modasOnline" target='_blank'>Acessar Repositorio</a>
          </div>
        </div>
        <div className='card-projects'>
          <h3>Rede Post</h3>
          <img src={RedePost} />
          <div className='links-projects'>
            <a href="https://redepost.netlify.app/" target='_blank'>Acessar site</a>
            <a href="https://github.com/JoseErisvaldo/redepost" target='_blank'>Acessar Repositorio</a>
          </div>
        </div>
        <div className='card-projects'>
          <h3>App Compras</h3>
          <img src={AppCompras_1} />
          <div className='links-projects'>
            <a href="https://joseerisvaldo.github.io/AppCompras/" target='_blank'>Acessar site</a>
            <a href="https://github.com/JoseErisvaldo/AppCompras" target='_blank'>Acessar Repositorio</a>
          </div>
        </div>
        <div className='card-projects'>
          <h3>Cryptocurrency</h3>
          <img src={Cryptocurrency} />
          <div className='links-projects'>
            <a href="https://crypto-currency-dev-jes.netlify.app/" target='_blank'>Acessar site</a>
            <a href="https://github.com/JoseErisvaldo/Cryptocurrency" target='_blank'>Acessar Repositorio</a>
          </div>
        </div>
      </div>
    </div>
  )
}