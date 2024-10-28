import { formatNumberShort } from '../../../helpers/FormatNumber';

const TransactionHistoryItem = ({ type, date, amount }) => {
	return (
		<li className='transaction-history__item'>
			<span className={`text text--16 text-deposit ${type === 'deposit' ? 'color--yellow' : 'color--green'}`}>
				{type}
			</span>
			<span className='title title--16 transaction-history__title'>{date}</span>
			<span className='title title--16 transaction-history__title'>{formatNumberShort(amount)} TON</span>
		</li>
	);
};
export default TransactionHistoryItem;
