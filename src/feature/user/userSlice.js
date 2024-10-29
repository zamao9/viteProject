// src/feature/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import AccountImage from '/src/assets/image/profile/avatar3.webp';

//начальное состояние
const initialState = {
	profileImg: AccountImage,
	profileName: 'User',
};

//тут формируем срез и его функции
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		//Функция для смены изображения
		setProfileImg(state, action) {
			state.profileImg = action.payload;
		},
		setProfileName(state, action) {
			state.profileName = action.payload;
		},
	},
});

export const { setProfileImg, setProfileName } = userSlice.actions;
export default userSlice.reducer;
