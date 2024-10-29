import { selectProfileImg } from '../../feature/user/userSelector';
import { useAppSelector } from '../../hooks/store';
import './header.sass';

import Logo from '/src/assets/svg/logo.svg';
import { PlusIcon } from '/src/constants/svgImages';
import { NotificationIcon, LogoIcon } from '/src/constants/svgImages';

const Header = ({ setHeaderPage, curHeaderItem, setHeaderItem }) => {
	const AccountImage = useAppSelector(selectProfileImg);
	const headerItems = [
		{
			key: 'not-done',
			icon: <NotificationIcon />,
		},
		{
			key: 'profile',
			icon: (
				<div className='header__profile'>
					<img src={AccountImage} alt='header profile avatar image' />
				</div>
			),
		},
	];

	return (
		<header className='section header'>
			<div className='container header__container'>
				{/* Header Logo */}
				<div className='header__logo'>
					<LogoIcon />
				</div>

				{/* Header List */}
				<ul className='header__list'>
					{/* Header Item for Balance */}
					<li
						className='header__item header-balance	'
						onClick={() => {
							setHeaderPage('balance');
						}}
					>
						<div className='header__icon plus-icon'>
							<PlusIcon />
						</div>
						<span className='title title--14 header-balance__item other-coin color--green'>999 AFR$</span>
					</li>
					{/* Header Items */}
					{headerItems.map(({ key, icon }) => (
						<li
							key={key}
							className={`header__item ${curHeaderItem === key ? 'active' : ''}`}
							onClick={() => {
								setHeaderPage(key);
								setHeaderItem(key);
							}}
						>
							<div className='header__icon'>{icon}</div>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
