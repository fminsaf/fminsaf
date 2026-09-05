import { createFileRoute, Link } from "@tanstack/react-router";
import { BiFolderOpen, BiRocket } from "react-icons/bi";
import TechStack from "#/components/TechStack";

export const Route = createFileRoute("/_portfolio/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className="max-w-xl mx-auto space-y-3">
				<h2 className="text-center font-extrabold">
					Peace be upon you - <span>السلام عليكم</span>
				</h2>

				<h2 className="text-2xl ml-5 font-extrabold">
					Welcome to my portfolio
				</h2>

				<hr className="w-1/2 mx-auto" />

				<p className="text-taupe-700 dark:text-taupe-400">
					I am a <span className="font-bold">full-stack web developer</span>{" "}
					passionate about engineering fast and scalable applications. I bridge
					the gap between clean backend code and pixel-perfect design to create
					reliable digital products. My goal is always to deliver web
					applications that provide real value to users and clients alike.
				</p>
			</div>

			<TechStack />

			<div className="space-y-3 max-w-xl mx-auto bg-linear-150 from-cyan-400/10 dark:via-stone-900/10 via-stone-300/10 to-emerald-200/10 p-10 rounded-xl shadow-lg border-t border-zinc-50 dark:border-zinc-800">
				<h3 className="text-2xl font-bold">
					Interested in hiring or working with me for a project?
				</h3>

				<p className="text-sm text-taupe-700 dark:text-taupe-300 leading-relaxed">
					Whether you have a job opportunity, a freelance project, or just want
					to connect, feel free to reach out. Let's build something great
					together.
				</p>

				<div className="flex flex-wrap gap-3">
					<Link
						to="/hire-me"
						className="flex items-center justify-center gap-3 grow px-4 py-2 font-bold text-center rounded-xl bg-stone-800 dark:bg-stone-200 text-taupe-200 dark:text-taupe-800 hover:bg-stone-600 dark:hover:bg-stone-50 duration-300"
					>
						<BiRocket size={20} />
						Let's work together
					</Link>
					<Link
						to="/projects"
						className="flex items-center justify-center gap-3 grow px-4 py-2 font-bold text-center rounded-xl bg-stone-100 dark:bg-stone-800 text-taupe-900 dark:text-taupe-100 hover:bg-stone-200 dark:hover:bg-stone-900 duration-300"
					>
						<BiFolderOpen size={20} />
						View my projects
					</Link>
				</div>
			</div>
		</>
	);
}
