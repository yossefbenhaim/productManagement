
import AddProduct from "./addProduct/addProduct";
import SearchProducts from "./searchProducts/searchProducts";
import SortBy from "./sortBy/sortBy";


const Toolbar = () => {


	return (
		<div className=" flex flex-row justify-between items-center h-[10%] w-[55%]">
			<AddProduct />
			<SearchProducts />
			<SortBy />
		</div>
	);
};

export default Toolbar;
