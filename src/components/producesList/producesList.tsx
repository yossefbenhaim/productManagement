import { useState } from 'react';
import ProductCard from "./productCard/productCard";
import { useAppSelector } from "redux/store";
import NavigationProducts from './navigationProducts/navigationProducts';

const ProducesList = () => {
	const products = useAppSelector((state) => state.productFilter.productsFilter);
	const [startIndex, setStartIndex] = useState<number>(0);
	const productsPerPage = 5;

	const visibleProducts = products.slice(startIndex, startIndex + productsPerPage);

	const nextProductsPage = () => {
		if (startIndex + productsPerPage < products.length) {
			setStartIndex(startIndex + productsPerPage);
		}
	};

	const prevProductsPage = () => {
		if (startIndex - productsPerPage >= 0) {
			setStartIndex(startIndex - productsPerPage);
		}
	};


	return (

		<div className="flex flex-col justify-center items-center w-[55%] p-2 gap-[10px]">
			<div className='flex  flex-col w-full h-[520px] border-b-[2px] gap-1'>
				{visibleProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<NavigationProducts
				nextProductsPage={nextProductsPage}
				prevProductsPage={prevProductsPage}
				products={products}
				productsPerPage={productsPerPage}
				startIndex={startIndex}
			/>
		</div>
	);
};

export default ProducesList;
