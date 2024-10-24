import './header.sass';

import Logo from '/src/assets/svg/logo.svg';
import { PlusIcon } from '/src/constants/svgImages';

const Header = ({ setHeaderPage, curHeaderItem, setHeaderItem, AccountImage }) => {
	const headerItems = [
		{
			key: 'not-donePlus',
			icon: <PlusIcon />,
			action: () => {
				setHeaderItem('not-donePlus');
				setHeaderPage('not-donePlus');
			},
		},
		{
			key: 'item2',
			icon: (
				<div className='header__profile'>
					<img src={AccountImage} alt='header profile avatar image' />
				</div>
			),
			action: () => {
				setHeaderPage('profile');
				setHeaderItem('item2');
			},
		},
	];

	return (
		<header className='section header'>
			<div className='container header__container'>
				{/* Header Logo */}
				<div className='header__logo'>
					<img src={Logo} alt='Logo' />
				</div>

				{/* Header List */}
				<ul className='header__list'>
					{/* Header Item for Balance */}
					<li className='header__item header-balance'>
						<div className='header__icon plus-icon'>
							<PlusIcon />
						</div>
						{/* Header Balance List */}
						<ul className='header-balance__list'>
							<li className='subtitle header-balance__item euro-coin color--green'>100</li>
							<li className='subtitle header-balance__item other-coin color--yellow'>999</li>
						</ul>
						<a href='#' className='header__link'></a>
					</li>

					{/* Header Items */}
					{headerItems.map(({ key, icon, action }) => (
						<li
							key={key}
							className={`header__item ${curHeaderItem === key ? 'active' : ''}`}
							onClick={action}
						>
							<div className='header__icon'>{icon}</div>
							<a href='#' className='header__link'></a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
