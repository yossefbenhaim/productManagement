import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from 'models/enums/sliceNames';
import { Product } from 'models/interfaces/product';

interface ProductsFilterSlice {
    productsFilter: Product[];
}

const initialState: ProductsFilterSlice = {
    productsFilter: [],
};

const ProductsFilter = createSlice({
    name: SliceNames.PRODUCTS_FILTER,
    initialState,
    reducers: {
        setProductsFilter: (state, action: PayloadAction<Product[]>) => {
            state.productsFilter = action.payload;
        },
    },
});

export const { setProductsFilter } = ProductsFilter.actions;
export default ProductsFilter.reducer;
