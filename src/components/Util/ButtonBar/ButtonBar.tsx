import React, { FC } from "react";
import Button from "../Button/Button";

const ButtonBar: FC = () => {
	const buttons = [
		<Button style="btn-primary-solid" size="btn-lrg">
			photocopy
		</Button>,
		<Button style="btn-primary-outline">pour</Button>,
		<Button style="btn-secondary-solid">railcar</Button>,
		<Button style="btn-secondary-outline">mobile</Button>,
		<Button style="btn-warning-solid">sheep</Button>,
		<Button style="btn-warning-outline">cooperative</Button>,
		<Button style="btn-danger-solid">slice</Button>,
		<Button style="btn-danger-outline">prison</Button>,
		<Button style="btn-success-solid">quit</Button>,
		<Button style="btn-success-outline">ghostwriter</Button>,
		<Button style="btn-white-solid">kidney</Button>,
		<Button style="btn-white-outline">Hello</Button>,
		<Button style="btn-dark-solid">radiation</Button>,
		<Button style="btn-dark-outline">refrigerator</Button>,
		<Button style="">bad</Button>,
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
