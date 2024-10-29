import { formatNumberShort } from 'helpers/FormatNumber';

const TransactionHistoryItem = ({ type, date, amount }) => {
	return (
		<li className='transaction-history__item'>
			<span className={`text text--16 text-deposit ${type === 'deposit' ? 'color--green' : 'color--yellow'}`}>
				{type}
			</span>
			<span className='text text--16 transaction-history__title'>{date}</span>
			<span
				className={`text text--16 transaction-history__title ${type === 'deposit' ? 'color--green' : 'color--yellow'}`}
			>
				{type === 'deposit' ? '+ ' : '- '}
				{formatNumberShort(amount)} AFR
			</span>
		</li>
	);
};
export default TransactionHistoryItem;
