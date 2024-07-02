import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { SliceNames } from 'models/enums/sliceNames';

import storage from 'redux-persist/lib/storage';
import currentProduct from './slice/currentProduct';
import products from './slice/products';
import productsFilter from './slice/productFiler';

const persistConfig = {
    key: 'root',
    type: storage,
    storage,
    whitelist: [SliceNames.CURRENT_PRODUCT, SliceNames.PRODUCTS],
};

const rootReducer = combineReducers({
    [SliceNames.CURRENT_PRODUCT]: currentProduct,
    [SliceNames.PRODUCTS_FILTER]: productsFilter,
    [SliceNames.PRODUCTS]: products,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistodStore = persistStore(store);
export type AddDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
export { store, persistodStore };
