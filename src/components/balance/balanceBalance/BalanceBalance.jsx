import './balanceBalance.sass';
import { SwitchIcon } from '../../../constants/svgImages';

const BalanceBalance = () => {
	return (
		<form action='' className='balance-balance'>
			<div className='balance-balance__balance'>
				<span className='title title--18'>26,231.002</span>
				<span className='title title--14 balance-balance__subtitle'>AFR$</span>
			</div>

			{/* Balance Switch */}
			<ul className='switch'>
				<li className='switch__item'>
					<span className='headline'>Token</span>
					<div className='switch__token'>
						<div className='switch__header'>
							<span className='title title--14 switch__subtitle'>AFR$</span>
						</div>
						<input
							id='ton'
							type='number'
							className='title title--16 switch__body'
							placeholder='1'
						/>
					</div>
				</li>

				<div className='switch__icon'>
					<SwitchIcon />
				</div>

				<li className='switch__item'>
					<span className='headline'>Network</span>
					<div className='switch__token'>
						<div className='switch__header'>
							<span className='title title--14 switch__subtitle'>TON</span>
						</div>
						<input
							id='ton'
							type='number'
							className='title title--16 switch__body'
							placeholder='0.1'
						/>
					</div>
				</li>
			</ul>

			<div className='switch__buttons'>
				<button className='button'>Deposit</button>
				<button className='button'>Withdraw</button>
			</div>
		</form>
	);
};

export default BalanceBalance;
