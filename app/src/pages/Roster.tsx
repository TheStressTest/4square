import {
	IonButton,
	IonContent,
	IonFooter,
	IonHeader,
	IonItem,
	IonList,
	IonModal,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import './Roster.css';
import '../components/AddPlayerForm';
import { AddPlayerForm } from '../components/AddPlayerForm';
import { Player, PlayerProps } from '../components/Player';

interface Props {
	router?: HTMLIonRouterOutletElement;
}

const Roster: React.FC<Props> = ({ router }) => {
	let [modalOpen, setModalOpen] = useState(false);
	let [players, setPlayers] = useState<PlayerProps[]>([]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Roster</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonList>
					{players.map((player) => (
						<Player {...player} />
					))}
				</IonList>
				<IonModal
					isOpen={modalOpen}
					swipeToClose={true}
					mode="ios"
					presentingElement={router || undefined}
					onIonModalDidDismiss={() => {
						setModalOpen(false);
					}}
				>
					<AddPlayerForm
						setModalOpen={setModalOpen}
						setPlayers={setPlayers}
						players={players}
					/>
				</IonModal>
				<IonFooter collapse="fade">
					<IonToolbar>
						<IonButton
							onClick={() => {
								setModalOpen(true);
							}}
							expand="block"
						>
							Add Player
						</IonButton>
					</IonToolbar>
				</IonFooter>
			</IonContent>
		</IonPage>
	);
};

export default Roster;
