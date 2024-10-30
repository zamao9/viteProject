const PopupNotifications = () => {
	const popupNotificationsData = [
		{
			key: 1,
			type: 'updates',
			titlePopup: 'Updates',
			descriptionPopup:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis necessitatibus nobis facilis ratione doloremque magnam impedit voluptatum sunt explicabo?',
		},
	];

	return (
		<>
			<h2 className='title title--22 mb--22 center'>{popupNotificationsData.titlePopup}</h2>
			<p className='lh--140 center'>{popupNotificationsData.descriptionPopup}</p>
		</>
	);
};

export default PopupNotifications;
