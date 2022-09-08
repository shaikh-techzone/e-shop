import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<div class='header'>
				<div class='container'>
					<nav class='navbar navbar-expand-md bg-dark navbar-dark'>
						<a href='#' class='navbar-brand'>
							MENU
						</a>
						<button
							type='button'
							class='navbar-toggler'
							data-toggle='collapse'
							data-target='#navbarCollapse'>
							<span class='navbar-toggler-icon'></span>
						</button>

						<div
							class='collapse navbar-collapse justify-content-between'
							id='navbarCollapse'>
							<div class='navbar-nav m-auto'>
								<a href='index.html' class='nav-item nav-link active'>
									Home
								</a>
								<a href='product-list.html' class='nav-item nav-link'>
									Products
								</a>
								<div class='nav-item dropdown'>
									<a
										href='#'
										class='nav-link dropdown-toggle'
										data-toggle='dropdown'>
										Pages
									</a>
									<div class='dropdown-menu'>
										<a href='product-list.html' class='dropdown-item'>
											Product
										</a>
										<a href='product-detail.html' class='dropdown-item'>
											Product Detail
										</a>
										<a href='cart.html' class='dropdown-item'>
											Cart
										</a>
										<a href='wishlist.html' class='dropdown-item'>
											Wishlist
										</a>
										<a href='checkout.html' class='dropdown-item'>
											Checkout
										</a>
										<a href='login.html' class='dropdown-item'>
											Login & Register
										</a>
										<a href='my-account.html' class='dropdown-item'>
											My Account
										</a>
									</div>
								</div>
								<a href='contact.html' class='nav-item nav-link'>
									Contact Us
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
