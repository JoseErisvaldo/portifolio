import './style.css'
export default function Projetos() {
  return (
    <div>
      <div className="flex justify-center my-4">
        <button className="mx-1 bg-blue-600 p-2 rounded text-white">
          Todos projetos
        </button>
        <button className="mx-1 bg-blue-400 p-2 rounded hover:bg-blue-600 text-white">
          Cardapios online
        </button>
        <button className="mx-1 bg-blue-400 p-2 rounded hover:bg-blue-600 text-white">
          Filmes
        </button>
        <button className="mx-1 bg-blue-400 p-2 rounded hover:bg-blue-600 text-white">
          ERP
        </button>
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
