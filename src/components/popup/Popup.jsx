import './popup.sass';
import PopupAvatars from './popupAvatars/PopupAvatars';
import PopupNotifications from './popupNotifications/PopupNotifications';
import { CloseIcon } from '/src/constants/svgImages';
import { motion } from 'framer-motion';

const Popup = ({ setPopup }) => {
	const variants = {
		hidden: { opacity: 0 }, // Начальное состояние (скрыто)
		visible: { opacity: 1 }, // Конечное состояние (видимо)
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

				<PopupAvatars setPopup={setPopup} />
			</div>
		</motion.section>
	);
};

export default Popup;
