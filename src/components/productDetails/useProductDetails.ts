import { Product } from 'models/interfaces/product';
import React, { useEffect } from 'react';
import { addProduct, updateProductOnList } from 'redux/slice/products';
import { ProductDetailsForm } from './ProductDetailsSchema';
import { useAppSelector } from 'redux/store';
import { useDispatch } from 'react-redux';
import { UseFormReturn } from 'react-hook-form';

interface Props {
    methods: UseFormReturn<
        {
            name: string;
            description: string;
            price: number;
        },
        any,
        undefined
    >;
}
const useProductDetails = ({ methods }: Props) => {
    const dispatch = useDispatch();
    const currentProduct = useAppSelector(
        (state) => state.currentProduct.product
    );

    useEffect(() => {
        if (!currentProduct) {
            methods.reset();
        }
    }, [currentProduct]);
    const products = useAppSelector((state) => state.product.products);

    const onSubmit = (data: ProductDetailsForm) => {
        if (currentProduct) {
            const updateProduct: Product = {
                id: currentProduct.id,
                name: data.name,
                description: data.description,
                price: data.price,
                date: currentProduct.date,
            };
            dispatch(
                updateProductOnList({
                    id: currentProduct.id,
                    product: updateProduct,
                })
            );
        } else {
            const newId =
                products.length > 0 ? products[products.length - 1].id + 1 : 1;
            const newProduct: Product = {
                id: newId,
                name: data.name,
                description: data.description,
                price: data.price,
                date: new Date(),
            };
            dispatch(addProduct(newProduct));
            methods.reset();
        }
    };

    return {
        onSubmit,
    };
};

export default useProductDetails;
