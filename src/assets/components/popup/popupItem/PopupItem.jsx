const PopupItem = ({ avatarImage }) => {
	return (
		<li className='popup__item'>
			<img src={avatarImage} alt='avatar image' />
		</li>
	);
};

export default PopupItem;
