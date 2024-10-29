import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './reset.scss';
import './normalize.scss';
import './fonts.scss';
import { Provider } from 'react-redux';
import { store } from './store';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<TonConnectUIProvider manifestUrl="http://localhost:5173/tonconnect-manifest.json">
				<App />
			</TonConnectUIProvider >
		</Provider>
	</StrictMode>
);
