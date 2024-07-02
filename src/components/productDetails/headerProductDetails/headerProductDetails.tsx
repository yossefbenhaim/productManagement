import ProductImage from "common/productImage/productImage"
import { ProductDetailsKeys } from "models/enums/productDetailsKey";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "redux/store";

const PRODUCT_ID = 'productId'

const HeaderProductDetails = () => {
	const currentProduct = useAppSelector((state) => state.currentProduct.product);
	const { setValue } = useFormContext()

	useEffect(() => {
		setValue(ProductDetailsKeys.NAME, currentProduct?.name)
		setValue(ProductDetailsKeys.DESCRIPTION, currentProduct?.description)
		setValue(ProductDetailsKeys.PRICE, currentProduct?.price)
	}, [currentProduct])

	return (
		<>
			<label className='relative w-full ' >
				<span className='absolute ml-[5%] flex left-1 top-[-25px] px-2 text-base text-black pointer-events-none bg-white'>
					{PRODUCT_ID}{`\n`}{currentProduct?.id}
				</span>
			</label>
			<ProductImage />
		</>
	)
}

export default HeaderProductDetails