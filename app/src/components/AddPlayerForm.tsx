import {
	IonButton,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonInput,
	IonItem,
	IonImg,
	IonTextarea,
	IonItemDivider,
} from '@ionic/react';
import { PlayerProps } from './Player';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Controller, useForm } from 'react-hook-form';
import React from 'react';

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
	const { control, handleSubmit } = useForm({
		defaultValues: {
			description: 'No Description',
			firstName: null,
			lastName: null,
		},
	});

	const onSubmit = (data: any) => {
		setPlayers([
			...players,
			// {
			// 	firstName: String(data.firstName),
			// 	lastName: String(data.lastName),
			// 	score: 2,
			// 	description: String(data.description),
			// } as PlayerProps,
			data,
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
					<Controller
						render={({ field: { onChange } }) => (
							<IonInput
								placeholder="First Name"
								onIonChange={onChange}
							/>
						)}
						name="firstName"
						rules={{ required: true }}
						control={control}
					></Controller>
				</IonItem>

				<IonItem>
					<Controller
						render={({ field: { onChange } }) => (
							<IonInput
								placeholder="Last Name"
								onIonChange={onChange}
							/>
						)}
						name="lastName"
						rules={{ required: true }}
						control={control}
					/>
				</IonItem>
				<IonItemDivider />

				<IonItem>
					<Controller
						render={({ field: { onChange } }) => (
							<IonTextarea
								placeholder="Type description here..."
								onIonChange={onChange}
							/>
						)}
						name="description"
						control={control}
					/>
				</IonItem>

				<IonButton expand="block" type="submit">
					Submit
				</IonButton>
			</form>
		</>
	);
}
