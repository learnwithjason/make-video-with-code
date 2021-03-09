import {Composition} from 'remotion';
import { BouncingBoop } from './bouncing-boop';
import {SpinningBoop} from './spinning-boop';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="SpinningBoop"
				component={SpinningBoop}
				durationInFrames={120}
				fps={30}
				// 720p
				height={720}
				width={1280}
			/>
			<Composition
				id="BouncingBoop"
				component={BouncingBoop}
				durationInFrames={120}
				fps={30}
				// 720p
				height={720}
				width={1280}
			/>
		</>
	);
};
