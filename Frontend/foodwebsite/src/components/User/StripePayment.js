import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function StripePayment({ total }) {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:9091/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: total,
          currency: "INR",
          description: "testing",
        },
      })
      .then((response) => {
        console.log(response.data);
        //18602661177
        let id= response.data.created;
        window.location.href=`/cart/${id}`
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="App">
      <Stripe
        stripeKey="pk_test_51JUy66SCFw90GwcyGUamrvXlOwpkC2J3dnuzD1JFfCH6TBj3tjb3WxIstdK0l0FysMvbJEXwjYdh5mxba9ndVp8n00V1QLMjKv"
        token={handleToken}
      />
    </div>
  );
}
export default StripePayment;
