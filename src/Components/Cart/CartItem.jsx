// import React from 'react'

const CartItem = () => {
	return (
		<>
			<tr>
				<td>
					<a href='#'>
						<img src='img/product-1.png' alt='Image' />
					</a>
				</td>
				<td>
					<a href='#'>Product Name</a>
				</td>
				<td>$22</td>
				<td>
					<div class='qty'>
						<button class='btn-minus'>
							<i class='fa fa-minus'></i>
						</button>
						<input type='text' value='1' />
						<button class='btn-plus'>
							<i class='fa fa-plus'></i>
						</button>
					</div>
				</td>
				<td>$22</td>
				<td>
					<button>
						<i class='fa fa-trash'></i>
					</button>
				</td>
			</tr>
		</>
	);
};

export default CartItem;
