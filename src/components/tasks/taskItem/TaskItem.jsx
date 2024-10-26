import { useState } from 'react';
import './taskItem.sass';

const TaskItem = ({ img, text, price }) => {
	let buttonText = 'Start';
	const [curButton, setButton] = useState(null);
	const [curButtonText, setButtonText] = useState(buttonText);

	return (
		<li className='tasks-item'>
			<div className='task'>
				{/* Task Image */}
				<div className='task__image'>
					<img src={img} alt='task image' />
				</div>

				{/* Task Content */}
				<div className='task__content'>
					<p className='text task__text'>{text}</p>
					<div className='task__footer'>
						<span className='title task__price color--yellow'>
							{price} <span className='subtext'>AFR$</span>
						</span>
						<button
							className={`small-button ${curButton ? 'button--disabled' : ''}`}
							onClick={() => {
								if (setButton) {
									setButton('button--disabled');
									setButtonText('Started');
								}
							}}
						>
							{curButtonText}
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default TaskItem;
