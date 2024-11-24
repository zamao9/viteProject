import { selectProfileImg } from '../../feature/user/userSelector';
import { useAppSelector } from '../../hooks/store';
import './header.sass';

import Logo from '/src/assets/svg/logo.svg';
import { PlusIcon } from '/src/constants/svgImages';
import { NotificationIcon, LogoIcon } from '/src/constants/svgImages';

const Header = ({ setHeaderPage, curHeaderItem, setHeaderItem }) => {
	const AccountImage = useAppSelector(selectProfileImg); // аватар в профиль
	// элементы
	const headerItems = [
		{
			key: 'balance',
			iconDiv: (
				<>
					<div className='header__icon header-balance'>
						<div className='header__icon plus-icon'>
							<PlusIcon />
						</div>
						<span className='title title--14 header-balance__item other-coin color--green'>
							999 AFR$
						</span>
					</div>
				</>
			),
		},
		{
			key: 'notifications',
			iconDiv: (
				<div className='header__icon'>
					<NotificationIcon />
				</div>
			),
		},
		{
			key: 'profile',
			iconDiv: (
				<div className='header__icon'>
					<div className='header__profile'>
						<img src={AccountImage} alt='header profile avatar image' />
					</div>
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

					{/* Header Items */}
					{headerItems.map(({ key, iconDiv }) => (
						<li
							key={key}
							className={`header__item ${curHeaderItem === key ? 'active' : ''}`}
							onClick={() => {
								setHeaderPage(key);
								setHeaderItem(key);
							}}
						>
							{iconDiv}
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
