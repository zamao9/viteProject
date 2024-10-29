// src/feature/userSelector.js
import { createSelector } from 'reselect';

// Селектор для извлечения пути к изображению профиля
const selectUser = (state) => state.user;

//Формуруем функцию для возвращения значения
export const selectProfileImg = createSelector(
    [selectUser],
    (user) => user.profileImg // Возвращаем путь к изображению профиля
);
