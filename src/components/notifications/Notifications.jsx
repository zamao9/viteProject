import { useDispatch } from 'react-redux';
import { selectAllNotifications } from '../../feature/notifications/notificationsSelector';
import { useAppSelector } from '../../hooks/store';
import './notifications.sass';
import NotificationsItem from './notificationsItem/NotificationsItem';
import { SettingsIcon, CheckboxIcon } from '/src/constants/svgImages';
import { markAsRead } from '../../feature/notifications/notificationsSlice';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Notifications = () => {
	const [checkboxActive, setCheckboxActive] = useState(false);

	const checkboxItemsInitial = [
		{
			key: 1,
			name: 'All',
			isSelected: true,
		},
		{
			key: 2,
			name: 'Unread',
			isSelected: false,
		},
	];
	const [checkboxItems, setCheckboxItems] = useState(checkboxItemsInitial);

	const checkboxTypesInitial = [
		{
			key: 1,
			name: 'Messages',
			isSelected: false,
		},
		{
			key: 2,
			name: 'Updates',
			isSelected: false,
		},
		{
			key: 3,
			name: 'Games',
			isSelected: false,
		},
	];
	const [checkboxTypes, setcheckboxTypes] = useState(checkboxTypesInitial);

	const updateCheckbox = (key, checkboxItems, setCheckboxItems) => {
		let checkboxItemsNew = checkboxItems.slice();

		checkboxItemsNew.map((element) => {
			if (element.key === key) {
				element.isSelected = true;
			} else {
				element.isSelected = false;
			}
		});
		setCheckboxItems(checkboxItemsNew);
	};

	const [settingsButton, setSettingsButton] = useState(false);
	const notificationsData = useAppSelector(selectAllNotifications);
	const dispatch = useDispatch();
	dispatch(markAsRead(2));

	const settingsButtonClick = () => {
		setCheckboxActive(!settingsButton);
		if (!settingsButton) {
			setSettingsButton(true);
		} else {
			setTimeout(() => {
				setSettingsButton(!settingsButton);
			}, 200);
		}
	};

	return (
		<>
			{/* Notifications */}
			<section className='section notifications'>
				<div className='container notifications__container'>
					<div className='notifications__header mb--22'>
						<h2 className='title title--22'>Notifications</h2>

						<div
							className={`notifications__settings ${
								checkboxActive === true ? 'active' : ''
							}`}
							onClick={() => {
								settingsButtonClick();
							}}
						>
							<SettingsIcon />
						</div>
					</div>

					{/* Checkbox */}
					{settingsButton && (
						<AnimatePresence>
							<motion.div
								initial={{ y: -10, opacity: 0 }}
								animate={checkboxActive ? { y: 0, opacity: 1 } : {}}
								exit={{ y: -10, opacity: 0, pointerEvents: 'none' }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className='checkbox'
								style={{
									pointerEvents: settingsButton ? 'auto' : 'none',
								}}
							>
								<ul className='checkbox__list'>
									{checkboxItems.map((element) => (
										<li
											className={`checkbox__item ${
												element.isSelected === true ? 'checked' : ''
											}`}
											key={element.key}
											onClick={() =>
												updateCheckbox(
													element.key,
													checkboxItems,
													setCheckboxItems
												)
											}
										>
											<span className='text text--18'>{element.name}</span>
											<div className='checkbox__icon'>
												<CheckboxIcon />
											</div>
										</li>
									))}
								</ul>
								<hr className='checkbox__line' />

								<ul className='checkbox__list'>
									{checkboxTypes.map((element) => (
										<li
											className={`checkbox__item ${
												element.isSelected === true ? 'checked' : ''
											}`}
											key={element.key}
											onClick={() =>
												updateCheckbox(
													element.key,
													checkboxTypes,
													setcheckboxTypes
												)
											}
										>
											<span className='text text--18'>{element.name}</span>
											<div className='checkbox__icon'>
												<CheckboxIcon />
											</div>
										</li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>
					)}

					{/* Notification List */}
					<ul className='notifications__list'>
						{notificationsData.map((element) => (
							<NotificationsItem
								key={element.id}
								title={element.title}
								description={element.description}
								isRead={element.isRead}
								type={element.type}
							/>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Notifications;
