import { useState } from 'react';
import './popup.sass';
import PopupAvatars from './popupAvatars/PopupAvatars';
import PopupNotifications from './popupNotifications/PopupNotifications';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIconPopup } from '../../constants/svgImages';

const Popup = ({ curPopup, setPopup }) => {
	const variants = {
		hidden: { opacity: 0 }, // Начальное состояние (скрыто)
		visible: { opacity: 1 }, // Конечное состояние (видимо)
	};
	const [active, setActive] = useState(true); // активировать попап или нет

	return (
		<AnimatePresence>
			<motion.section
				className='section popup'
				initial='hidden' // Начальное состояние
				animate={active === true ? 'visible' : ''} // Конечное состояние
				exit='hidden' // Состояние при выходе
				variants={variants}
				transition={{ duration: 0.2 }} // Время анимации
			>
				<div className='container popup__container'>
					<div
						className='popup__close'
						onClick={() => {
							setActive(false),
								setTimeout(() => {
									setPopup(false);
								}, 200);
						}}
					>
						<CloseIconPopup />
					</div>

					<PopupAvatars setPopup={setPopup} />
				</div>
			</motion.section>
		</AnimatePresence>
	);
};

export default Popup;
