// Header.js
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ onNavChange }) {
  const [nav, setNav] = useState('sobre')

  const handleNavChange = newNav => {
    setNav(newNav)
    onNavChange(newNav)
  }

  return (
    <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 p-4">
      <Link
        onClick={() => handleNavChange('sobre')}
        className={`mx-1 bg-blue-400 p-2 rounded ${
          nav === 'sobre' ? 'bg-blue-600' : 'hover:bg-blue-600'
        } text-white`}
      >
        Sobre
      </Link>
      <Link
        onClick={() => handleNavChange('projetos')}
        className={`mx-1 bg-blue-400 p-2 rounded ${
          nav === 'projetos' ? 'bg-blue-600' : 'hover:bg-blue-600'
        } text-white`}
      >
        Projetos
      </Link>
      <Link
        onClick={() => handleNavChange('contato')}
        className={`mx-1 bg-blue-400 p-2 rounded ${
          nav === 'contato' ? 'bg-blue-600' : 'hover:bg-blue-600'
        } text-white`}
      >
        Contato
      </Link>
    </div>
  )
}
