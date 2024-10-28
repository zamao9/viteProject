import React, { useEffect, useState } from 'react';
import { useTonWallet, useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react';
import './balance.sass';
import BalanceBalance from '../balance/balanceBalance/BalanceBalance';
import NotDone from '../notDone/NotDone';

const Balance = () => {
	const wallet = null;
	const [tonConnectUI, setOptions] = useTonConnectUI();
	const [curPage, setPage] = useState('balance');
	const [curPageItem, setPageItem] = useState('balance');

	return (
		<section className='section balance'>
			<div className='container balance__container'>
				<div className='balance__connect'>
					{wallet === null ? (
						<button className={`button `} onClick={() => tonConnectUI.openModal().tonConnectUI.openModal()}>
							Connect Wallet
						</button>
					) : (
						<ul className='tabs'>
							<li
								className={`tabs__item ${curPageItem === 'balance' ? 'active' : ''}`}
								onClick={() => {
									setPage('balance');
									setPageItem('balance');
								}}
							>
								<div className='tab'>
									<span>Balance</span>
								</div>
							</li>
							<li
								className={`tabs__item ${curPageItem === 'not-done' ? 'active' : ''}`}
								onClick={() => {
									setPage('not-done');
									setPageItem('not-done');
								}}
							>
								<div className='tab'>
									<span>Transaction history</span>
								</div>
							</li>
						</ul>
					)}

					{/* Tabs */}

					{/* Balance Balance */}
					{curPage === 'balance' && <BalanceBalance /> && wallet !== null && <BalanceBalance />}
					{curPage === 'not-done' && <NotDone /> && wallet !== null && <NotDone />}
				</div>
			</div>
		</section>
	);
};

export default Balance;
