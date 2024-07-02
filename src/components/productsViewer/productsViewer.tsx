import ProducesList from "components/producesList/producesList"
import ProductDetails from "components/productDetails/productDetails"
import Toolbar from "components/toolbar/toolbar"

const ProductsViewer = () => {
	return (
		<div className="h-full">
			<Toolbar />
			<div className="flex flex-row justify-between  w-full h-[90%] ">
				<ProducesList />
				<ProductDetails />
			</div>
		</div>
	)
}

export default ProductsViewer