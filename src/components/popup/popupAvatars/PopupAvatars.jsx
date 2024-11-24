import { useAppDispatch } from 'hooks/store';
import { setProfileImg } from 'feature/user/userSlice';
import { useState } from 'react';
import Avatar1 from '/src/assets/image/profile/avatar1.webp';
import Avatar2 from '/src/assets/image/profile/avatar2.webp';
import Avatar3 from '/src/assets/image/profile/avatar3.webp';
import Avatar4 from '/src/assets/image/profile/avatar4.webp';
import './popupAvatars.sass';

const PopupAvatars = ({ setPopup }) => {
	const dispatch = useAppDispatch();
	// аватары для профиля
	const avatars = [
		{ img: Avatar1, key: 1 },
		{ img: Avatar2, key: 2 },
		{ img: Avatar3, key: 3 },
		{ img: Avatar4, key: 4 },
	];

	const [selectedAvatar, setSelectedAvatar] = useState(null);

	return (
		<>
			<h2 className='title title--22 popup-title'>Select your avatar</h2>

			<ul className='popup-list'>
				{avatars.map((avatar) => (
					<li
						className={`popup-list__item ${selectedAvatar === avatar.img ? 'selected' : ''}`}
						onClick={() => setSelectedAvatar(avatar.img)}
						key={avatar.key}
					>
						<img src={avatar.img} alt='Avatar' />
					</li>
				))}
			</ul>

			<button
				className='button'
				onClick={() => {
					if (selectedAvatar) {
						dispatch(setProfileImg(selectedAvatar));
						setPopup(false);
					}
				}}
			>
				Change
			</button>
		</>
	);
};

export default PopupAvatars;
