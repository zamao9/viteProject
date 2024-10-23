import './profileAchieve.sass';

const ProfileAchieve = () => {
	return (
		<li className='achievements__item achievement'>
			{/* Achievement */}
			<div className='achievement__wrapper'>
				<div className='achievement__content background--referrals'>
					{/* Achievement Headline */}
					<span className='headline'>The Duel Master</span>
					{/* Achievement Description */}
					<span className='text achievement__text'>Win 50 V-Cash in duels</span>
				</div>

				{/* Achievement Progress */}
				<div className='achievement__progress'>
					<span>0.0%</span>
				</div>
			</div>
		</li>
	);
};

export default ProfileAchieve;
