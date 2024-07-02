import { ProductDetailsKeys } from 'models/enums/productDetailsKey';
import z from 'zod';

export const defaultProductDetailsValues = {
    [ProductDetailsKeys.NAME]: '',
    [ProductDetailsKeys.DESCRIPTION]: '',
    [ProductDetailsKeys.PRICE]: 0,
};

const ProductDetailsSchema = z.object({
    [ProductDetailsKeys.NAME]: z
        .string()
        .nonempty({ message: 'ihguycgf' })
        .min(2, { message: 'min tab 2' })
        .max(50, 'max tab 50'),
    [ProductDetailsKeys.DESCRIPTION]: z
        .string()
        .nonempty({ message: 'ihguycgf' })
        .min(2, { message: 'min tab 2' })
        .max(50, 'max tab 50'),
    [ProductDetailsKeys.PRICE]: z
        .number()
        .min(1, { message: 'minium 1 ' })
        .max(10000000, { message: 'max 10000000' }),
});

export type ProductDetailsForm = z.infer<typeof ProductDetailsSchema>;
export default ProductDetailsSchema;
