import './gameAccounts.sass';
import GameAccountsItem from './gameAccountsItem/GameAccountsItem';
import Image1 from '/src/assets/image/cards/image1.webp';
import Image2 from '/src/assets/image/cards/image2.webp';
import Image3 from '/src/assets/image/cards/image3.webp';
import Image4 from '/src/assets/image/cards/image5.webp';

const GameAccounts = () => {
	const games = [
		{ title: 'Game1', img: Image1, key: 1 },
		{ title: 'Game2', img: Image2, key: 2 },
		{ title: 'Game3', img: Image3, key: 3 },
		{ title: 'Game4', img: Image4, key: 4 },
	];

	return (
		<section className='section game-accounts'>
			<div className='container game-accounts__container'>
				{/* Game Accounts Title */}
				<h2 className='title title--22 mb--22'>Game accounts</h2>

				{/* Game Accounts List */}
				<ul className='game-accounts__list'>
					{games.map((game) => (
						<GameAccountsItem title={game.title} img={game.img} key={game.key} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default GameAccounts;
