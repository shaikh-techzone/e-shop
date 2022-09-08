import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";

const header = () => {
	return (
		<>
			<div class='top-header'>
				<div class='container'>
					<div class='row align-items-center'>
						<div class='col-md-3'>
							<div class='logo'>
								<a href=''>
									<img src={logo} alt='Logo' />
								</a>
							</div>
						</div>
						<div class='col-md-6'>
							<div class='search'>
								<input type='text' placeholder='Search' />
								<button>
									<i class='fa fa-search'></i>
								</button>
							</div>
						</div>
						<div class='col-md-3'>
							<div class='user'>
								<div class='dropdown'>
									<a href='#' class='dropdown-toggle' data-toggle='dropdown'>
										My Account
									</a>
									<div class='dropdown-menu'>
										<a href='#' class='dropdown-item'>
											Login
										</a>
										<a href='#' class='dropdown-item'>
											Register
										</a>
									</div>
								</div>
								<div class='cart'>
									<i class='fa fa-cart-plus'></i>
									<span>(0)</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default header;
