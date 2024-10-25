import { useState } from 'react';
import './profile.sass';
import ProfileAccount from './profileAccount/ProfileAccount';
import ProfileReferrals from './profileReferrals/ProfileReferrals';
import ProfileAchievements from './profileAchievements/ProfileAchievements';

const Profile = ({ setPopup, AccountImage }) => {
	const [curProfilePage, setProfilePage] = useState('account');
	const [curTabsItem, setTabsItem] = useState('account');

	const tabs = [
		{ key: 'account', label: 'Account' },
		{ key: 'referrals', label: 'Referrals' },
		{ key: 'achievements', label: 'Achievements' },
	];

	return (
		<section className='section profile'>
			<div className='container profile__container'>
				{/* Tabs */}
				<ul className='tabs'>
					{tabs.map(({ key, label }) => (
						<li
							key={key}
							className={`tabs__item ${curTabsItem === key ? 'active' : ''}`}
							onClick={() => {
								setProfilePage(key);
								setTabsItem(key);
							}}
						>
							<div className='tab'>
								<span>{label}</span>
							</div>
						</li>
					))}
				</ul>

				{/* Profile Account/ Referrals/ Achievements */}
				{curProfilePage === 'account' && <ProfileAccount setPopup={setPopup} AccountImage={AccountImage} />}
				{curProfilePage === 'referrals' && <ProfileReferrals />}
				{curProfilePage === 'achievements' && <ProfileAchievements />}
			</div>
		</section>
	);
};

export default Profile;
