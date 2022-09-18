import React from "react";

import Prodlist from "../components/Prod-PageComponents/Prodlist";
import Sidebar from "../components/Prod-PageComponents/Sidebar";

const Product = () => {
  return (
    <>
      <div class="product-view">
        <div class="container">
          <div class="row">
            <Prodlist />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
