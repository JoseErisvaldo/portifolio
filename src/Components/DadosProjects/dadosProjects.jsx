import formulario from '../../Img/formulario.png'
import cardapioVerduras from '../../Img/cardapioVerduras.png'
import zenitezum from '../../Img/zenitezum.png'
import foodservices from '../../Img/foodservices.png'
import movienet from '../../Img/movienet.png'
import mundoonline from '../../Img/mundoonline.png'
import cryptoCurrency from '../../Img/crypto-currency.png'

const dadosProjects = [
  {
    id: 1,
    category: 'cardapio',
    img: cardapioVerduras,
    title: 'Cardapio de Verduras',
    description: 'Descrição',
    stack: ['React, TailWind'],
    repository: 'https://github.com/JoseErisvaldo/deliververduras',
    site: 'https://deliververduras.netlify.app/'
  },
  {
    id: 2,
    category: 'erp',
    img: foodservices,
    title: 'Food Services',
    description: 'Food Services',
    stack: ['React, TailWind'],
    repository: 'https://github.com/JoseErisvaldo/fooddeliveryservice',
    site: 'https://fooddelivery-service.netlify.app/catalogo'
  },
  {
    id: 3,
    category: 'ecommerce',
    img: zenitezum,
    title: 'ZêniteZum',
    description: 'ZêniteZum',
    stack: ['React, Css, Api-Mercado-Libre'],
    repository: 'https://github.com/JoseErisvaldo/Z-niteZum',
    site: 'https://zenitezum.netlify.app/'
  },
  {
    id: 4,
    category: 'investimento',
    img: cryptoCurrency,
    title: 'Crypto-Currency',
    description: 'Crypto-Currency',
    stack: ['React, Css, Api Coingecko'],
    repository: 'https://github.com/JoseErisvaldo/Cryptocurrency',
    site: 'https://crypto-currency-dev-jes.netlify.app/'
  },
  {
    id: 5,
    category: 'filme',
    img: movienet,
    title: 'Movie Net',
    description: 'Movie Net',
    stack: ['React, Css, Api Themoviedb'],
    repository: 'https://github.com/JoseErisvaldo/MovieNet',
    site: 'https://movienet-dev.netlify.app/'
  },
  {
    id: 6,
    category: 'formulario',
    img: formulario,
    title: 'Formulario de cadastro',
    description: 'Formulario de cadastro',
    stack: ['React, TailWind'],
    repository: 'https://github.com/JoseErisvaldo/registrationform',
    site: 'https://imersao-y.netlify.app'
  },
  {
    id: 7,
    category: 'erp',
    img: mundoonline,
    title: 'Mundo Online',
    description: 'Mundo Online - Sistema de afiliados',
    stack: ['React, TailWind, Banco de dados - SupaBase'],
    repository: 'https://github.com/JoseErisvaldo/mundoOnlineHub',
    site: 'https://mundoonline.netlify.app/'
  }
]

export default dadosProjects
