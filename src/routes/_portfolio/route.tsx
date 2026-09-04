import {
	createFileRoute,
	Link,
	Outlet,
	useRouteContext,
	useRouter,
} from "@tanstack/react-router";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CgInfo } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import Insaf from "#/assets/Insaf.jpg";
import { setTheme } from "#/lib/theme";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	const { theme } = useRouteContext({ from: "__root__" });
	const router = useRouter();

	const switchTheme = async () => {
		await setTheme({ data: theme === "dark" ? "light" : "dark" });
		return await router.invalidate();
	};

	return (
		<div className="max-w-7xl mx-auto p-3">
			<div className="w-80 fixed top-1/2 -translate-y-1/2">
				<div className="space-y-5 p-3 rounded-xl bg-linear-150 from-stone-200 dark:from-stone-900 shadow-lg border-t border-zinc-100 dark:border-zinc-800">
					<header className="space-y-3">
						<div className="size-40 rounded-full overflow-hidden mx-auto">
							<img src={Insaf} alt="Muhammad Insaf" />
						</div>
						<h1 className="text-xl font-extrabold text-center leading-tight">
							Muhammad Insaf <br />
							<span className="font-bold text-taupe-600 dark:text-taupe-500">
								ibn Farsan
							</span>
						</h1>
						<p className="text-sm text-center text-taupe-600 dark:text-taupe-400">
							Your technical partner for fast, high-quality web applications
							development
						</p>

						<div className="flex items-center justify-center gap-3">
							<a
								href="http://linkedin.com/in/itsmefminsaf"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:-translate-y-1 hover:rotate-12 duration-300"
							>
								<BsLinkedin size={25} />
							</a>
							<a
								href="http://github.com/fminsaf"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:-translate-y-1 hover:rotate-12 duration-300"
							>
								<BsGithub size={25} />
							</a>
						</div>

						<hr className="w-1/3 mx-auto" />

						<nav className="w-fit mx-auto">
							<ul className="flex flex-col gap-2">
								<li className="w-60">
									<Link
										to="/"
										className="px-3 py-1 rounded-xl flex items-center gap-2"
										activeProps={{
											className: "bg-stone-200 dark:bg-stone-800",
										}}
									>
										<CgInfo size={20} />
										Who am I ?
									</Link>
								</li>
							</ul>
						</nav>
					</header>

					<footer className="flex items-center justify-center gap-3 text-xs font-semibold text-taupe-600 dark:text-taupe-400">
						<span>© Muhammad Insaf</span>
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

			<main className="ml-80 p-3">
				<Outlet />
			</main>
		</div>
	);
}
