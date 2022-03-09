import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

export interface PlayerProps {
	name: string;
	description?: string;
	score: number;
}

export function Player({ name, description, score }: PlayerProps) {
	return (
		<IonItem>
			<IonAvatar slot="start">
				<img src="https://yt3.ggpht.com/ytc/AKedOLTCgtF1-8ytsg5o2hV8-8MqlfpRGaGVPZptv1ySwA=s88-c-k-c0x00ffffff-no-rj" />
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
	);
}
