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
import { useForm } from 'react-hook-form';

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		setPlayers([
			...players,
			{
				name: data.firstName + ' ' + data.lastName,
				score: 2,
				description: data.description || 'No Description',
			},
		]);
		setModalOpen(false);
	};

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Add Player</IonTitle>
				</IonToolbar>
			</IonHeader>
			<form onSubmit={handleSubmit(onSubmit)}>
				<IonImg
					src={
						process.env.PUBLIC_URL +
						'/assets/chooseProfilePicture.png'
					}
				/>
				<IonItemDivider />

				<IonItem>
					<IonInput
						{...register('firstName', {
							required: true,
							pattern: /[a-zA-Z]/,
						})}
						placeholder="First Name"
					></IonInput>
				</IonItem>

				<IonItem>
					<IonInput
						{...register('lastName', { required: true })}
						placeholder="Last Name"
					></IonInput>
				</IonItem>
				<IonItemDivider />

				<IonItem>
					<IonTextarea
						{...register('description')}
						placeholder="Type description here..."
					></IonTextarea>
				</IonItem>

				<IonButton expand="block" type="submit">
					Submit
				</IonButton>
			</form>
		</>
	);
}
