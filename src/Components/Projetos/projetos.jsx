import Button from '../UIComponents/Button/button'
import CardsProjects from './CardsProjects/cardsProjects'
import dadosProjects from '../DadosProjects/dadosProjects'
import './style.css'
export default function Projetos() {
  console.log(dadosProjects)
  return (
    <div>
      <div className="flex gap-3 m-4">
        <Button button={'Todos projetos'} color={'blue'} colorText={'white'} />
        <Button button={'ERP'} color={'blue'} colorText={'white'} />
        <Button button={'Filmes'} color={'blue'} colorText={'white'} />
      </div>
      <div className="web-scroll h-96 grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 overflow-y-scroll">
        <CardsProjects dados={dadosProjects} />
      </div>
    </div>
  )
}
