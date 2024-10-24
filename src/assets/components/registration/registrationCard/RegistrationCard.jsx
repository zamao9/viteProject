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
							<span className='title'>16:12:20:32s</span>
						</div>
						<a href='#' className='link registration-card__link'>
							Join
						</a>
					</div>
				</div>

				{/* Registration Card Footer */}
				<div className='registration-card__footer'>
					{/* Registration Price */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Price</span>
						<span className='title color--green'>{price} TON</span>
					</div>
					{/* Registration Players */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Players</span>
						<span className='title color--blue'>{players}</span>
					</div>
					{/* Registration Something */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Something</span>
						<span className='title'>{players}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default RegistrationCard;
