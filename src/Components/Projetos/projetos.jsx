import Button from '../UIComponents/Button/button'
import './style.css'
export default function Projetos() {
  return (
    <div>
      <div className="flex gap-3 m-4">
        <Button button={'Todos projetos'} color={'blue'} colorText={'white'} />
        <Button button={'ERP'} color={'blue'} colorText={'white'} />
        <Button button={'Filmes'} color={'blue'} colorText={'white'} />
      </div>
      <div className="web-scroll h-96 grid grid-cols-2 gap-4 p-2 overflow-y-scroll">
        <div className="w-full border">
          <img
            alt="Cadapio Online"
            className="rounded-t-lg"
            height="192"
            src="/placeholder.svg"
            style={{
              aspectRatio: '192/192',
              objectFit: 'cover'
            }}
            width="192"
          />
          <div className="p-4">
            <h5 className="text-lg font-semibold">Cadapio Online</h5>
            <p className="text-sm text-gray-600">Descrição</p>
          </div>
        </div>
      </div>
    </div>
  )
}
