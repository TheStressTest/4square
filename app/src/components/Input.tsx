import { IonInput, IonItem } from '@ionic/react';
import { Controller, Control } from 'react-hook-form';

interface InputProps {
	name: string;
	control: any;
	placeholder: string;
	required?: boolean;
}

export function Input({ name, control, placeholder, required }: InputProps) {
	return (
		<IonItem>
			<Controller
				render={({ field: { onChange } }) => (
					<IonInput
						placeholder={placeholder}
						onIonChange={onChange}
					/>
				)}
				name={name}
				rules={{ required: required }}
				control={control}
			></Controller>
		</IonItem>
	);
}
