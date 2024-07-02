import { store, persistodStore } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client'
import App from './components/app'
import '../styles.css'; // Import your styles

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<PersistGate persistor={persistodStore}>
			<App />
		</PersistGate>
	</Provider>
)
