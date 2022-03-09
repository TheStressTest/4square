import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, gridOutline, settingsOutline } from 'ionicons/icons';
import Game from './pages/Game';
import Roster from './pages/Roster';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path="/game">
						<Game />
					</Route>
					<Route exact path="/roster">
						<Roster />
					</Route>
					<Route exact path="/settings">
						<Settings />
					</Route>
					<Route exact path="/">
						<Redirect to="/game" />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton tab="game" href="/game">
						<IonIcon icon={gridOutline} />
						<IonLabel>Game</IonLabel>
					</IonTabButton>
					<IonTabButton tab="roster" href="/roster">
						<IonIcon icon={personOutline} />
						<IonLabel>Roster</IonLabel>
					</IonTabButton>
					<IonTabButton tab="settings" href="/settings">
						<IonIcon icon={settingsOutline} />
						<IonLabel>Settings</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
