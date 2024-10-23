import './profileReferrals.sass';

const ProfileReferrals = () => {
	return (
		<div className='referrals'>
			{/* Key Stats Summary Title */}
			<h2 className='title mb--22 referrals__title'>Key stats summary</h2>

			{/* Key Stats Summary Content*/}
			<div className='referrals__stats'>
				{/* Key Stats Summary Content Title*/}
				<span className='referrals__headline'>Stats</span>

				{/* Referrals List */}
				<ul className='referrals__list'>
					{/* Referrals Item */}
					<li className='referrals__item'>
						<div className='referrals__stat'>
							<span className='subtitle'>Followed the link</span>
							<span>0</span>
						</div>
					</li>

					{/* Referrals Item */}
					<li className='referrals__item'>
						<div className='referrals__stat'>
							<span className='subtitle'>Registered</span>
							<span>0</span>
						</div>
					</li>

					{/* Referrals Item */}
					<li className='referrals__item'>
						<div className='referrals__stat'>
							<span className='subtitle'>Profit</span>
							<span className='referrals__stat-svg color--green'>5 000</span>
						</div>
					</li>
				</ul>
			</div>

			{/* Referral Link Title */}
			<h2 className='title mb--22 referrals__title'>Referral link</h2>

			<div className='referrals__link'>
				<span>GUBW94UL</span>
			</div>
		</div>
	);
};

export default ProfileReferrals;
