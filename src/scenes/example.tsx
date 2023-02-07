import {Circle, Rect, Text} from "@motion-canvas/2d/lib/components";
import {makeScene2D} from "@motion-canvas/2d/lib/scenes";
import {Filter} from "@motion-canvas/2d/lib/partials";
import {createRef} from "@motion-canvas/core/lib/utils";

export default makeScene2D(function* (view) {

	const rec = createRef<Rect>();
	let value;

	view.add(
		<>
			<Rect
				fill="#ddd"
				width={100}
				height={100}
				ref={rec}
			/>
			<Text>{"Ich bin ${value} pixel groß."}</Text>
		</>
	);

});