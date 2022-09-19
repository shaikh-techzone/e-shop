import React from "react";
import Category from "../Components/Category/Category";
import Feature from "../Components/Feature/Feature";
import Slider from "../Components/Slider/Slider";
import RecentProd from "../Components/RecentProduct/RecentProd";
import Brands from "../Components/Brands/Brands";

const Home = () => {
	return (
		<>
			<Slider />
			<Feature />
			<Category />
			<RecentProd />
			<Brands />
		</>
	);
};

export default Home;
