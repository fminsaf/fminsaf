import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
	const [cardOpen, setCardOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => setCardOpen(true), 1000);
		setTimeout(() => setCardOpen(true), 3000);
	}, []);

	return (
		<div
			className={`${!cardOpen && "max-lg:w-16"} w-72 duration-300 fixed top-1/2 -translate-y-1/2 overflow-hidden`}
		>
			<div className="rounded-xl bg-linear-150 from-stone-200 dark:from-stone-900 backdrop-blur-2xl shadow-lg border-t border-zinc-100 dark:border-zinc-800 overflow-hidden">
				<header className="space-y-3 p-2 lg:pt-5">
					<div
						className={`lg:hidden w-fit ${cardOpen ? "ml-auto" : "mx-auto"}`}
					>
						<button
							type="button"
							className="p-3 rounded-full bg-stone-100 dark:bg-stone-800 cursor-pointer"
							onClick={() => setCardOpen(!cardOpen)}
						>
							<BsArrowLeft
								size={25}
								className={`${!cardOpen && "-scale-100"}`}
							/>
						</button>
					</div>
					<Profile cardOpen={cardOpen} />

					<SocialLinks cardOpen={cardOpen} />

					<hr className="w-1/3 mx-auto" />

					<NavLinks cardOpen={cardOpen} setCardOpen={setCardOpen} />
				</header>

				<Footer cardOpen={cardOpen} />
			</div>
		</div>
	);
};

export default Sidebar;
