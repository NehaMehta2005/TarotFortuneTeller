
import React, {useContext} from "react";
import toast,{ Toaster } from 'react-hot-toast'
import { MyContext } from "../../context/Context";

const FORM_ENDPOINT = "http://localhost:5500/submitContactForm/contactUs";

function ContactUs() {
  // const [submitted, setSubmitted] = useState(false);

  const { state, dispatch } = useContext(MyContext);
  const { submitted } = state;


  const handleSubmit = (e) => {
    e.preventDefault();

    // const inputs = e.target.elements;

    const data = {
      firstName: e.target.firstName.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // for (let i = 0; i < inputs.length; i++) {
    //   if (inputs[i].name) {
    //     data[inputs[i].name] = inputs[i].value;
    //   }
    // }

    fetch("http://localhost:5500/submitContactForm/contactUs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {

          toast.error("Form response was not ok")
          // throw new Error("Form response was not ok");
        
        } 
        toast.success("you successfully sent the message")
        // setSubmitted(true);
      
        dispatch({ type: "setSubmitted", payload: true });

      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
       <Toaster position="top-center"/>
        <div >Thank you!</div>
        <div >We'll be in touch soon.</div>
      </>
      
    );
  }

  return (
    <div>
      <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">

      <div>
          <input type="firstName" placeholder="name" name="firstName" />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <textarea placeholder="Your message" name="message" />
        </div>
        <div>
          <button type="submit">Send a message</button>
        </div>

        <Toaster position="top-center"/>
      </form>
    </div>
  );
}

export default ContactUs;