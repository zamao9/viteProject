import './popup.sass';
import Avatar1 from '/src/assets/image/profile/avatar1.webp';
import Avatar2 from '/src/assets/image/profile/avatar2.webp';
import Avatar3 from '/src/assets/image/profile/avatar3.webp';
import Avatar4 from '/src/assets/image/profile/avatar4.webp';
import PopupItem from './popupItem/PopupItem';

const Popup = ({ setPopup }) => {
	const avatars = [
		{ img: Avatar1, key: 1 },
		{ img: Avatar2, key: 2 },
		{ img: Avatar3, key: 3 },
		{ img: Avatar4, key: 4 },
		{ img: Avatar4, key: 5 },
		{ img: Avatar4, key: 6 },
		{ img: Avatar4, key: 7 },
		{ img: Avatar4, key: 8 },
	];

	return (
		<section className='section popup'>
			<div className='container popup__container'>
				<div className='popup__close' onClick={() => setPopup(false)}>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M18.75 5.25L5.25 18.75' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M18.75 18.75L5.25 5.25' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</div>

				{/* Popup Title */}
				<h2 className='title popup__title'>Select your avatar</h2>

				{/* Popup List */}
				<ul className='popup__list'>
					{avatars.map((avatar) => (
						<PopupItem avatarImage={avatar.img} key={avatar.key} />
					))}
				</ul>

				{/* Popup Button */}
				<button className='button' onClick={() => setPopup(false)}>
					Change
				</button>
			</div>
		</section>
	);
};

export default Popup;
