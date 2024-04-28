// Home.js
import { useState } from 'react'
import About from '../../Components/About/about'
import Header from '../../Components/Header/header'
import Projetos from '../../Components/Projetos/projetos'
import SideBar from '../../Components/SideBar/sideBar'
import H2 from '../../Components/UIComponents/h2/h2'
import Contact from '../../Components/Contact/contact'

export default function Home() {
  const [nav, setNav] = useState('sobre')

  const handleNavChange = newNav => {
    setNav(newNav)
  }

  return (
    <div className="bg-[#f3f4f6] min-h-screen p-8">
      <div className="bg-white max-w-5xl mx-auto rounded-lg shadow">
        <div className="flex flex-col lg:flex-row">
          <SideBar />
          <div className="lg:w-2/3">
            <Header onNavChange={handleNavChange} />
            <div className="px-8">
              <H2 h2={'Portifolio'} />
            </div>

            {nav === 'sobre' && <About />}
            {nav === 'projetos' && <Projetos />}
            {/*{nav === 'contato' && <Contact />}*/}
          </div>
        </div>
      </div>
    </div>
  )
}
