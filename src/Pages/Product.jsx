import React from "react";

import Prodlist from "../Components/Prod-PageComponents/Prodlist";
import Sidebar from "../Components/Prod-PageComponents/Sidebar";

const Product = () => {
	return (
		<>
			<div class='product-view'>
				<div class='container'>
					<div class='row'>
						<Prodlist />
						<Sidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
