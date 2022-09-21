import React from "react";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-2.png";
import product3 from "../../img/product-3.png";
import product4 from "../../img/product-4.png";
import product5 from "../../img/product-5.png";
import product6 from "../../img/product-6.png";
import product7 from "../../img/product-7.png";
import product8 from "../../img/product-8.png";
import product9 from "../../img/product-9.png";
import DropDown from "./Dropdown";
import Searchbox from "./searchbox";

const Prodlist = () => {
  return (
    <>
      <div class="col-md-9">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-8">
                {/* <div class="product-search">
                  <input type="email" value="Search" />
                  <button>
                    <i class="fa fa-search"></i>
                  </button>
                </div> */}
                <Searchbox />
              </div>
              <div class="col-md-4">
                <div class="product-short">
                  {/* <div class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                      Product short by
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <a href="#" class="dropdown-item">
                        Newest
                      </a>
                      <a href="#" class="dropdown-item">
                        Popular
                      </a>
                    </div>
                  </div> */}
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
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
          <div class="col-lg-4">
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
          <div class="col-lg-4">
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
          <div class="col-lg-4">
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
          <div class="col-lg-4">
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
          <div class="col-lg-4">
            <div class="product-item">
              <div class="product-image">
                <a href="product-detail.html">
                  <img src={product6} alt="Product Image" />
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
          <div class="col-lg-4">
            <div class="product-item">
              <div class="product-image">
                <a href="product-detail.html">
                  <img src={product7} alt="Product Image" />
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
          <div class="col-lg-4">
            <div class="product-item">
              <div class="product-image">
                <a href="product-detail.html">
                  <img src={product8} alt="Product Image" />
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
          <div class="col-lg-4">
            <div class="product-item">
              <div class="product-image">
                <a href="product-detail.html">
                  <img src={product9} alt="Product Image" />
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

        <div class="col-lg-12">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Prodlist;
