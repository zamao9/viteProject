import { useEffect, useState } from 'react';
import { UpdateIcon, MessageIcon } from '/src/constants/svgImages';
import { TrashIcon } from '../../../constants/svgImages';

const NotificationsItem = ({ title, description, isRead, type }) => {
	const [trashIcon, setTrashIcon] = useState(null);
	const [curIcon, setIcon] = useState(<MessageIcon />);

	useEffect(() => {
		if (type === 'updates') {
			setIcon(<UpdateIcon />);
		}
	}, []);

	return (
		<li className={`notifications__item ${isRead ? 'is-read' : ''}`}>
			<div className='notifications__icon'>{curIcon}</div>

			<div className='notifications__content'>
				<span className='title title--18 notifications__title'>{title}</span>
				<span className='lh-140 notifications__description'>{description}</span>
			</div>

			<div
				className={`notifications__icon trash-icon ${
					trashIcon === 'active' ? 'active' : ''
				}`}
				onClick={() => {
					setTrashIcon('active'),
						setTimeout(() => {
							setTrashIcon('');
						}, 200);
				}}
			>
				<TrashIcon />
			</div>
		</li>
	);
};

export default NotificationsItem;
