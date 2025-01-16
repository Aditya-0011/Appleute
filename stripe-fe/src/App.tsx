import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Status from "./pages/Status";

const stripePromise = loadStripe(
  "pk_test_51NwrJTSFFXlnGMkMfUMdERZVxu4nsDqIZWYAWOpCFhIYqwLL6ECogUJYrQGSmEcnqncFFvU86Xb3SEGMW68J6wEd00wcD1K5rB"
);

const App: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
};

export default App;
