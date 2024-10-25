import './gameAccountsItem.sass';

const GameAccountsItem = ({ title, img }) => {
	return (
		<li className='game-accounts-item'>
			<div className='game-account'>
				{/* Game Account Image */}
				<div className='game-account__image'>
					<img src={img} alt='game account image' />
				</div>

				{/* Game Account Name */}
				<div className='game-account__name'>
					<span className='headline'>{title}</span>
				</div>

				{/* Game Account Link */}
				<button className='small-button'>Link</button>
			</div>
		</li>
	);
};

export default GameAccountsItem;
