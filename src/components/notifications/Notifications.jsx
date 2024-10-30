import { useDispatch } from 'react-redux';
import { selectAllNotifications } from '../../feature/notifications/notificationsSelector';
import { useAppSelector } from '../../hooks/store';
import './notifications.sass';
import NotificationsItem from './notificationsItem/NotificationsItem';
import { SettingsIcon, CheckboxIcon } from '/src/constants/svgImages';
import { markAsRead } from '../../feature/notifications/notificationsSlice';
import { useEffect, useState } from 'react';

const Notifications = () => {
	const checkboxItemsInitial = [
		{
			key: 1,
			name: 'All',
			isSelected: false,
		},
		{
			key: 2,
			name: 'Unread',
			isSelected: true,
		},
	];

	const [checkboxItems, setCheckboxItems] = useState(checkboxItemsInitial);

	const updateCheckbox = (key) => {
		let checkboxItemsNew = checkboxItems;

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

	useEffect(() => {
		console.log(checkboxItems);
	}, [checkboxItems]);

	return (
		<>
			{/* Notifications */}
			<section className='section notifications'>
				<div className='container notifications__container'>
					<div className='notifications__header mb--22'>
						<h2 className='title title--22'>Notifications</h2>

						<div
							className={`notifications__settings ${
								settingsButton === true ? 'active' : ''
							}`}
							onClick={() => setSettingsButton(!settingsButton)}
						>
							<SettingsIcon />
						</div>
					</div>

					{/* Checkbox */}
					<ul className='checkbox'>
						{checkboxItems.map((element) => (
							<li
								className={`checkbox__item ${
									element.isSelected === true ? 'checked' : ''
								}`}
								key={element.key}
								onClick={() => updateCheckbox(element.key)}
							>
								<span className='text text--18'>{element.name}</span>
								<div className='checkbox__icon'>
									<CheckboxIcon />
								</div>
							</li>
						))}
					</ul>

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
