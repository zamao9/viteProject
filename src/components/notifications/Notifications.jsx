import './notifications.sass';
import NotificationsItem from './notificationsItem/NotificationsItem';
import { SettingsIcon, UpdateIcon, MessageIcon } from '/src/constants/svgImages';

const Notifications = () => {
	const notificationsData = [
		{
			key: 1,
			type: 'updates',
			icon: <UpdateIcon />,
			title: 'Updates',
			description: 'This is a work of art.',
		},
		{
			key: 2,
			type: 'messages',
			icon: <MessageIcon />,
			title: 'Messages',
			description: 'This is bullshit.',
		},
		{
			key: 3,
			type: 'updates',
			icon: <UpdateIcon />,
			title: 'Updates',
			description: 'This is a work of art.',
		},
		{
			key: 4,
			type: 'updates',
			icon: <MessageIcon />,
			title: 'Messages',
			description: 'but this, this is bullshit.',
		},
	];

	return (
		<>
			{/* Notifications */}
			<section className='section notification'>
				<div className='container notification__container'>
					<div className='notification__header mb--22'>
						<h2 className='title title--22'>Notification</h2>

						<div className='notification__settings'>
							<SettingsIcon />
						</div>
					</div>

					{/* Notification List */}
					<ul className='notification__list'>
						{notificationsData.map((element) => (
							<NotificationsItem
								key={element.key}
								icon={element.icon}
								title={element.title}
								description={element.description}
							/>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Notifications;
