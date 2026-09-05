import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return <h2>My projects</h2>;
}
