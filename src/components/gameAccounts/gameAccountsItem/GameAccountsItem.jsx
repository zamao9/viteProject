import { useState } from 'react';
import './gameAccountsItem.sass';

const GameAccountsItem = ({ title, img }) => {
	const [curButton, setButton] = useState(null);

	return (
		<li className='game-accounts-item'>
			<div className='game-account'>
				{/* Game Account Image */}
				<div className='game-account__image'>
					<img src={img} alt='game account image' />
				</div>

				{/* Game Account Name */}
				<div className='game-account__name'>
					<span className='subtitle'>{title}</span>
				</div>

				{/* Game Account Link */}
				<button
					className={`small-button ${curButton ? 'button--disabled' : ''}`}
					onClick={() => {
						setButton('button--disabled');
					}}
				>
					{curButton === 'button--disabled' ? 'Linked' : 'Link'}
				</button>
			</div>
		</li>
	);
};

export default GameAccountsItem;
