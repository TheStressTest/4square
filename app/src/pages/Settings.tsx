import {
	IonButton,
	IonHeader,
	IonItemDivider,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './Game.css';
import { Input } from '../components/Input';
import { useForm } from 'react-hook-form';
const Game: React.FC = () => {
	let { control, handleSubmit } = useForm();

	const onSubmit = (data: any) => {};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					control={control}
					required={true}
					name="serverIP"
					placeholder="Server Address"
				/>
				<Input
					control={control}
					required={true}
					name="serverPort"
					placeholder="Server Port"
				/>
				<Input
					control={control}
					required={true}
					name="token"
					placeholder="Token Auth"
				/>

				<IonButton type="submit">Save</IonButton>
			</form>
		</IonPage>
	);
};

export default Game;
