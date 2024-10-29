import './App.sass';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import Games from './components/games/Games';
import { useState } from 'react';
import Registration from './components/registration/Registration';
import GameAccounts from './components/gameAccounts/GameAccounts';
import Deleted from './components/deleted/Deleted';
import NotDone from './components/notDone/NotDone';
import Popup from './components/popup/Popup';
import AccountImage from '/src/assets/image/profile/avatar3.webp';
import Tasks from './components/tasks/Tasks';
import { TonConnectButton } from '@tonconnect/ui-react';
import Balance from './components/balance/Balance';
import Notifications from './components/notifications/Notifications';

function App() {
	const [curPage, setPage] = useState('registration');
	const [curItemActive, setItemActive] = useState('registration');
	const [curPopup, setPopup] = useState(false);

	return (
		<>
			{/* Popup */}
			{curPopup === true && <Popup setPopup={setPopup} />}

			{/* Header */}
			<Header setHeaderPage={setPage} curHeaderItem={curItemActive} setHeaderItem={setItemActive} />

			<main className='section main'>
				<div className='container main__container'>
					{/* Balance set in Header component */}
					{curPage === 'balance' && <Balance />}

					{/* Notifications */}
					{curPage === 'notifications' && <Notifications />}

					{/* Profile set in Header component*/}
					{curPage === 'profile' && <Profile setPopup={setPopup} />}

					{/* Games set in Footer Component */}
					{curPage === 'game-accounts' && <GameAccounts />}

					{/* Registration set in Footer Component */}
					{curPage === 'registration' && <Registration />}

					{/* Not Done set in Footer Component */}
					{curPage === 'not-done' && <NotDone />}

					{/* Tasks set in Footer Component  */}
					{curPage === 'tasks' && <Tasks />}

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
