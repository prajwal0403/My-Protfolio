import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, location, buttons,call }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<p>{location}</p>
					<p>{call}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer" className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-0 px-0">
			<div className="container text-muted">
				<small>All RIghts Reserved..
				</small>
			</div>
		</footer>
	);
}