import Laptop from '../../assets/Laptop.png'

const ProductImage = () => {

	return (
		<div className=' flex flex-col items-start justify-center '>
			<img className=' w-[90px] h-full' alt='Laptop' src={Laptop}></img>
		</div>)
}

export default ProductImage