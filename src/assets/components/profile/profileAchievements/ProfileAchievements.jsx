import ProfileAchieve from '../profileAchieve/ProfileAchieve';
import './profileAchievements.sass';

const ProfileAchievements = () => {
	return (
		<div className='achievements'>
			{/* Achievements List */}
			<ul className='achievements__list'>
				{/* Achievement */}
				<ProfileAchieve />
				<ProfileAchieve />
			</ul>
		</div>
	);
};

export default ProfileAchievements;
