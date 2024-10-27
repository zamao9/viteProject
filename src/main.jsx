import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './reset.scss';
import './normalize.scss';
import './fonts.scss';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<TonConnectUIProvider manifestUrl="http://localhost:5173/tonconnect-manifest.json">
			<App />
		</TonConnectUIProvider >
	</StrictMode>
);
