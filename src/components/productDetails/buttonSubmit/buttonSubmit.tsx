import { useAppSelector } from "redux/store";


const ButtonSubmit = () => {
	const currentProduct = useAppSelector(
		(state) => state.currentProduct.product
	);
	return (
		<div className='flex flex-col items-end justify-center w-full h-[10%]'>
			<button type="submit" className='w-[80px] h-[30px] bg-green-400 items-center text-black pb-1 rounded-md border-[1px] border-black hover:bg-green-500'>
				{currentProduct ? 'EDIT' : 'SAVE'}
			</button>
		</div>)
}

export default ButtonSubmit