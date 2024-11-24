import { Wheel } from 'react-custom-roulette';
import './shop.sass';
import { useState } from 'react';
import Roulette from './roulette/Roulette';
import RetailShop from './retailShop/RetailShop';

const Shop = () => {
	const [curPage, setPage] = useState('roulette'); // отображение компонента
	const [curPageItem, setPageItem] = useState('roulette'); // активный таб

	const data = [
		{ option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
		{ option: '1', style: { backgroundColor: 'white' } },
		{ option: '2' },
	];

	return (
		<section className='section shop'>
			<div className='container shop__container'>
				<h2 className='title title--22 mb--22'>Shop</h2>

				{/* Tabs */}
				<ul className='tabs'>
					<li
						className={`tabs__item ${curPage === 'retail-shop' ? 'active' : ''}`}
						onClick={() => setPage('retail-shop')}
					>
						<div className='tab'>
							<span>Retail Shop</span>
						</div>
					</li>
					<li
						className={`tabs__item ${curPage === 'roulette' ? 'active' : ''}`}
						onClick={() => setPage('roulette')}
					>
						<div className='tab'>
							<span>Roulette</span>
						</div>
					</li>
				</ul>

				{/* Retail Shop Page */}
				{curPage === 'retail-shop' && <RetailShop />}

				{/* Roulette Page */}
				{curPage === 'roulette' && <Roulette />}
			</div>
		</section>
	);
};

export default Shop;
