import React from 'react';
export default function Header(props) {
	const { countCartItems } = props;
	return (
		<header className="row block center">
			<div>
				<a href="#/">
					<h1>Small Shopping Cart</h1>
				</a>
			</div>
			<div>
				<a href="#">
					Cart
					{countCartItems ? <button className="badge">{countCartItems}</button> : ''}
				</a>
				{''}
				<a href="#">SignIn</a>
			</div>
		</header>
	);
}
