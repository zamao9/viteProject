import ProfileAchieve from '../profileAchieve/ProfileAchieve';
import './profileAchievements.sass';
import { ReferralsIcon, StarIcon, GameAccountsIcon } from '/src/constants/svgImages';

const ProfileAchievements = () => {
	const achieveData = [
		{ key: 1, svg: <ReferralsIcon />, headline: 'The Duel Master', description: 'Win 50 V-Cash in duels', progress: 0 },
		{
			key: 2,
			svg: <StarIcon />,
			headline: 'The High Roller',
			description: 'Win more than 100 V-Cash in a single tournament',
			progress: 100,
		},
		{ key: 3, svg: <GameAccountsIcon />, headline: 'The Keeper', description: 'Save 1000 V-Cash', progress: 56 },
		{ key: 4, svg: <GameAccountsIcon />, headline: 'The Keeper', description: 'Save 1000 V-Cash', progress: 100 },
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
