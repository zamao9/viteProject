const NotificationsItem = ({ icon, title, description }) => {
	return (
		<li className='notification__item'>
			<div className='notification__icon'>{icon}</div>

			<div className='notification__content'>
				<span className='title title--18'>{title}</span>
				<span className='lh-140'>{description}</span>
			</div>
		</li>
	);
};

export default NotificationsItem;
