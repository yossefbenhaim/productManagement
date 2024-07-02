import { ProductDetailsKeys } from "models/enums/productDetailsKey";
import { ProductDetailsForm } from "../ProductDetailsSchema";
import CustomTextField from "common/customTextField/customTextField";
import { useWatch } from "react-hook-form";


interface TextFieldDetails {
	name: keyof ProductDetailsForm;
	customClass: string;
	isTextarea: boolean;
	inputType: string;
}

const FieldsNames: TextFieldDetails[] = [
	{ name: ProductDetailsKeys.NAME, customClass: '', isTextarea: false, inputType: 'text' },
	{ name: ProductDetailsKeys.DESCRIPTION, customClass: 'h-[150px]', isTextarea: true, inputType: 'text' },
	{ name: ProductDetailsKeys.PRICE, customClass: 'w-[100px]', isTextarea: false, inputType: 'number' }
];

const TextFieldOptions = () => {
	console.log(useWatch());

	return (
		<div className='flex flex-col gap-8 h-[70%]'>
			{FieldsNames.map((item) => (
				<CustomTextField key={item.name} name={item.name} customClass={item.customClass} isTextarea={item.isTextarea} inputType={item.inputType} />
			))}
		</div>)
}

export default TextFieldOptions