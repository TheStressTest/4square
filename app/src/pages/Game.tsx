import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Square } from '../components/Square';
import './Game.css';

const Game: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Game</IonTitle>
				</IonToolbar>
			</IonHeader>
			<Square />
		</IonPage>
	);
};

export default Game;
