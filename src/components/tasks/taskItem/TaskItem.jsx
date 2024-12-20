import { useState } from 'react';
import './taskItem.sass';

const TaskItem = ({ img, text, price }) => {
	const [curButton, setButton] = useState(null);

	return (
		<li className='tasks-item'>
			<div className='task'>
				{/* Task Image */}
				<div className='task__image'>
					<img src={img} alt='task image' />
				</div>

				{/* Task Content */}
				<div className='task__content'>
					<p className='lh--140 task__text'>{text}</p>
					<div className='task__footer'>
						<span className='subtitle subtitle--18 task__price color--yellow'>{price} AFR$</span>
						<button
							className={`small-button ${curButton ? 'button--disabled' : ''}`}
							onClick={() => {
								setButton('button--disabled');
							}}
						>
							{curButton === 'button--disabled' ? 'Started' : 'Start'}
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default TaskItem;
