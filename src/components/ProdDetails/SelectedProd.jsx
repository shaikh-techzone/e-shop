import React from "react";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-2.png";
import product3 from "../../img/product-3.png";

const SelectedProd = () => {
  return (
    <>
      <div class="row align-items-center product-detail-top">
        <div class="col-md-5">
          <div class="product-slider-single">
            <img src={product1} alt="Product Image" />
            <img src={product2} alt="Product Image" />
            <img src={product3} alt="Product Image" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="product-content">
            <div class="title">
              <h2>Phasellus Gravida</h2>
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
            <div class="details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum quam ac mi viverra dictum. In efficitur ipsum diam,
                at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                Nulla tristique viverra nisl, sit amet bibendum ante suscipit
                non.
              </p>
            </div>

            <div class="quantity">
              <h4>Quantity:</h4>
              <div class="qty">
                <button class="btn-minus">
                  <i class="fa fa-minus"></i>
                </button>
                <input type="text" value="1" />
                <button class="btn-plus">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
            <div class="action">
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
        </div>
      </div>

      <div class="row product-detail-bottom">
        <div class="col-lg-12">
          <ul class="nav nav-pills nav-justified">
            {/* <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#description">
                Description
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#specification">
                Specification
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#reviews">
                User Reviews
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div id="description" class="container tab-pane active">
              <br />
              <h4>Product description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                condimentum quam ac mi viverra dictum. In efficitur ipsum diam,
                at dignissim lorem tempor in. Vivamus tempor hendrerit finibus.
                Nulla tristique viverra nisl, sit amet bibendum ante suscipit
                non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu
                diam eros. Aliquam et sapien eget arcu rhoncus scelerisque.
                Suspendisse sit amet neque neque. Praesent suscipit et magna eu
                iaculis. Donec arcu libero, commodo ac est a, malesuada finibus
                dolor. Aenean in ex eu velit semper fermentum. In leo dui,
                aliquet sit amet eleifend sit amet, varius in turpis. Maecenas
                fermentum ut ligula at consectetur. Nullam et tortor leo.
              </p>
            </div>
            <div id="specification" class="container tab-pane fade">
              <br />
              <h4>Product specification</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
            <div id="reviews" class="container tab-pane fade">
              <br />
              <div class="reviews-submitted">
                <div class="reviewer">
                  Phasellus Gravida - <span>01 Jan 2020</span>
                </div>
                <div class="ratting">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div class="reviews-submit">
                <h4>Give your Review:</h4>
                <div class="ratting">
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                  <i class="fa fa-star-o"></i>
                </div>
                <div class="row form">
                  <div class="col-sm-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="col-sm-6">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div class="col-sm-12">
                    <textarea placeholder="Review"></textarea>
                  </div>
                  <div class="col-sm-12">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedProd;