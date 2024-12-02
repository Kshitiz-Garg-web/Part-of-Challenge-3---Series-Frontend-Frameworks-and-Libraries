// import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const Button = ({ icon, text, dft_btn,...rest }) => {
  return (
    <button {...rest} className={dft_btn ? "dft_btn" : "primary_btn"}>
      {icon}
      {text}
    </button>
  );
};
export default Button;
