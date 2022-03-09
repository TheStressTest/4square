import {
	IonButton,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonInput,
	IonLabel,
	IonItem,
	IonImg,
	IonTextarea,
	IonItemDivider,
} from '@ionic/react';
import { PlayerProps } from './Player';
import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from 'react';

export interface AddPlayerFormProps {
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setPlayers: React.Dispatch<React.SetStateAction<PlayerProps[]>>;
	players: PlayerProps[];
}

const takePicture = async () => {
	const image = await Camera.getPhoto({
		quality: 90,
		allowEditing: true,
		resultType: CameraResultType.Uri,
	});

	var imageUrl = image.webPath;

	return imageUrl;
};

export function AddPlayerForm({
	setModalOpen,
	setPlayers,
	players,
}: AddPlayerFormProps) {
	let [firstName, setFirstName] = useState<string>();
	let [lastName, setLastName] = useState<string>();
	let [description, setDescription] = useState<string>();

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add Player</IonTitle>
				</IonToolbar>
			</IonHeader>
			<form>
				<IonImg
					src={
						process.env.PUBLIC_URL +
						'/assets/chooseProfilePicture.png'
					}
				/>
				<IonItemDivider />

				<IonItem>
					<IonInput
						value={firstName}
						placeholder="First Name"
						onIonChange={(e) => setFirstName(e.detail.value!)}
						required
					></IonInput>
				</IonItem>

				<IonItem>
					<IonInput
						required={true}
						placeholder="Last Name"
						onIonChange={(e) => setLastName(e.detail.value!)}
					></IonInput>
				</IonItem>
				<IonItemDivider></IonItemDivider>

				<IonItem>
					<IonTextarea
						placeholder="Type description here..."
						onIonChange={(e) => setDescription(e.detail.value!)}
					></IonTextarea>
				</IonItem>

				<IonButton
					expand="block"
					type="submit"
					onClick={() => {
						setModalOpen(false);
						setPlayers([
							...players,
							{
								name:
									(firstName || 'First') +
									' ' +
									(lastName || 'Last'),
								score: 2,
								description: description || 'No Description',
							},
						]);
					}}
				>
					Submit
				</IonButton>
			</form>
		</>
	);
}
