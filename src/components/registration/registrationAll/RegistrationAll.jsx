import './registrationAll.sass';
import RegistrationCard from '../registrationCard/RegistrationCard';
import Image1 from '/src/assets/image/registration/image7.webp';
import Image2 from '/src/assets/image/registration/image12.webp';

const RegistrationAll = () => {
	const tournaments = [
		{ key: 1, players: 50, price: 15, title: 'GameName1', img: Image1 },
		{ key: 2, players: 70, price: 30, title: 'GameName2', img: Image2 },
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
				/>
			))}
		</ul>
	);
};

export default RegistrationAll;
