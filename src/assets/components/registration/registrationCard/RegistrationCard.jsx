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
					{/* Registration Card Name/Time */}
					<div className='registration-card__data'>
						<span className='sybtext'>{title}</span>
						<span className='title'>16:12:20:32s</span>
					</div>
				</div>

				{/* Registration Card Footer */}
				<div className='registration-card__footer'>
					{/* Registration Price */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Price</span>
						<span className='title color--green'>{price} TON</span>
					</div>
					{/* Registration Quantity */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Players</span>
						<span className='title color--blue'>{players}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default RegistrationCard;
