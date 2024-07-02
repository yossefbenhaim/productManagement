import Header from "components/header/haeder";
import NavigationProducts from "components/producesList/navigationProducts/navigationProducts";
import ProductsViewer from "components/productsViewer/productsViewer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCurrentProduct } from "redux/slice/currentProduct";

const MyStore = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetCurrentProduct())
	}, [])

	return (
		<div className="w-full h-[100vh] flex flex-col justify-between">
			<Header />
			<ProductsViewer />
		</div>
	)
}

export default MyStore;