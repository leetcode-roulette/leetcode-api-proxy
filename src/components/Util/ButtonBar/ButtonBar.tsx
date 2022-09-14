import React, { FC } from "react";
import Button from "../Button/Button";

const ButtonBar: FC = () => {
	const buttons = [
		<Button>photocopy</Button>,
		<Button>pour</Button>,
		<Button>railcar</Button>,
		<Button>mobile</Button>,
		<Button>sheep</Button>,
		<Button>cooperative</Button>,
		<Button>slice</Button>,
		<Button>prison</Button>,
		<Button>quit</Button>,
		<Button>ghostwriter</Button>,
		<Button>kidney</Button>,
		<Button>Hello</Button>,
		<Button>radiation</Button>,
		<Button>refrigerator</Button>,
		<Button>bad</Button>,
		<Button>network</Button>,
		<Button>casualty</Button>,
		<Button>imposter</Button>,
		<Button>indication</Button>,
	];

	return (
		<>
			<div className="container">
				<div className="col ">
					<div className="d-flex flex-wrap justify-content-center">
						{buttons.map((button, i) => (
							<div key={i} className="mx-2 mb-4">
								{button}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonBar;
