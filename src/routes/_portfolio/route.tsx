import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "#/components/Sidebar";

export const Route = createFileRoute("/_portfolio")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-7xl mx-auto p-3">
			<Sidebar />

			<main className="ml-16 lg:ml-72 px-3 py-10 space-y-5">
				<Outlet />
			</main>
		</div>
	);
}
