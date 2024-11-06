import { useEffect, useState } from 'react';
import {
	UpdateIcon,
	MessageIcon,
	CheckIconNotification,
	CloseIconNotification,
	TrashIcon,
	ActionsIcon,
	TournamentsIcon,
	TechnicalWorkIcon,
	WarningIcon,
} from '/src/constants/svgImages';
import './notoficationsItem.sass';
import { AnimatePresence, motion } from 'framer-motion';

const NotificationsItem = ({
	title,
	description,
	isRead,
	type,
	markRemoveAnimation,
	removeNotification,
}) => {
	const [trashIcon, setTrashIcon] = useState(null); // trash icon animation
	const [curIcon, setIcon] = useState(<MessageIcon />);
	const [trashButtonsActive, setTrashButtonsActive] = useState(null);
	const [closeAnimation, setCloseAnimation] = useState(true);

	const [itemClick, setItemClick] = useState(false); // click li element active

	useEffect(() => {
		if (type === 'updates') {
			setIcon(<UpdateIcon />);
		} else if (type === 'actions') {
			setIcon(<ActionsIcon />);
		} else if (type === 'tournaments') {
			setIcon(<TournamentsIcon />);
		} else if (type === 'tech-work') {
			setIcon(<TechnicalWorkIcon />);
		} else if (type === 'warning') {
			setIcon(<WarningIcon />);
		}
	}, []);

	const trashButtonClick = () => {
		setTrashIcon('active'),
			setTimeout(() => {
				setTrashIcon('');
			}, 200);
		if (setTrashIcon) {
			setTimeout(() => {
				setCloseAnimation(false);
				setTrashButtonsActive('active');
			}, 200);
		}
	};

	return (
		<AnimatePresence>
			<li
				className={`li-notifications ${
					isRead ? 'is-read' : itemClick === true ? 'is-read' : ''
				}`}
				onClick={() => {
					setItemClick(true);
				}}
			>
				<div className='li-notifications__icon'>{curIcon}</div>
				<div className='li-notifications__content'>
					<span className='title title--18 li-notifications__title'>
						{title}
					</span>
					<span className='lh-140 li-notifications__description'>
						{description}
					</span>
				</div>
				<div
					className={`li-notifications__icon trash-icon ${
						trashIcon === 'active' ? 'active' : ''
					}`}
					onClick={() => {
						trashButtonClick();
					}}
				>
					<TrashIcon />
				</div>

				<AnimatePresence>
					{trashButtonsActive === 'active' && (
						<motion.div
							className='trash-buttons active'
							initial={{ x: '100%', y: '-50%' }}
							animate={!closeAnimation ? { x: 0, y: '-50%' } : {}}
							exit={{ x: '100%', y: '-50%' }}
							transition={{ duration: 0.2 }}
						>
							<div onClick={() => removeNotification()}>
								<CheckIconNotification />
							</div>

							<div
								onClick={() => {
									setCloseAnimation(true),
										setTimeout(() => {
											setTrashButtonsActive('');
										}, 300);
								}}
							>
								<CloseIconNotification />
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</li>
		</AnimatePresence>
	);
};

export default NotificationsItem;
