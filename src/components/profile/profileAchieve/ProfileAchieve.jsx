import './profileAchieve.sass';

const ProfileAchieve = ({ svg, headline, description, progress }) => {
	return (
		<li className='achievements__item achievement'>
			{/* Achievement */}
			<div
				className={`achievement__wrapper ${progress === 100 ? 'active' : null}`}
			>
				{/* Achievement Svg */}
				<div className='achievement__svg'>{svg}</div>
				<div className='achievement__content'>
					{/* Achievement Headline */}
					<span className='title title--18'>{headline}</span>
					{/* Achievement Description */}
					<span className='lh--140'>{description}</span>
				</div>

				{/* Achievement Progress */}
				<div className='achievement__progress'>
					<span className='subtitle subtitle--18'>{progress}%</span>
				</div>
			</div>
		</li>
	);
};

export default ProfileAchieve;
