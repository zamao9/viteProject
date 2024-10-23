import './App.sass';
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Profile from './assets/components/profile/Profile';
import Games from './assets/components/games/Games';
import { useState } from 'react';
import Registration from './assets/components/registration/Registration';
import GameAccounts from './assets/components/gameAccounts/GameAccounts';

function App() {
	const [curGames, setGames] = useState(null);
	const [curProfile, setProfile] = useState(null);
	const [curItemActive, setItemActive] = useState(null);

	return (
		<>
			<Header setProfile={setProfile} curHeaderItem={curItemActive} setHeaderItem={setItemActive} />
			<main className='section main'>
				<div className='container main__container'>
					{/* Profile */}
					{curProfile === 'profile' && <Profile />}
					{/* Games */}
					{curGames === 'games' && <Games />}
					{/* Registration */}
					{/* <Registration /> */}
					{/* GameAccounts */}
					<GameAccounts />
				</div>
			</main>
			<Footer setGames={setGames} curFooterItem={curItemActive} setFooterItem={setItemActive} />
		</>
	);
}

export default App;
