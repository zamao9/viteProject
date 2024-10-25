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
			<span className='title account__name'>
				Jaga Jugu Jigi Jaga <span className='subtitle account__name-subtitle'>#153658965</span>
			</span>

			{/* Account Stats */}
			<ul className='account__stats-list'>
				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat background--600'>
						<span className='account__stats-svg background--game'>Played</span>
						<span>100k</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat background--orange'>
						<span className='account__stats-svg background--star'>Winrate</span>
						<span>100%</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat background--violet'>
						<span className='account__stats-svg background--referrals'>Referrals</span>
						<span>100k</span>
					</div>
				</li>
			</ul>

			{/* Account Line */}
			<hr className='account__line' />
		</div>
	);
};

export default accountAccount;
