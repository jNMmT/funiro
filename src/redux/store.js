import { configureStore } from '@reduxjs/toolkit';

import products from './slices/productsSlice';
import windowWidth from './slices/windowWidthSlice';
import slider from './slices/sliderSlice';
import cart from './slices/cartSlice';
import categories from './slices/categoriesSlice';
import images from './slices/imagesSlice';

export const store = configureStore({
	reducer: {
		products,
		windowWidth,
		slider,
		cart,
		categories,
		images
	}
});