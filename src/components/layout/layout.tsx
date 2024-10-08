import React from "react";
import { Outlet } from "react-router-dom";
import { CardProduct } from "../cards";

const Layout: React.FC = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="klz-layout">
			<CardProduct/>
			<main>{children}</main>
			<Outlet />
		</div>
	);
}

export default Layout