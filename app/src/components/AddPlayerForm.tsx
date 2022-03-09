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
	IonPage,
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
	const { register, control, handleSubmit } = useForm();

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
					{/* <IonInput
						{...register('firstName', {
							required: true,
							pattern: /[a-zA-Z]/,
						})}
						placeholder="First Name"
					></IonInput> */}
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
					{/* <IonInput
						{...register('lastName', { required: true })}
						placeholder="Last Name"
					></IonInput> */}
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
					{/* <IonTextarea
						{...register('description')}
						placeholder="Type description here..."
					></IonTextarea> */}
				</IonItem>

				<IonButton expand="block" type="submit">
					Submit
				</IonButton>
			</form>
		</>
	);
}
