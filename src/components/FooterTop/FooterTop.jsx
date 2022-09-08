import React from "react";
import "./FooterTop.css";
import paymentMethod from "../../img/payment-method.png";
import goDaddy from "../../img/godaddy.svg";
import Norton from "../../img/norton.svg";
import SSl from "../../img/ssl.svg";
const FooterTop = () => {
	return (
		<>
			<div class='footer'>
				<div class='container-fluid'>
					<div class='row'>
						<div class='col-lg-3 col-md-6'>
							<div class='footer-widget'>
								<h1>E Shop</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse sollicitudin rutrum massa. Suspendisse
									sollicitudin rutrum massa. Vestibulum porttitor, metus sed
									pretium elementum, nisi nibh sodales quam, non lobortis neque
									felis id mauris.
								</p>
							</div>
						</div>

						<div class='col-lg-3 col-md-6'>
							<div class='footer-widget'>
								<h3 class='title'>Useful Pages</h3>
								<ul>
									<li>
										<a href='product.html'>Product</a>
									</li>
									<li>
										<a href='product-detail.html'>Product Detail</a>
									</li>
									<li>
										<a href='cart.html'>Cart</a>
									</li>
									<li>
										<a href='checkout.html'>Checkout</a>
									</li>
									<li>
										<a href='login.html'>Login & Register</a>
									</li>
									<li>
										<a href='my-account.html'>My Account</a>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 col-md-6'>
							<div class='footer-widget'>
								<h3 class='title'>Quick Links</h3>
								<ul>
									<li>
										<a href='product.html'>Product</a>
									</li>
									<li>
										<a href='cart.html'>Cart</a>
									</li>
									<li>
										<a href='checkout.html'>Checkout</a>
									</li>
									<li>
										<a href='login.html'>Login & Register</a>
									</li>
									<li>
										<a href='my-account.html'>My Account</a>
									</li>
									<li>
										<a href='wishlist.html'>Wishlist</a>
									</li>
								</ul>
							</div>
						</div>

						<div class='col-lg-3 col-md-6'>
							<div class='footer-widget'>
								<h3 class='title'>Get in Touch</h3>
								<div class='contact-info'>
									<p>
										<i class='fa fa-map-marker'></i>123 E Shop, Los Angeles, CA,
										USA
									</p>
									<p>
										<i class='fa fa-envelope'></i>email@example.com
									</p>
									<p>
										<i class='fa fa-phone'></i>+123-456-7890
									</p>
									<div class='social'>
										<a href=''>
											<i class='fa fa-twitter'></i>
										</a>
										<a href=''>
											<i class='fa fa-facebook'></i>
										</a>
										<a href=''>
											<i class='fa fa-linkedin'></i>
										</a>
										<a href=''>
											<i class='fa fa-instagram'></i>
										</a>
										<a href=''>
											<i class='fa fa-youtube'></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='row payment'>
						<div class='col-md-6'>
							<div class='payment-method'>
								<p>We Accept:</p>
								<img src={paymentMethod} alt='Payment Method' />
							</div>
						</div>
						<div class='col-md-6'>
							<div class='payment-security'>
								<p>Secured By:</p>
								<img src={goDaddy} alt='Payment Security' />
								<img src={Norton} alt='Payment Security' />
								<img src={SSl} alt='Payment Security' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterTop;
