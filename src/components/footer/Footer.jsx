import './footer.sass';
import {
	RegistrationIcon,
	GameAccountsIcon,
	NotDoneIcon,
	TasksIcon,
} from '/src/constants/svgImages';

const footerItems = [
	{ id: 'registration', icon: <RegistrationIcon />, key: 'Registration' },
	{ id: 'game-accounts', icon: <GameAccountsIcon />, key: 'Game Accounts' },
	{ id: 'tasks', icon: <TasksIcon />, key: 'Tasks' },
	{ id: 'not-done', icon: <NotDoneIcon />, key: 'Another Not Done' },
];

const Footer = ({ setFooterPage, curFooterItem, setFooterItem }) => {
	return (
		<footer className='section footer'>
			<div className='container footer__container'>
				{/* Footer List */}
				<ul className='footer__list'>
					{footerItems.map((item) => (
						<li
							key={item.key}
							className={`footer__item ${
								curFooterItem === item.id ? 'active' : ''
							}`}
							onClick={() => {
								setFooterItem(item.id);
								setFooterPage(item.id);
							}}
						>
							<div className='footer__icon'>{item.icon}</div>
							<a href='#' className='footer__link'></a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
