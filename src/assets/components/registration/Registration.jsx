import { useState } from 'react';
import RegistrationAll from './registrationAll/RegistrationAll';
import NotDone from '../notDone/NotDone';

const Registration = () => {
	const [curRegistrationPage, setRegistrationPage] = useState('all');
	const [curRegistrationItem, setRegistrationItem] = useState('all');

	return (
		<section className='section registration'>
			<div className='container registration__container'>
				{/* Registration Title */}
				<h2 className='title mb--22 registration__title'>Registration</h2>
				{/* Tabs */}
				<ul className='tabs'>
					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'all' ? 'active' : null}`}
						onClick={() => {
							setRegistrationItem('all'), setRegistrationPage('all');
						}}
					>
						<div className='tab'>
							<span>All</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'not-done' ? 'active' : null}`}
						onClick={() => {
							setRegistrationItem('not-done'), setRegistrationPage('not-done');
						}}
					>
						<div className='tab'>
							<span>My games</span>
						</div>
					</li>

					{/* Tabs Item */}
					<li
						className={`tabs__item ${curRegistrationItem === 'not-done' ? 'active' : null}`}
						onClick={() => {
							setRegistrationItem('not-done'), setRegistrationPage('not-done');
						}}
					>
						<div className='tab'>
							<span>Registered</span>
						</div>
					</li>
				</ul>

				{/* Registration All/My Games/Registered */}
				{curRegistrationPage === 'all' && <RegistrationAll />}
				{/* {curRegistrationPage === 'my-games' && <RegistrationMyGames />}
				{curRegistrationPage === 'registered' && <RegistrationRegistered />} */}
				{curRegistrationPage === 'not-done' && <NotDone />}
			</div>
		</section>
	);
};

export default Registration;
