import './registrationCard.sass';

const RegistrationCard = ({ players, price, title, img }) => {
	return (
		<li className='registration-item'>
			<div className='registration-card'>
				{/* Registration Card Header */}
				<div className='registration-card__header'>
					{/* Registration Card Image */}
					<div className='registration-card__image'>
						<img src={img} alt='registration card image' />
					</div>
					{/* Registration Card Name/Time/Link */}
					<div className='registration-card__data-wrapper'>
						<div className='registration-card__data'>
							<span className='sybtext'>{title}</span>
							<span className='subtitle'>16:12:20:32s</span>
						</div>
						<button className='small-button registration-card__button'>Join</button>
					</div>
				</div>

				{/* Registration Card Footer */}
				<div className='registration-card__footer'>
					{/* Registration Price */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Price</span>
						<span className='subtitle color--green'>{price} TON</span>
					</div>
					{/* Registration Players */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Players</span>
						<span className='subtitle color--blue'>{players}</span>
					</div>
					{/* Registration Something */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Something</span>
						<span className='subtitle'>{players}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default RegistrationCard;
