import {
	IonAvatar,
	IonIcon,
	IonItem,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
} from '@ionic/react';

import { trashOutline } from 'ionicons/icons';

export interface PlayerProps {
	firstName: string;
	lastName: string;
	description?: string;
	score: number;
}

export function Player({
	firstName,
	lastName,
	description,
	score,
}: PlayerProps) {
	return (
		<IonItemSliding>
			<IonItemOptions side="start">
				<IonItemOption style={{ width: '50px' }} color="danger">
					<IonIcon icon={trashOutline} style={{ fontSize: '30px' }} />
				</IonItemOption>
			</IonItemOptions>

			<IonItem>
				<IonAvatar slot="start">
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/chooseProfilePicture.png'
						}
					/>
				</IonAvatar>
				<IonLabel>
					<h2>
						{firstName} {lastName}
						<span style={{ color: 'GrayText' }}>- (</span>
						<span style={{ color: '#29c233' }}>{score}</span>
						<span style={{ color: 'GrayText' }}>)</span>
					</h2>
					<p>{description}</p>
				</IonLabel>
			</IonItem>
		</IonItemSliding>
	);
}
