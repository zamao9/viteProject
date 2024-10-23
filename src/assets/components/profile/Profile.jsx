import { useState } from 'react';
import './profile.sass';
import ProfileAccount from './profileAccount/ProfileAccount';
import ProfileAchievements from './profileAchievements/ProfileAchievements';
import ProfileReferrals from './profileReferrals/ProfileReferrals';

const Profile = () => {
	const [curProfilePage, setProfilePage] = useState('account');
	const [curTabsItem, setTabsItem] = useState('account');

	return (
		<section className='section profile'>
			<div className='container profile__container'>
				{/* Tabs */}
				<ul className='tabs'>
					{/* Tabs Item */}
					<li
						className={`tabs__item ${curTabsItem === 'account' ? 'active' : null}`}
						onClick={() => {
							setProfilePage('account');
							setTabsItem('account');
						}}
					>
						<div className='tab'>
							<span>Account</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curTabsItem === 'referrals' ? 'active' : null}`}
						onClick={() => {
							setProfilePage('referrals');
							setTabsItem('referrals');
						}}
					>
						<div className='tab'>
							<span>Referrals</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curTabsItem === 'achievements' ? 'active' : null}`}
						onClick={() => {
							setProfilePage('achievements');
							setTabsItem('achievements');
						}}
					>
						<div className='tab'>
							<span>Achievements</span>
						</div>
					</li>
				</ul>

				{/* Profile Account/ Referrals/ Achievements */}
				{curProfilePage === 'account' && <ProfileAccount />}
				{curProfilePage === 'referrals' && <ProfileReferrals />}
				{curProfilePage === 'achievements' && <ProfileAchievements />}
			</div>
		</section>
	);
};

export default Profile;
