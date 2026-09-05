import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/hire-me")({
	component: RouteComponent,
});

function RouteComponent() {
	return <h2>Hire me</h2>;
}
