import './profileAccount.sass';

const accountAccount = () => {
	return (
		<div className='account'>
			{/* Account Image */}
			<div className='account__image'>
				<div className='changer'></div>
				<img src='/src/assets/image/avatar.webp' alt='account image' />
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
						<span>0</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat background--orange'>
						<span className='account__stats-svg background--star'>Winrate</span>
						<span>0%</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat background--violet'>
						<span className='account__stats-svg background--referrals'>Referrals</span>
						<span>0</span>
					</div>
				</li>
			</ul>

			{/* Account Line */}
			<hr className='account__line' />

			{/* Account About */}
			<div className='account__about-wrapper'>
				<div className='account__about-header'>
					<div className='account__about-headline'>
						<span>About me</span>
					</div>
					{/* Account Button */}
					<div className='account__button'>
						<button className='button account__button button--disabled'>Save</button>
					</div>
				</div>
				{/* Account Textarea */}
				<textarea
					name='account-about'
					id=''
					className='text account__about-textarea textarea--reset'
					placeholder='...'
				></textarea>
			</div>
		</div>
	);
};

export default accountAccount;
