import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNames } from 'models/enums/sliceNames';
import { Product } from 'models/interfaces/product';
import { initialProductsList } from 'utils/initialProductsList';

interface ProductsSlice {
    products: Product[];
}

const initialState: ProductsSlice = {
    products: initialProductsList,
};

interface UpdateProductPayload {
    id: number;
    product: Partial<Product>;
}

const Products = createSlice({
    name: SliceNames.PRODUCTS,
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        deleteProductById: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (user) => user.id !== action.payload
            );
        },
        updateProductOnList: (
            state,
            action: PayloadAction<UpdateProductPayload>
        ) => {
            const { id, product } = action.payload;
            const index = state.products.findIndex((p) => p.id === id);
            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    ...product,
                };
            }
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
    },
});

export const {
    setProducts,
    deleteProductById,
    updateProductOnList,
    addProduct,
} = Products.actions;
export default Products.reducer;
