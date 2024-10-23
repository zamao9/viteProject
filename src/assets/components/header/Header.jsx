import './header.sass';
import AccountImage from '/src/assets/image/profile/avatar3.webp';
import Logo from '/src/assets/svg/logo.svg';
import Plus from '/src/assets/svg/plus.svg';

const Header = ({ setHeaderPage, curHeaderItem, setHeaderItem }) => {
	return (
		<header className='section header'>
			<div className='container header__container'>
				{/* Header Logo */}
				<div className='header__logo'>
					<img src={Logo} alt='Logo' />
				</div>

				{/* Header List*/}
				<ul className='header__list'>
					{/* Header Item */}
					<li className='header__item header-balance'>
						<div className='header__icon plus-icon'>
							<img src={Plus} alt='plus svg' />
						</div>
						{/* Header Balance List */}
						<ul className='header-balance__list'>
							{/* Header Balance Item */}
							<li className='subtitle header-balance__item euro-coin color--green'>100</li>
							{/* Header Balance Item */}
							<li className='subtitle header-balance__item other-coin color--yellow'>999</li>
						</ul>
						<a href='#' className='header__link'></a>
					</li>

					{/* Header Item */}
					<li
						className={`header__item ${curHeaderItem === 'not-done' ? 'active' : null}`}
						onClick={() => {
							setHeaderItem('not-done');
							setHeaderPage('not-done');
						}}
					>
						<div className='header__icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M8.99062 21H14.9906' strokeLinecap='round' strokeLinejoin='round' />
								<path
									d='M5.26875 9.75001C5.2675 8.86087 5.44217 7.98026 5.78271 7.15891C6.12325 6.33757 6.62292 5.5917 7.25294 4.96429C7.88297 4.33688 8.6309 3.84031 9.45366 3.5032C10.2764 3.16608 11.1577 2.99507 12.0469 3.00001C15.7594 3.02814 18.7312 6.11251 18.7312 9.83439V10.5C18.7312 13.8563 19.4344 15.8063 20.0531 16.875C20.1188 16.9888 20.1535 17.1179 20.1536 17.2494C20.1537 17.3808 20.1193 17.5099 20.0538 17.6239C19.9883 17.7378 19.894 17.8325 19.7803 17.8985C19.6667 17.9646 19.5377 17.9996 19.4062 18H4.59375C4.46232 17.9996 4.33332 17.9646 4.21967 17.8985C4.10603 17.8325 4.01172 17.7378 3.94621 17.6239C3.8807 17.5099 3.84627 17.3808 3.84639 17.2494C3.84651 17.1179 3.88116 16.9888 3.94687 16.875C4.56562 15.8063 5.26875 13.8563 5.26875 10.5V9.75001Z'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<a href='#' className='header__link'></a>
						</div>
					</li>

					{/* Header Item */}
					<li
						className={`header__item ${curHeaderItem === 'item2' ? 'active' : null}`}
						onClick={() => {
							setHeaderPage('profile');
							setHeaderItem('item2');
						}}
					>
						<div className='header__profile'>
							<img src={AccountImage} alt='header profile avatar image' />
						</div>
						<a href='#' className='header__link'></a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
