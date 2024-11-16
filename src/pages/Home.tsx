import ChooseBetter from "../components/choose/ChooseBetter"
import Customer from "../components/Customer"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Our from "../components/our/Our"
import Product from "../components/product/Product"
import Footer from "../ui/Footer"



const Home = () => {
  return (
    <section >
      
        <Hero delay={0}  />
        <ChooseBetter />
        <Product />
        <Our />
        <Customer />
        <Newsletter />
        <Footer />
      
    </section>
  )
}

export default Home
