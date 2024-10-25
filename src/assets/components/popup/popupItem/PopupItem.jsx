const PopupItem = ({ avatarImage, isSelected, onClick }) => {
	return (
		<li className={`popup__item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
			<img src={avatarImage} alt='Avatar' />
		</li>
	);
};

export default PopupItem;
