import { useDispatch } from "react-redux";
import { resetCurrentProduct } from "redux/slice/currentProduct";

const ADD = 'add';

const AddProduct = () => {
	const dispatch = useDispatch();

	const addProduct = () => {
		dispatch(resetCurrentProduct());
	};

	return (
		<div>
			<button
				onClick={addProduct}
				className="w-[80px] h-[30px] bg-green-300 items-center text-black pb-1 rounded-md ml-3 border-[1px] border-black hover:bg-green-500"
			>
				{ADD}
			</button>
		</div>)
}

export default AddProduct