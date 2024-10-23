import './registrationAll.sass';
import RegistrationCard from '../registrationCard/RegistrationCard';

const RegistrationAll = () => {
	return (
		<ul className='registration-all'>
			{/* Registration Card */}
			<RegistrationCard />
			<RegistrationCard />
		</ul>
	);
};

export default RegistrationAll;
