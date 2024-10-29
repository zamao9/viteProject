import React, { useEffect, useState } from 'react';
import { useTonWallet, useTonConnectModal, useTonConnectUI } from '@tonconnect/ui-react';
import './balance.sass';
import BalanceBalance from '../balance/balanceBalance/BalanceBalance';
import TransactionHistory from './transactionHistory/TransactionHistory';
import { motion } from 'framer-motion';

const Balance = () => {
	const wallet = null;
	const [tonConnectUI, setOptions] = useTonConnectUI();
	const [curPage, setPage] = useState('balance');
	const [curPageItem, setPageItem] = useState('balance');

	return (
		<section className='section balance'>
			<div className='container balance__container'>
				<h2 className='title title--22 mb--22'>Balance</h2>
				<div className='balance__connect'>
					{wallet === null ? (
						<div className="flex items-center justify-center">
							<motion.button
								className="w-auto items-center justify-center px-4 py-1 transform rounded-full font-semibold text-2xl bg-gradient-to-r from-[#0099ff] to-[#00ccff] text-white active:text-black active:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:from-[#00ccff] hover:to-[#0099ff] hover:shadow-lg"
								style={{
									boxShadow: '2px 3px 1px #5d5855',
									border: '1px solid black',
								}}
								onClick={() => tonConnectUI.openModal()}
							>
								<motion.span
									className="text-2xl text-white"
									animate={{
										opacity: [0.8, 1, 0.8],
									}}
									transition={{
										duration: 1.6,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								>
									Connect Wallet
								</motion.span>
							</motion.button>
						</div>) : (
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
					)}

					{/* Balance Balance */}
					{curPage === 'balance' && <BalanceBalance /> && wallet !== null && <BalanceBalance />}

					{/* Transaction History */}
					{curPage === 'transaction-history' && <TransactionHistory /> && wallet !== null && <TransactionHistory />}
				</div>
			</div>
		</section>
	);
};

export default Balance;
