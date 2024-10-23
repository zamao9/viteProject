import './games.sass';
import GameCardImage1 from '/src/assets/image/cards/image1.webp';
import GameCardImage2 from '/src/assets/image/cards/image1.webp';

const Games = () => {
	return (
		<section className='section games'>
			<div className='container games__container'>
				<h2 className='title mb--22 games__title'>Service in game</h2>

				{/* Games Search */}
				<div className='games__search'>
					<input type='search' placeholder='Search' className='games__input' />
					<div className='games__delete'>
						<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path d='M16.4437 16.4438L21 21' strokeLinecap='round' strokeLinejoin='round' />
						</svg>
					</div>
				</div>

				{/* Games Cards */}
				<ul className='games__list'>
					{/* Games Item */}
					<li className='games__item'>
						<div className='games__card'>
							<div className='games__image'>
								<img src={GameCardImage1} alt='games card image' />
							</div>
							<span className='text games__card-text'>Name of the game trolololololo</span>

							{/* Games Card Select */}
							<div className='games__select-wrapper'>
								{/* Games Card Line */}
								<hr className='games__card-line' />
								{/* Games Select List */}
								<ul className='games__select-list'>
									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Steam Gifts (<span className='game-select__count'>10</span>)
										</p>
									</li>

									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Gold (<span className='game-select__count'>2</span>)
										</p>
									</li>

									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Keys (<span className='game-select__count'>1</span>)
										</p>
									</li>
								</ul>
							</div>
						</div>
					</li>

					{/* Games Item */}
					<li className='games__item active'>
						<div className='games__card'>
							<div className='games__image'>
								<img src={GameCardImage2} alt='games card image' />
							</div>
							<span className='text games__card-text'>Name of the game trolololololo</span>

							{/* Games Card Select */}
							<div className='games__select-wrapper'>
								{/* Games Card Line */}
								<hr className='games__card-line' />
								{/* Games Select List */}
								<ul className='games__select-list'>
									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Steam Gifts (<span className='game-select__count'>10</span>)
										</p>
									</li>

									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Gold (<span className='game-select__count'>2</span>)
										</p>
									</li>

									{/* Games Select Item */}
									<li className='games__select-item'>
										<p className='subtext games-select'>
											Keys (<span className='game-select__count'>1</span>)
										</p>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Games;
