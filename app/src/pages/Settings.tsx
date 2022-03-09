import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Game.css';

const Game: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	);
};

export default Game;
