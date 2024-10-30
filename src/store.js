// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/user/userSlice';
import notificationsReducer from './feature/notifications/notificationsSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		notifications: notificationsReducer,
	},
});
