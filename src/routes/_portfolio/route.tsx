import {
	createFileRoute,
	Outlet,
	useRouteContext,
	useRouter,
} from "@tanstack/react-router";
import { FaMoon, FaSun } from "react-icons/fa";
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
				<div className=" space-y-5 p-3 rounded-xl bg-stone-800 text-taupe-100 dark:bg-stone-300 dark:text-taupe-900">
					<header>
						<h1 className="text-2xl font-extrabold text-center">
							Muhammad Insaf <br />
							<span className="text-xl font-bold text-taupe-400 dark:text-taupe-600">
								ibn Farsan
							</span>
						</h1>
					</header>

					<footer className="flex items-center justify-center gap-3 text-xs font-semibold text-taupe-400 dark:text-taupe-600">
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
