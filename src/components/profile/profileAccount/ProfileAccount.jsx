import './profileAccount.sass';

import Changer from '/src/assets/svg/changer.svg';

const accountAccount = ({ setPopup, AccountImage }) => {
	return (
		<div className='account'>
			{/* Account Image */}
			<div className='account__image'>
				<div className='changer' onClick={() => setPopup(true)}>
					<img src={Changer} alt='changer svg' />
				</div>
				<img src={AccountImage} alt='account image' />
			</div>

			{/* Account Name */}
			<span className='account__name'>
				Jaga Jugu Jigi Jaga <span className='headline account__name-subtitle'>#153658965</span>
			</span>

			{/* Account Stats */}
			<ul className='account__stats-list'>
				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--game'>Played</span>
						<span className='subtitle'>100k</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--star'>Winrate</span>
						<span className='subtitle'>100%</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--referrals'>Referrals</span>
						<span className='subtitle'>100k</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default accountAccount;
