import './registrationCard.sass';
import { useState, useEffect } from 'react';
import { formatTime } from '/src/helpers/Timers';

const RegistrationCard = ({
	players,
	price,
	title,
	img,
	days = 0,
	hours = 0,
	minutes = 0,
	seconds = 0,
}) => {
	const [curButton, setButton] = useState(null);

	const calculateInitialTimeLeft = () =>
		days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;

	const [timeLeft, setTimeLeft] = useState(calculateInitialTimeLeft());

	// Вычисляем дни, часы, минуты и секунды из `timeLeft`
	const remainingDays = Math.floor(timeLeft / (24 * 3600));
	const remainingHours = Math.floor((timeLeft % (24 * 3600)) / 3600);
	const remainingMinutes = Math.floor((timeLeft % 3600) / 60);
	const remainingSeconds = timeLeft % 60;

	//console.log(timeLeft);

	useEffect(() => {
		// Если время закончилось, не запускаем таймер
		if (timeLeft <= 0) return;
		// Устанавливаем интервал на каждую секунду
		const intervalId = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);
		// Чистим интервал при размонтировании компонента
		return () => clearInterval(intervalId);
	}, [timeLeft]);

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
							<span className='text text--14'>{title}</span>
							<span className='subtitle subtitle--16'>
								{' '}
								{formatTime({
									days: remainingDays,
									hours: remainingHours,
									minutes: remainingMinutes,
									seconds: remainingSeconds,
								})}
							</span>
						</div>
						<button
							className={`small-button registration-card__button ${
								curButton ? 'button--disabled' : ''
							}`}
							onClick={() => {
								setButton('button--disabled');
							}}
						>
							{curButton === 'button--disabled' ? 'Joined' : 'Join'}
						</button>
					</div>
				</div>

				{/* Registration Card Footer */}
				<div className='registration-card__footer'>
					{/* Registration Price */}
					<div className='registration-card__footer-item'>
						<span className='text text--14'>Price</span>
						<span className='subtitle subtitle--18 color--green'>
							{price} TON
						</span>
					</div>
					{/* Registration Players */}
					<div className='registration-card__footer-item'>
						<span className='text text--14'>Players</span>
						<span className='subtitle subtitle--18 color--blue'>{players}</span>
					</div>
					{/* Registration Something */}
					<div className='registration-card__footer-item'>
						<span className='text text--14'>Something</span>
						<span className='subtitle subtitle--18'>{players}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default RegistrationCard;
