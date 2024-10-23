import './footer.sass';

const Footer = ({ setFooterPage, curFooterItem, setFooterItem }) => {
	return (
		<footer className='section footer'>
			<div className='container footer__container'>
				{/* Footer List */}
				<ul className='footer__list'>
					{/* Footer Item */}
					<li
						className={`footer__item ${curFooterItem === 'registration' ? 'active' : null}`}
						onClick={() => {
							setFooterItem('registration');
							setFooterPage('registration');
						}}
					>
						<div className='footer__icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M2.97136 11.5102C4.43524 12.362 6.51403 12.5724 8.50116 10.8547C10.2681 12.8184 13.297 12.8184 15.0639 10.8547C19.1025 14.3457 23.3936 9.98194 22.3839 8.23645L19.6074 3H3.95775L1.18118 8.23645C0.60421 9.06768 1.46009 10.6308 2.97136 11.5102ZM2.97136 11.5102V20H9.18873V14.2832H14.0413V20H20.6154V11.5102' />
							</svg>
						</div>
						<a href='#' className='footer__link'></a>
					</li>

					{/* Footer Item */}
					<li
						className={`footer__item ${curFooterItem === 'game-accounts' ? 'active' : null}`}
						onClick={() => {
							setFooterPage('game-accounts');
							setFooterItem('game-accounts');
						}}
					>
						<div className='footer__icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path d='M14.25 10.125H17.25' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M6.75 10.125H9.75' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M8.25 8.625V11.625' strokeLinecap='round' strokeLinejoin='round' />
								<path
									d='M16.125 5.22186L7.875 5.24999C6.72913 5.25217 5.62051 5.65714 4.74304 6.39408C3.86558 7.13101 3.27514 8.15298 3.075 9.28124L1.5375 17.1656C1.43878 17.7162 1.51852 18.2839 1.76509 18.786C2.01167 19.2881 2.41218 19.6983 2.90823 19.9568C3.40429 20.2153 3.96995 20.3086 4.52274 20.223C5.07552 20.1375 5.58653 19.8776 5.98125 19.4812L10.0312 15L16.125 14.9719C17.4179 14.9719 18.6579 14.4582 19.5721 13.544C20.4864 12.6298 21 11.3898 21 10.0969C21 8.80393 20.4864 7.56396 19.5721 6.64972C18.6579 5.73548 17.4179 5.22186 16.125 5.22186Z'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M20.925 9.25311L22.4625 17.1656C22.5612 17.7162 22.4815 18.2839 22.2349 18.786C21.9883 19.2881 21.5878 19.6983 21.0918 19.9568C20.5957 20.2153 20.03 20.3086 19.4773 20.223C18.9245 20.1375 18.4135 19.8776 18.0187 19.4812L13.9688 14.9812'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<a href='#' className='footer__link'></a>
					</li>

					{/* Footer Item */}
					<li
						className={`footer__item ${curFooterItem === 'not-done' ? 'active' : null}`}
						onClick={() => {
							setFooterItem('not-done');
							setFooterPage('not-done');
						}}
					>
						<div className='footer__icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M9 11.25C13.1421 11.25 16.5 9.73896 16.5 7.875C16.5 6.01104 13.1421 4.5 9 4.5C4.85786 4.5 1.5 6.01104 1.5 7.875C1.5 9.73896 4.85786 11.25 9 11.25Z'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M1.5 7.875V11.625C1.5 13.4906 4.85625 15 9 15C13.1438 15 16.5 13.4906 16.5 11.625V7.875'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path d='M6 10.9688V14.7188' strokeLinecap='round' strokeLinejoin='round' />
								<path
									d='M16.5 9.06561C19.9219 9.38436 22.5 10.7437 22.5 12.375C22.5 14.2406 19.1438 15.75 15 15.75C13.1625 15.75 11.475 15.45 10.1719 14.9625'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M7.5 14.9344V16.125C7.5 17.9906 10.8562 19.5 15 19.5C19.1438 19.5 22.5 17.9906 22.5 16.125V12.375'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path d='M18 15.4688V19.2188' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M12 10.9688V19.2188' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</div>
						<a href='#' className='footer__link '></a>
					</li>

					{/* Footer Item */}
					<li
						className={`footer__item ${curFooterItem === 'not-done' ? 'active' : null}`}
						onClick={() => {
							setFooterItem('not-done');
							setFooterPage('not-done');
						}}
					>
						<div className='footer__icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12.375 20.25H4.47188C4.37673 20.2513 4.28229 20.2334 4.19414 20.1976C4.10599 20.1618 4.02591 20.1087 3.95863 20.0414C3.89134 19.9741 3.83821 19.894 3.80238 19.8059C3.76655 19.7177 3.74874 19.6233 3.75 19.5281V11.625C3.75 9.33751 4.6587 7.14371 6.27621 5.5262C7.89371 3.9087 10.0875 3 12.375 3C13.5077 3 14.6292 3.22309 15.6756 3.65654C16.7221 4.08999 17.6729 4.7253 18.4738 5.5262C19.2747 6.32711 19.91 7.27792 20.3435 8.32436C20.7769 9.37079 21 10.4923 21 11.625C21 12.7577 20.7769 13.8792 20.3435 14.9256C19.91 15.9721 19.2747 16.9229 18.4738 17.7238C17.6729 18.5247 16.7221 19.16 15.6756 19.5935C14.6292 20.0269 13.5077 20.25 12.375 20.25Z'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path d='M9.375 10.5H15' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M9.375 13.5H15' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</div>
						<a href='#' className='footer__link'></a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
