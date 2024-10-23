import './popup.sass';
import Close from '/src/assets/svg/close.svg';
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
	];

	return (
		<section className='section popup'>
			<div className='container popup__container'>
				<div className='popup__close' onClick={() => setPopup(false)}>
					<img src={Close} alt='close svg' />
				</div>

				<ul className='popup__list'>
					{avatars.map((avatar) => (
						<PopupItem avatarImage={avatar.img} key={avatar.key} setPopup={setPopup} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Popup;
