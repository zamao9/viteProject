import React, { useEffect, useState } from 'react';
import { useTonWallet, useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react';
import './balance.sass';
import BalanceBalance from '../balance/balanceBalance/BalanceBalance';
import TransactionHistory from './transactionHistory/TransactionHistory';
import { motion } from 'framer-motion';

const Balance = () => {
	const wallet = null;
	const [tonConnectUI, setOptions] = useTonConnectUI();
	const [curPage, setPage] = useState('balance'); // отображение компонента
	const [curPageItem, setPageItem] = useState('balance'); // активный таб

	return (
		<section className='section balance'>
			<div className='container balance__container'>
				<h2 className='title title--22 mb--22'>Balance</h2>
				{/* Tabs */}
				<ul className={`tabs ${wallet === null ? 'pointer-none' : ''}`}>
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
						className={`tabs__item ${curPageItem === 'transaction-history' ? 'active' : ''}`}
						onClick={() => {
							setPage('transaction-history');
							setPageItem('transaction-history');
						}}
					>
						<div className='tab'>
							<span>Transaction history</span>
						</div>
					</li>
				</ul>

				{/* Button */}
				{wallet === null && (
					<>
						<motion.button
							className='button connect-button'
							onClick={() => tonConnectUI.openModal()}
						>
							<motion.span
								transition={{
									duration: 1.6,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							>
								Connect Wallet
							</motion.span>
						</motion.button>
						<p className='text text--14 lh--140 connect-text'>
							Connect your wallet to access your balance and transaction history.
						</p>
					</>
				)}

				{/* Balance Balance */}
				{curPage === 'balance' && <BalanceBalance /> && wallet !== null && <BalanceBalance />}

				{/* Transaction History */}
				{curPage === 'transaction-history' && <TransactionHistory /> && wallet !== null && (
					<TransactionHistory />
				)}
			</div>
		</section>
	);
};

export default Balance;
