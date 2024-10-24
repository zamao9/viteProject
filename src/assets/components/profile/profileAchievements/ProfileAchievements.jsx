import ProfileAchieve from '../profileAchieve/ProfileAchieve';
import './profileAchievements.sass';
import Referrals from '/src/assets/svg/referrals.svg';
import Game from '/src/assets/svg/game.svg';
import Star from '/src/assets/svg/star.svg';

const ProfileAchievements = () => {
	const achieveData = [
		{ key: 1, svg: Referrals, headline: 'The Duel Master', description: 'Win 50 V-Cash in duels', progress: 0 },
		{
			key: 3,
			svg: Star,
			headline: 'The High Roller',
			description: 'Win more than 100 V-Cash in a single tournament',
			progress: 100,
		},
		{ key: 2, svg: Game, headline: 'The Keeper', description: 'Save 1000 V-Cash', progress: 56 },
	];

	return (
		<div className='achievements'>
			{/* Achievements List */}
			<ul className='achievements__list'>
				{/* Achievement */}
				{achieveData.map((achieve) => (
					<ProfileAchieve
						svg={achieve.svg}
						headline={achieve.headline}
						description={achieve.description}
						progress={achieve.progress}
						key={achieve.key}
					/>
				))}
			</ul>
		</div>
	);
};

export default ProfileAchievements;
