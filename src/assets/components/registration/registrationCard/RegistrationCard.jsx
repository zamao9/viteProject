import './registrationCard.sass';

const RegistrationCard = () => {
	return (
		<li className='registration-item'>
			<div className='registration-card'>
				{/* Registration Card Header */}
				<div className='registration-card__header'>
					{/* Registration Card Image */}
					<div className='registration-card__image'>
						<img src='/src/assets/image/registration/image7.webp' alt='registration card image' />
					</div>
					{/* Registration Card Name/Time */}
					<div className='registration-card__data'>
						<span className='sybtext'>nameOfTheGame</span>
						<span className='title'>16:12:20:32s</span>
					</div>
				</div>

				{/* Registration Card Footer */}
				<div className='registration-card__footer'>
					{/* Registration Price */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>USD Price</span>
						<span className='title color--green'>$6.000</span>
					</div>
					{/* Registration Quantity */}
					<div className='registration-card__footer-item'>
						<span className='subtext'>Quantity</span>
						<span className='title color--blue'>15</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default RegistrationCard;
