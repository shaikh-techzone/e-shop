import React from "react";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-2.png";
import product3 from "../../img/product-3.png";
import product4 from "../../img/product-4.png";
import product5 from "../../img/product-5.png";

const RelatedProd = () => {
  return (
    <>
      <div class="container">
        <div class="section-header">
          <h3>Related Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </div>
      </div>

      <div class="row align-items-center product-slider product-slider-3">
        <div class="col-lg-3">
          <div class="product-item">
            <div class="product-image">
              <a href="product-detail.html">
                <img src={product1} alt="Product Image" />
              </a>
              <div class="product-action">
                <a href="#">
                  <i class="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <div class="title">
                <a href="#">Phasellus Gravida</a>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-item">
            <div class="product-image">
              <a href="product-detail.html">
                <img src={product2} alt="Product Image" />
              </a>
              <div class="product-action">
                <a href="#">
                  <i class="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <div class="title">
                <a href="#">Phasellus Gravida</a>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-item">
            <div class="product-image">
              <a href="product-detail.html">
                <img src={product3} alt="Product Image" />
              </a>
              <div class="product-action">
                <a href="#">
                  <i class="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <div class="title">
                <a href="#">Phasellus Gravida</a>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-item">
            <div class="product-image">
              <a href="product-detail.html">
                <img src={product4} alt="Product Image" />
              </a>
              <div class="product-action">
                <a href="#">
                  <i class="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <div class="title">
                <a href="#">Phasellus Gravida</a>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="product-item">
            <div class="product-image">
              <a href="product-detail.html">
                <img src={product5} alt="Product Image" />
              </a>
              <div class="product-action">
                <a href="#">
                  <i class="fa fa-cart-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i class="fa fa-search"></i>
                </a>
              </div>
            </div>
            <div class="product-content">
              <div class="title">
                <a href="#">Phasellus Gravida</a>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="price">
                $22 <span>$25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProd;
