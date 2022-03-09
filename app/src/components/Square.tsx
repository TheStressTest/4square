import { IonCol, IonGrid, IonRow } from '@ionic/react';

export function Square() {
	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<div>1 of 4</div>
					<div>2 of 4</div>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<div>3 of 4</div>
					<div>4 of 4</div>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
}
