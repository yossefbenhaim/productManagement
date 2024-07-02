import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from 'models/enums/sliceNames';
import { Product } from 'models/interfaces/product';

interface CurrentProductSlice {
    product: Product | undefined;
}

const initialState: CurrentProductSlice = {
    product: undefined,
};

const CurrentProduct = createSlice({
    name: SliceNames.CURRENT_PRODUCT,
    initialState,
    reducers: {
        setCurrentProduct(state, action: PayloadAction<Product>) {
            state.product = action.payload;
        },
        resetCurrentProduct() {
            return initialState;
        },
    },
});

export const { setCurrentProduct, resetCurrentProduct } =
    CurrentProduct.actions;
export default CurrentProduct.reducer;
