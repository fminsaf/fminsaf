import { Link, linkOptions } from "@tanstack/react-router";
import type { Dispatch } from "react";
import { CgInfo } from "react-icons/cg";
import { FaHandshake } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const navLinkList = linkOptions([
	{ to: "/", text: "Who am I ?", Icon: CgInfo },
	{ to: "/projects", text: "My Projects", Icon: GoProject },
	{ to: "/hire-me", text: "Hire me", Icon: FaHandshake },
]);

const NavLinks = ({
	cardOpen,
	setCardOpen,
}: {
	cardOpen: boolean;
	setCardOpen: Dispatch<boolean>;
}) => (
	<nav className="w-fit mx-auto">
		<ul className="flex flex-col gap-2">
			{navLinkList.map(({ to, text, Icon }) => (
				<li key={to}>
					<Link
						to={to}
						className={`rounded-full transition-colors duration-300 flex items-center gap-2 px-3 py-1 ${!cardOpen && "max-lg:p-2"}`}
						activeProps={{
							className: "bg-stone-200 dark:bg-stone-800",
						}}
						inactiveProps={{
							className: "hover:bg-stone-200/50 hover:dark:bg-stone-800/50",
						}}
						onClick={() => setCardOpen(false)}
					>
						<Icon size={20} />
						<span className={`w-48 ${!cardOpen && "max-lg:hidden"}`}>
							{text}
						</span>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default NavLinks;
