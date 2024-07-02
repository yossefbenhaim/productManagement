import ProductImage from 'common/productImage/productImage'
import { Product } from 'models/interfaces/product'
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from 'redux/slice/currentProduct';
import { deleteProductById } from 'redux/slice/products';

interface Props {
	product: Product
}

const ProductCard = ({ product }: Props) => {
	const { id, name, description, date, price } = product;
	const dispatch = useDispatch();

	const selectProductForView = () => {
		dispatch(setCurrentProduct(product))
	}

	const deleteProduct = (event: React.MouseEvent) => {
		event.stopPropagation();
		dispatch(deleteProductById(id));
	};


	let parsedDate: Date;
	if (typeof date === 'string') {
		parsedDate = new Date(date);
	} else if (date instanceof Date) {
		parsedDate = date;
	} else {
		parsedDate = new Date();
	}

	const formattedDate = parsedDate.toLocaleDateString('en-GB', {
		hour: 'numeric',
		minute: 'numeric',
	}).replace(/\//g, ':');

	return (
		<div onClick={selectProductForView} className='flex flex-row justify-between items-center  w-full h-[100px] border-[1px] border-black rounded-md hover:shadow-lg'>
			<div className='flex flex-row h-full '>
				<div className='p-1 items-start w-[50%] h-  flex justify-center '>
					{id}
					<ProductImage />
				</div>
				<div className='flex flex-col justify-center w-[250px]'>
					<p >{name}</p>
					<p >{description}</p>
					<p >{price + '$'}</p>
				</div>
			</div>
			<div className='w-[30%] h-full flex flex-col justify-between items-end pr-2 pb-2'>
				<p>{formattedDate}</p>
				<button onClick={deleteProduct} className='w-[80px] h-[30px] bg-orange-300 items-center text-black pb-1 rounded-md border-[1px] border-black hover:bg-orange-500'>delete</button>
			</div>
		</div >
	)
}

export default ProductCard