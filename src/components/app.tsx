import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetCurrentProduct } from "redux/slice/currentProduct";
import Header from "./header/haeder";
import ProductsViewer from "./productsViewer/productsViewer";

const App = () => {
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

export default App
