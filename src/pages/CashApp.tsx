import { FunctionComponent } from "react";
import NavigationBar from '../components/Navigation';
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const CashApp: FunctionComponent = () => {


  return (
    <>
      <div className="bg-black h-full  bg-cover bg-center  ">
        <NavigationBar />
        <Hero />
        <Footer />
        </div>
    </>
  );
};

export default CashApp;
