const PopupItem = ({ avatarImage, setPopup }) => {
	return (
		<li className='popup__item' onClick={() => setPopup(false)}>
			<img src={avatarImage} alt='avatar image' />
		</li>
	);
};

export default PopupItem;
