import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { TbPhoneCall } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import "./App.css";

function App() {
  const btn1_text = "VIA SUPPORT CHAT";

  const btn2_text = "VIA CALL";

  const btn3_text = "VIA EMAIL FORM";
  const dft_btn = true;

  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Hero
        btn1_text={btn1_text}
        btn2_text={btn2_text}
        btn3_text={btn3_text}
        dft_btn={dft_btn}
        btn1_icon={<BiSolidMessageRoundedDetail fontSize="28px" />}
        btn2_icon={<TbPhoneCall fontSize="28px" />}
        btn3_icon={<MdMarkEmailUnread fontSize="28px" />}
      ></Hero>
      <Footer></Footer>
    </>
  );
}

export default App;
