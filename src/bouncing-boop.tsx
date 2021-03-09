import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"
import Boop from "./boop.png";
import './styles.css';

export const BouncingBoop: React.FC = () => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

	const scale = spring({
		frame,
		fps: config.fps,
		config: {}
	});

  return (
	<div className="video-container">
		<Img
			className="spinning-boop"
			style={{
        transform: `scale(${scale}) rotate(${scale}turn)`,
			}}
			src={Boop} alt="boop" />
	</div>
  )
}
