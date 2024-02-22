import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import CompoHome from "../../Components/Home";
import './style.css'
export default function Home () {
  return(
    <div className="container-home">
      <Header/>
      <CompoHome/>
      <Footer/>
    </div>
  )
}