import {
	createFileRoute,
	Link,
	Outlet,
	useRouteContext,
	useRouter,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsGithub, BsLinkedin } from "react-icons/bs";
import { CgInfo } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import Insaf from "#/assets/Insaf.jpg";
import { setTheme } from "#/lib/theme";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	const [cardOpen, setCardOpen] = useState(false);

	const { theme } = useRouteContext({ from: "__root__" });
	const router = useRouter();

	const switchTheme = async () => {
		await setTheme({ data: theme === "dark" ? "light" : "dark" });
		return await router.invalidate();
	};

	useEffect(() => {
		setTimeout(() => setCardOpen(true), 1000);
		setTimeout(() => setCardOpen(true), 3000);
	}, []);

	return (
		<div className="max-w-7xl mx-auto p-3">
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

						<div className="mx-auto w-fit">
							<div
								className={`size-40 rounded-full overflow-hidden mx-auto ${!cardOpen && "max-lg:hidden"}`}
							>
								<img src={Insaf} alt="Muhammad Insaf" />
							</div>

							<h1
								className={`text-xl font-extrabold text-center leading-tight ${!cardOpen && "max-lg:text-sm max-lg:[writing-mode:vertical-rl] max-lg:rotate-180"}`}
							>
								Muhammad Insaf <br />
								<span className="font-semibold text-taupe-600 dark:text-taupe-500">
									ibn Farsan
								</span>
							</h1>

							<p
								className={`w-56 text-sm text-center text-taupe-600 dark:text-taupe-400 ${!cardOpen && "max-lg:hidden"}`}
							>
								Your technical partner for fast, high-quality web applications
								development
							</p>
						</div>

						<div
							className={`flex items-center justify-center gap-3 ${!cardOpen && "max-lg:flex-col"}`}
						>
							<a
								href="http://linkedin.com/in/itsmefminsaf"
								target="_blank"
								rel="noopener noreferrer"
								className={`${cardOpen && "hover:-translate-y-1 hover:rotate-12 duration-300"}`}
							>
								<BsLinkedin size={25} />
							</a>
							<a
								href="http://github.com/fminsaf"
								target="_blank"
								rel="noopener noreferrer"
								className={`${cardOpen && "hover:-translate-y-1 hover:rotate-12 duration-300"}`}
							>
								<BsGithub size={25} />
							</a>
						</div>

						<hr className="w-1/3 mx-auto" />

						<nav className="w-fit mx-auto">
							<ul className="flex flex-col gap-2">
								<li>
									<Link
										to="/"
										className={`rounded-full flex items-center gap-2 px-3 py-1 ${!cardOpen && "max-lg:p-2"}`}
										activeProps={{
											className: "bg-stone-200 dark:bg-stone-800",
										}}
										onClick={() => setCardOpen(false)}
									>
										<CgInfo size={20} />
										<span className={`w-48 ${!cardOpen && "max-lg:hidden"}`}>
											Who am I ?
										</span>
									</Link>
								</li>
							</ul>
						</nav>
					</header>

					<footer className="flex items-center justify-center gap-3 py-3 text-xs font-semibold bg-stone-200 dark:bg-stone-800 text-taupe-600 dark:text-taupe-400">
						<span className={`${!cardOpen && "max-lg:hidden"}`}>
							© Muhammad Insaf
						</span>
						<button
							type="button"
							onClick={switchTheme}
							className="cursor-pointer"
						>
							{theme === "dark" ? <FaMoon size={16} /> : <FaSun size={16} />}
						</button>
					</footer>
				</div>
			</div>

			<main className="ml-16 lg:ml-72 p-3">
				<Outlet />
			</main>
		</div>
	);
}
