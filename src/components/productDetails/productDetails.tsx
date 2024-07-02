import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ProductDetailsSchema, { defaultProductDetailsValues, ProductDetailsForm } from './ProductDetailsSchema';
import HeaderProductDetails from './headerProductDetails/headerProductDetails';
import useProductDetails from './useProductDetails';
import ButtonSubmit from './buttonSubmit/buttonSubmit';
import TextFieldOptions from './textFieldsOptions/textFieldOptions';

const ProductDetails = () => {
	const methods = useForm<ProductDetailsForm>({
		resolver: zodResolver(ProductDetailsSchema),
		defaultValues: {
			...defaultProductDetailsValues,
		},
	});

	const { onSubmit } = useProductDetails({ methods });

	return (
		<FormProvider {...methods}>
			<div className="h-[610px] flex flex-col pt-4 items-center w-[45%] bg-white">
				<form
					onSubmit={methods.handleSubmit(onSubmit)}
					className="flex flex-col justify-between p-3 rounded-md border-[1px] border-black w-[90%] h-[90%]"
				>
					<HeaderProductDetails />
					<TextFieldOptions />
					<ButtonSubmit />
				</form>
			</div>
		</FormProvider>
	);
};

export default ProductDetails;
