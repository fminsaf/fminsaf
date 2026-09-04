import { Link, linkOptions } from "@tanstack/react-router";
import type { Dispatch } from "react";
import { CgInfo } from "react-icons/cg";

const navLinkList = linkOptions([
	{ to: "/", text: "Who am I ?", Icon: CgInfo },
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
						to="/"
						className={`rounded-full flex items-center gap-2 px-3 py-1 ${!cardOpen && "max-lg:p-2"}`}
						activeProps={{
							className: "bg-stone-200 dark:bg-stone-800",
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
