import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-7xl mx-auto p-3">
			<div className="w-80 fixed top-1/2 -translate-y-1/2">
				<div className=" space-y-5 p-3 bg-stone-800 rounded-xl text-taupe-100">
					<header>
						<h1 className="text-2xl font-extrabold text-center">
							Muhammad Insaf <br />
							<span className="text-xl font-bold text-taupe-400">
								ibn Farsan
							</span>
						</h1>
					</header>

					<footer className="text-center text-xs font-semibold text-taupe-400">
						© Muhammad Insaf
					</footer>
				</div>
			</div>

			<main className="ml-80 p-3">
				<Outlet />
			</main>
		</div>
	);
}
