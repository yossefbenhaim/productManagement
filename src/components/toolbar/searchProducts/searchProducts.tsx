import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProductsFilter } from 'redux/slice/productFiler';
import { useAppSelector } from 'redux/store';

const SEARCH = 'search'

const SearchProducts = () => {
	const products = useAppSelector((state) => state.product.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setProductsFilter(products));
	}, [products])

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		const filterProducts = products.filter(
			(product) =>
				product.name.toLowerCase().includes(value.toLowerCase()) ||
				product.description.toLowerCase().includes(value.toLowerCase())
		);
		if (value) {
			dispatch(setProductsFilter(filterProducts));
		} else {
			dispatch(setProductsFilter(products));
		}
	};


	return (
		<div className='flex flex-row'>
			<button>🔍</button>
			<div className='flex flex-row w-full items-center justify-center'>
				<label className='relative w-full'>
					<input
						onChange={handleSearchChange}
						required
						className='w-full h-[35px] mt-1 block overflow-auto text-black px-4 py-2 text-lg outline-none border-2 bg-black/10 border-black/60 rounded-lg hover:border-white peer'
					/>
					<span className='absolute left-0 top-[6px] px-1 text-lg text-black duration-300 tracking-wide peer-focus:text-black pointer-events-none peer-focus:text-sm peer-focus:-translate-y-[26px] bg-white/0 rounded-xl ml-2 peer-valid:text-sm peer-valid:-translate-y-[26px]'>
						{SEARCH}
					</span>
				</label>
			</div>
		</div>
	)
}

export default SearchProducts;