import { Easing, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion"
import Boop from "./boop.png";
import './styles.css';

export const SpinningBoop: React.FC = () => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

  const percentComplete = frame / config.durationInFrames;

  const leftPosition = interpolate(frame, [0, config.durationInFrames], [-0.2, 1.2 ]);

  return (
	<div className="video-container" style={{ '--percentComplete': percentComplete }}>
		{/* <h2
			className="title" style={{
			}}
		>waddup chat?
		</h2> */}
		<Img
			className="spinning-boop"
			style={{
        position: 'absolute',
        left: `${leftPosition * 100}%`,
        transform: `rotate(${percentComplete}turn)`
			}}
			src={Boop} alt="boop" />
	</div>
  )
}
