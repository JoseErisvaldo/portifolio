import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 p-4">
      <Link className="mx-1 bg-blue-400 p-2 rounded hover:bg-blue-600 text-white">
        Sobre
      </Link>
      <Link className="mx-1 bg-blue-600 p-2 rounded text-white">Projetos</Link>
      <Link className="mx-1 bg-blue-400 p-2 rounded hover:bg-blue-600 text-white">
        Contato
      </Link>
    </div>
  )
}
