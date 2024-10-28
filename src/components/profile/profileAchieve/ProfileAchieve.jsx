import './profileAchieve.sass';

const ProfileAchieve = ({ svg, headline, description, progress }) => {
	return (
		<li className='achievements__item achievement'>
			{/* Achievement */}
			<div className={`achievement__wrapper ${progress === 100 ? 'active' : null}`}>
				{/* Achievement Svg */}
				<div className='achievement__svg'>{svg}</div>
				<div className='achievement__content'>
					{/* Achievement Headline */}
					<span className='subtitle'>{headline}</span>
					{/* Achievement Description */}
					<span className='text'>{description}</span>
				</div>

				{/* Achievement Progress */}
				<div className='achievement__progress'>
					<span className='subtitle'>{progress}%</span>
				</div>
			</div>
		</li>
	);
};

export default ProfileAchieve;
