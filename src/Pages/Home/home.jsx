import Header from '../../Components/Header/header'
import Projetos from '../../Components/Projetos/projetos'
import SideBar from '../../Components/SideBar/sideBar'
import H2 from '../../Components/UIComponents/h2/h2'

export default function Home() {
  return (
    <div className="bg-[#f3f4f6] min-h-screen p-8">
      <div className="bg-white max-w-5xl mx-auto rounded-lg shadow">
        <div className="flex flex-col lg:flex-row">
          <SideBar />
          <div className="lg:w-2/3">
            <Header />
            <div className="px-8">
              <H2 h2={'Portifolio'} />
            </div>
            <Projetos />
          </div>
        </div>
      </div>
    </div>
  )
}
