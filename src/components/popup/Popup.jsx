import './popup.sass';
import Avatar1 from '/src/assets/image/profile/avatar1.webp';
import Avatar2 from '/src/assets/image/profile/avatar2.webp';
import Avatar3 from '/src/assets/image/profile/avatar3.webp';
import Avatar4 from '/src/assets/image/profile/avatar4.webp';
import PopupItem from './popupItem/PopupItem';
import { CloseIcon } from '/src/constants/svgImages';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from 'hooks/store';
import { setProfileImg } from 'feature/user/userSlice';

const Popup = ({ setPopup }) => {
	const dispatch = useAppDispatch();
	const avatars = [
		{ img: Avatar1, key: 1 },
		{ img: Avatar2, key: 2 },
		{ img: Avatar3, key: 3 },
		{ img: Avatar4, key: 4 },
	];

	const [selectedAvatar, setSelectedAvatar] = useState(null);

	const variants = {
		hidden: { opacity: 0 }, // Начальное состояние (скрыто)
		visible: { opacity: 1 }, // Конечное состояние (видимо)
	};

	const handleAvatarSelect = (selectedAvatar) => {
		if (selectedAvatar) {
			dispatch(setProfileImg(selectedAvatar));
			setPopup(false);
		}
	};

	return (
		<motion.section
			className='section popup'
			initial='hidden' // Начальное состояние
			animate='visible' // Конечное состояние
			exit='hidden' // Состояние при выходе
			variants={variants}
			transition={{ duration: 0.2 }} // Время анимации
		>
			<div className='container popup__container'>
				<div className='popup__close' onClick={() => setPopup(false)}>
					<CloseIcon />
				</div>

				<h2 className='title title--22 popup__title'>Select your avatar</h2>

				<ul className='popup__list'>
					{avatars.map((avatar) => (
						<PopupItem
							avatarImage={avatar.img}
							key={avatar.key}
							isSelected={selectedAvatar === avatar.img}
							onClick={() => setSelectedAvatar(avatar.img)}
						/>
					))}
				</ul>

				<button
					className='button'
					onClick={() => {
						handleAvatarSelect(selectedAvatar)
					}}
				>
					Change
				</button>
			</div>
		</motion.section>
	);
};

export default Popup;
