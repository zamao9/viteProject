import './transactionHistory.sass';
import { ArrowLeftIcon, ArrowRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from '../../../constants/svgImages';
import TransactionHistoryItem from '../transactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = () => {
	const transactionHistoryData = [
		{
			key: 1,
			type: 'deposit',
			date: '01.12.24',
			amount: 20,
		},
		{
			key: 2,
			type: 'deposit',
			date: '04.12.24',
			amount: 100,
		},
		{
			key: 3,
			type: 'withdraw',
			date: '01.12.24',
			amount: 150,
		},
		{
			key: 4,
			type: 'deposit',
			date: '01.12.24',
			amount: 2000000000000000,
		},
	];

	return (
		<div className='transaction-history'>
			<div className='transaction-history__content'>
				<div className='transaction-history__header'>
					<span className='title title--18 transaction-history__element'>Type</span>
					<span className='title title--18 transaction-history__element'>Date</span>
					<span className='title title--18 transaction-history__element'>Amount</span>
				</div>

				<ul className='transaction-history__list'>
					{transactionHistoryData.map((element) => (
						<TransactionHistoryItem key={element.key} type={element.type} date={element.date} amount={element.amount} />
					))}
				</ul>

				<div className='transaction-history__footer'>
					<button className='button transaction-history__button button--disabled'>
						<DoubleArrowLeftIcon />
					</button>
					<button className='button transaction-history__button button--disabled'>
						<ArrowLeftIcon />
					</button>
					<div className='transaction-history__counter'>
						<span className='title title--16'>1 / 30</span>
					</div>
					<button className='button transaction-history__button'>
						<ArrowRightIcon />
					</button>
					<button className='button transaction-history__button'>
						<DoubleArrowRightIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TransactionHistory;
