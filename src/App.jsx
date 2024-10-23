import './App.sass';
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Profile from './assets/components/profile/Profile';
import Games from './assets/components/games/Games';
import { useState } from 'react';
import Registration from './assets/components/registration/Registration';
import GameAccounts from './assets/components/gameAccounts/GameAccounts';
import Deleted from './assets/components/deleted/Deleted';
import NotDone from './assets/components/notDone/NotDone';
import Popup from './assets/components/popup/Popup';

function App() {
	const [curPage, setPage] = useState(null);
	const [curItemActive, setItemActive] = useState(null);
	const [curPopup, setPopup] = useState(false);

	return (
		<>
			{curPopup === true && <Popup setPopup={setPopup} />}

			<Header setHeaderPage={setPage} curHeaderItem={curItemActive} setHeaderItem={setItemActive} />
			<main className='section main'>
				<div className='container main__container'>
					{/* Profile */}
					{curPage === 'profile' && <Profile setPopup={setPopup} />}
					{/* Games */}
					{curPage === 'game-accounts' && <GameAccounts />}
					{/* Registration */}
					{curPage === 'registration' && <Registration />}
					{/* Not Done */}
					{curPage === 'not-done' && <NotDone />}
					{/* GamesSearch */}
					{/* <Games /> */}
					{/* Deleted */}
					{/* <Deleted /> */}
				</div>
			</main>
			<Footer setFooterPage={setPage} curFooterItem={curItemActive} setFooterItem={setItemActive} />
		</>
	);
}

export default App;
