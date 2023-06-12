// import { loadStripe } from "@stripe/stripe-js";

// import { Elements } from "@stripe/react-stripe-js";
// import { useParams } from "react-router-dom";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";

// const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);
// const Payment = () => {
//    const {price} = useParams()
    
//     return (
//         <div className="w-full">
//           <h2>payment</h2>
//           <Elements stripe={stripePromise}>
//           <CheckoutForm price={price}></CheckoutForm>
//           </Elements>
//         </div>
//     );
// };

// export default Payment;