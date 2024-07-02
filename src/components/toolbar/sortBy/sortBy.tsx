import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setProductsFilter } from 'redux/slice/productFiler';
import { useAppSelector } from 'redux/store';

const PRICE = 'price'
const DATE = 'date'
const SORT_BY = 'Sort By'

const SortBy = () => {

	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const products = useAppSelector((state) => state.product.products);
	const dispatch = useDispatch();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const sortByPrice = () => {
		const sortedProducts = [...products].sort((a, b) => a.price - b.price);
		dispatch(setProductsFilter(sortedProducts))
	};

	const sortByDate = () => {
		const sortedProducts = [...products].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
		dispatch(setProductsFilter(sortedProducts))
	};

	return (
		<div className="menu inline-block relative" ref={menuRef}>
			<div className=' w-full gap-3'>
				<button
					className="border-[2px] border-black text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
					onClick={toggleMenu}
				>
					{SORT_BY}
					<p>
						{isOpen ? '  👆 ' : ' 👇 '}
					</p>
				</button>
			</div>
			{
				isOpen && (
					<div className="menu-options absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg">
						<button className="block px-4 py-2 border-[1px] border-black hover:bg-gray-400 w-full" onClick={sortByPrice}>
							{PRICE}
						</button>
						<button className="block px-4 py-2 border-[1px] border-black hover:bg-gray-400 w-full" onClick={sortByDate}>
							{DATE}
						</button>
					</div>
				)
			}
		</div >
	);
};

export default SortBy;
