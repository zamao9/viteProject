import { useEffect, useState } from 'react';
import { UpdateIcon, MessageIcon } from '/src/constants/svgImages';
import { CheckIcon, CloseIcon, TrashIcon } from '../../../constants/svgImages';
import './notoficationsItem.sass';

const NotificationsItem = ({ title, description, isRead, type }) => {
	const [trashIcon, setTrashIcon] = useState(null);
	const [curIcon, setIcon] = useState(<MessageIcon />);
	const [trashButtonsActive, setTrashButtonsActive] = useState('null');

	useEffect(() => {
		if (type === 'updates') {
			setIcon(<UpdateIcon />);
		}
	}, []);

	const trashButtonClick = () => {
		setTrashIcon('active'),
			setTimeout(() => {
				setTrashIcon('');
			}, 200);
		if (setTrashIcon) {
			setTimeout(() => {
				setTrashButtonsActive('active');
			}, 200);
		}
	};

	return (
		<li className={`li-notifications ${isRead ? 'is-read' : ''}`}>
			<div className='li-notifications__icon'>{curIcon}</div>
			<div className='li-notifications__content'>
				<span className='title title--18 li-notifications__title'>{title}</span>
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

			<div
				className={`trash-buttons ${
					trashButtonsActive === 'active' ? 'active' : ''
				}`}
			>
				<CheckIcon />
				<CloseIcon />
			</div>
		</li>
	);
};

export default NotificationsItem;
