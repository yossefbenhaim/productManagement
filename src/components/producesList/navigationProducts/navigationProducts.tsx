import { Product } from "models/interfaces/product"

interface Props {
	nextProductsPage: () => void,
	prevProductsPage: () => void,
	startIndex: number,
	productsPerPage: number
	products: Product[]
}

const PREV = '< prev '
const NEXT = 'next >'

const NavigationProducts = ({ nextProductsPage, prevProductsPage, products, productsPerPage, startIndex }: Props) => {
	return (
		<div className=" gap-10 flex flex-row pl-3 justify-center items-center ">
			<button className="hover:bg-black/20 border-[2px] border-black w-[80px] h-[30px] text-lg rounded-lg" onClick={prevProductsPage}>{PREV}</button>
			<p>{startIndex + 1}-{Math.min(startIndex + productsPerPage, products.length)}</p>
			<button className="hover:bg-black/20 border-[2px] border-black w-[80px] h-[30px] text-lg rounded-lg" onClick={nextProductsPage}>{NEXT}</button>
		</div>
	)
}

export default NavigationProducts