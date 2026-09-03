import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_portfolio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <h1>Welcome to my portfolio</h1>;
}
