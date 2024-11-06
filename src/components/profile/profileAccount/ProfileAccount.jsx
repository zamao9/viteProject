import { formatNumber, formatNumberShort } from '../../../helpers/FormatNumber';
import './profileAccount.sass';
import { useAppSelector } from 'hooks/store';
import { selectProfileImg } from 'feature/user/userSelector';
import { ChangerIcon } from '../../../constants/svgImages';

const accountAccount = ({ setPopup, curReferrals, curPlayed }) => {
	const AccountImage = useAppSelector(selectProfileImg);

	return (
		<div className='account'>
			{/* Account Image */}
			<div className='account__image'>
				<div className='changer' onClick={() => setPopup(true)}>
					<ChangerIcon />
				</div>
				<img src={AccountImage} alt='account image' />
			</div>

			{/* Account Name */}
			<span className='title title--22 account__name'>
				Jaga Jugu Jigi Jaga{' '}
				<span className='headline account__name-id'>#153658965</span>
			</span>

			{/* Account Stats */}
			<ul className='account__stats-list'>
				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--game'>Played</span>
						<span className='subtitle subtitle--18'>
							{formatNumberShort(curPlayed)}
						</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--star'>Winrate</span>
						<span className='subtitle subtitle--18'>100%</span>
					</div>
				</li>

				{/* Stats Item */}
				<li className='account__stats-item'>
					<div className='account__stat'>
						<span className='account__stats-svg background--referrals'>
							Referrals
						</span>
						<span className='subtitle subtitle--18'>
							{formatNumberShort(curReferrals)}
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default accountAccount;
