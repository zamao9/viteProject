import { useState } from 'react';
import RegistrationAll from './registrationAll/RegistrationAll';

const Registration = () => {
	const [curRegistrationPage, setRegistrationPage] = useState('all');
	const [curRegistrationItem, setRegistrationItem] = useState('item1');

	return (
		<section className='section registration'>
			<div className='container registration__container'>
				{/* Registration Title */}
				<h2 className='title mb--22 registration__title'>Registration</h2>
				{/* Tabs */}
				<ul className='tabs'>
					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'item1' ? 'active' : null}`}
						onClick={() => setRegistrationItem('item1')}
					>
						<div className='tab'>
							<span>All</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'item2' ? 'active' : null}`}
						onClick={() => setRegistrationItem('item2')}
					>
						<div className='tab'>
							<span>My games</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'item3' ? 'active' : null}`}
						onClick={() => setRegistrationItem('item3')}
					>
						<div className='tab'>
							<span>Registered</span>
						</div>
					</li>
				</ul>

				{/* Registration All/My Games/Registered */}
				{curRegistrationPage === 'all' && <RegistrationAll />}
				{/* {curRegistrationPage === 'mygames' && <RegistrationMyGames />}
				{curRegistrationPage === 'registered' && <RegistrationRegistered />} */}
			</div>
		</section>
	);
};

export default Registration;
