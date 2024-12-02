// import Button from "./Button";

// const Hero = ({
//   btn1_text,
//   btn2_text,
//   btn3_text,
//   dft_btn,
//   btn1_icon,
//   btn2_icon,
//   btn3_icon,
// }) => {
//   const fun22 = (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     // console.log(e.target[0].value);
//     // console.log(e.target[1].value);
//     // console.log(e.target[2].value);
//     console.log("yes clicked 22");
//   };

//   return (
//     <div class=" maxlimit hero_container container col-xl-10 col-xxl-8 px-4 py-5">
//       <div class="row align-items-center g-lg-5 py-5">
//         <div class="col-lg-7 text-center text-lg-start">
//           <h1 class="display-4 fw-bold lh-1  mb-3 heading">Get in Touch</h1>
//           <p class=" para col-lg-10 fs-4">
//             LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
//           </p>
//           <div className="btn_box">
//             <Button text={btn1_text} icon={btn1_icon}></Button>
//             <Button text={btn2_text} icon={btn2_icon}></Button>
//             <Button
//               text={btn3_text}
//               icon={btn3_icon}
//               dft_btn={dft_btn}
//             ></Button>
//           </div>
//         </div>
//         {/* <div className="btn_box">
//           <Button text={btn1_text} icon={btn1_icon}></Button>
//           <Button text={btn2_text} icon={btn2_icon}></Button>
//           <Button
//             onClick={fun11}
//             text={btn3_text}
//             icon={btn3_icon}
//             dft_btn={dft_btn}
//           ></Button>
//         </div> */}
//         <div class="pp col-md-10 mx-auto col-lg-5">
//           <form
//             onSubmit={fun22}
//             class="p-4 p-md-5 border rounded-3 bg-body-tertiary"
//           >
//             <div class="form-floating mb-3">
//               <input
//                 type="input"
//                 class="form-control"
//                 id="name"
//                 placeholder="name@example.com"
//               />
//               <label for="name">Name</label>
//             </div>

//             <div class="form-floating mb-3">
//               <input
//                 type="email"
//                 class="form-control"
//                 id="floatingInput"
//                 placeholder="name@example.com"
//               />
//               <label for="floatingInput">Email address</label>
//             </div>

//             <div class="form-floating mb-3">
//               <input
//                 type="text"
//                 class="form-control"
//                 id="text"
//                 placeholder="Password"
//               />
//               <label for="text">Write Something Here...</label>
//             </div>

//             <div class="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value="remember-me" /> Remember me
//               </label>
//             </div>

//             <button
//               onClick={fun22}
//               class="w-100 btn btn-lg btn-primary"
//               type="submit"
//             >
//               SUBMIT
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import Button from "./Button";

const Hero = ({
  btn1_text,
  btn2_text,
  btn3_text,
  dft_btn,
  btn1_icon,
  btn2_icon,
  btn3_icon,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="maxlimit hero_container container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3 heading">Get in Touch</h1>
          <p className="para col-lg-10 fs-4">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          </p>
          <div className="btn_box">
            <Button text={btn1_text} icon={btn1_icon}></Button>
            <Button text={btn2_text} icon={btn2_icon}></Button>
            <Button
              text={btn3_text}
              icon={btn3_icon}
              dft_btn={dft_btn}
            ></Button>
          </div>
        </div>
        <div className="pp col-md-10 mx-auto col-lg-5">
          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="message"
                name="message"
                placeholder="Write something here..."
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="message">Write Something Here...</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
