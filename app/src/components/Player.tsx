import {
	IonAvatar,
	IonIcon,
	IonItem,
	IonItemOption,
	IonItemOptions,
	IonItemSliding,
	IonLabel,
	IonThumbnail,
} from '@ionic/react';

import { trashOutline } from 'ionicons/icons';

export interface PlayerProps {
	name: string;
	description?: string;
	score: number;
}

export function Player({ name, description, score }: PlayerProps) {
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
						{name} <span style={{ color: 'GrayText' }}>- (</span>
						<span style={{ color: '#29c233' }}>{score}</span>
						<span style={{ color: 'GrayText' }}>)</span>
					</h2>
					<p>{description}</p>
				</IonLabel>
			</IonItem>
		</IonItemSliding>
	);
}
