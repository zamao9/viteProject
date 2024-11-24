import { createSlice } from '@reduxjs/toolkit';
// Начальное состояние для уведомлений

const initialState = {
	notifications: [
		{
			id: 1,
			title: 'System Update',
			description: 'The system has been updated to version 1.1.',
			type: 'updates',
			isRead: false,
			animation: false,
		},
		{
			id: 2,
			title: 'New Message',
			description: 'You have a new private message.',
			type: 'messages',
			isRead: true,
			animation: false,
		},
		{
			id: 3,
			title: 'System Update',
			description: 'This is a reminder for your upcoming meeting.',
			type: 'updates',
			isRead: true,
			animation: false,
		},
		{
			id: 4,
			title: 'New Message',
			description: 'A new patch has been released to enhance gameplay.',
			type: 'messages',
			isRead: false,
		},
		{
			id: 5,
			title: 'Actions',
			description: 'Some bullshit text.',
			type: 'actions',
			isRead: false,
		},
		{
			id: 6,
			title: 'Actions',
			description: 'Some bullshit text.',
			type: 'actions',
			isRead: true,
		},
		{
			id: 7,
			title: 'Tournaments',
			description: 'Some bullshit text.',
			type: 'tournaments',
			isRead: false,
		},
		{
			id: 8,
			title: 'Tournaments',
			description: 'Some bullshit text.',
			type: 'tournaments',
			isRead: true,
		},
		{
			id: 9,
			title: 'Technical Works',
			description: 'Some bullshit text.',
			type: 'tech-work',
			isRead: false,
		},
		{
			id: 10,
			title: 'Technical Works',
			description: 'Some bullshit text.',
			type: 'tech-work',
			isRead: true,
		},
		{
			id: 11,
			title: 'Warning',
			description: 'Some bullshit text.',
			type: 'warning',
			isRead: false,
		},
		{
			id: 12,
			title: 'Warning',
			description: 'Some bullshit text.',
			type: 'warning',
			isRead: true,
		},
		// {
		// 	id: 5,
		// 	title: 'Promotion',
		// 	text: 'Participate in our promotion and earn bonuses!',
		// 	type: 'promotion',
		// 	isRead: false,
		// },
		// {
		// 	id: 6,
		// 	title: 'Security Update',
		// 	text: 'New security parameters have been added.',
		// 	type: 'updates',
		// 	isRead: false,
		// },
		// { id: 7, title: 'System Message', text: 'Scheduled server maintenance is planned.', type: 'system', isRead: true },
		// {
		// 	id: 8,
		// 	title: 'Daily Reminder',
		// 	text: 'Don’t forget to complete today’s tasks.',
		// 	type: 'reminder',
		// 	isRead: false,
		// },
		// { id: 9, title: 'Message', text: 'Your friend sent you a team invitation.', type: 'message', isRead: true },
		// { id: 10, title: 'Alert', text: 'A new update is available.', type: 'alert', isRead: false },
	],
};

// Создаём срез уведомлений
export const notificationsSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		// Устанавливаем список уведомлений из БД
		setNotificationList(state, action) {
			state.notifications = action.payload;
		},
		// Добавляем новое уведомление
		addNotification(state, action) {
			state.notifications.push({
				id: action.payload.id,
				title: action.payload.title,
				text: action.payload.text,
				type: action.payload.type,
				isRead: false,
			});
		},
		// Помечаем уведомление как прочитанное по ID
		markAsRead(state, action) {
			const notification = state.notifications.find(
				(n) => n.id === action.payload
			);
			if (notification) {
				notification.isRead = true;
			}
		},
		// Удаляем уведомление по ID
		removeNotification(state, action) {
			state.notifications = state.notifications.filter(
				(n) => n.id !== action.payload
			);
		},
		// Изменение состояния анимации
		markRemoveAnimation(state, action) {
			const notification = state.notifications.find(
				(n) => n.id === action.payload
			);
			if (notification) {
				notification.animation = true;
			}
		},
	},
});

// Экспортируем действия
export const {
	setNotificationList,
	addNotification,
	markAsRead,
	removeNotification,
	markRemoveAnimation,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;