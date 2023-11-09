import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import About from "./components/About"
import Footer from "./components/Footer"
import { Spacer } from "@nextui-org/react"

const page = () => {
  return (
    <div>

      <Navbar />
      <Landing />
      <Spacer y={20} />
      <Carousel />
      <Spacer y={20} />
      <About />
      <Footer/>

    </div>
  )
}

export default page
