import './registrationAll.sass';
import RegistrationCard from '../registrationCard/RegistrationCard';
import Image1 from '/src/assets/image/registration/image7.webp';

const RegistrationAll = () => {
	const tournaments = [
		{
			key: 1,
			players: 50,
			price: 15,
			title: 'GameName1',
			img: Image1,
			days: 99,
			hours: 23,
			minutes: 55,
			seconds: 55,
		},
		{
			key: 2,
			players: 143,
			price: 30,
			title: 'GameName1',
			img: Image1,
			days: 99,
			hours: 23,
			minutes: 55,
			seconds: 55,
		},
	];

	return (
		<ul className='registration-all'>
			{/* Registration Card */}
			{tournaments.map((tournament) => (
				<RegistrationCard
					key={tournament.key}
					players={tournament.players}
					price={tournament.price}
					title={tournament.title}
					img={tournament.img}
					days={tournament.days}
					hours={tournament.hours}
					minutes={tournament.minutes}
					seconds={tournament.seconds}
				/>
			))}
		</ul>
	);
};

export default RegistrationAll;
