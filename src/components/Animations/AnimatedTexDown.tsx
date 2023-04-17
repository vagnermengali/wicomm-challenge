import { motion } from "framer-motion";

import { AnimatedProps } from "@/interfaces/AnimatedProps/AnimatedProps";

const AnimatedTextDown = ({ children, hover }: AnimatedProps) => {
	const item = {
		hidden: {
			y: "200%",
			transition: {
				ease: [0.455, 0.03, 0.515, 0.955],
				duration: 0.3
			}
		},
		visible: {
			y: 0,
			transition: {
				ease: [0.455, 0.03, 0.515, 0.955],
				duration: .3
			}
		}
	};

	const container = {
		visible: {
			transition: {
				staggerChildren: 0.025
			}
		}
	};

	return (
		<>
			<motion.div
				initial="hidden"
				animate={hover? "visible" : "hidden"}
				variants={container}
			>
				<div
				>
					<span
						style={{
							overflow: "hidden",
							display: "inline-block",
							width: "100%"
						}}
					>
						<motion.span
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: "100%"
							}}
							variants={item}
						>
							{children}
						</motion.span>
					</span>
				</div>
			</motion.div>
		</>
	);
};

export default AnimatedTextDown;