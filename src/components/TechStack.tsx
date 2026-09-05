import {
	SiBetterauth,
	SiBiome,
	SiDocker,
	SiDrizzle,
	SiFigma,
	SiGit,
	SiGithub,
	SiMongodb,
	SiMongoose,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiSocketdotio,
	SiTailwindcss,
	SiTanstack,
	SiTypescript,
	SiVercel,
	SiVite,
} from "react-icons/si";

const techStackList = [
	{
		secTitle: "Front-end",
		stacks: [
			{ name: "React.js", Icon: SiReact },
			{ name: "TanStack", Icon: SiTanstack },
			{ name: "Tailwind CSS", Icon: SiTailwindcss },
			{ name: "Vite.js", Icon: SiVite },
		],
	},
	{
		secTitle: "Back-end",
		stacks: [
			{ name: "Node.js", Icon: SiNodedotjs },
			{ name: "TypeScript", Icon: SiTypescript },
			{ name: "Better-Auth", Icon: SiBetterauth },
			{ name: "Socket.io", Icon: SiSocketdotio },
		],
	},
	{
		secTitle: "Database",
		stacks: [
			{ name: "PostgreSQL", Icon: SiPostgresql },
			{ name: "Drizzle", Icon: SiDrizzle },
			{ name: "MongoDB", Icon: SiMongodb },
			{ name: "Mongoose", Icon: SiMongoose },
		],
	},
	{
		secTitle: "Tools & DevOps",
		stacks: [
			{ name: "Figma", Icon: SiFigma },
			{ name: "Biome", Icon: SiBiome },
			{ name: "Docker", Icon: SiDocker },
			{ name: "Git", Icon: SiGit },
			{ name: "GitHub", Icon: SiGithub },
			{ name: "Vercel", Icon: SiVercel },
		],
	},
];

const TechStack = () => (
	<div className="max-w-3xl mx-auto bg-stone-200/30 dark:bg-stone-800/30 p-5 space-y-3 rounded-xl sm:grid grid-cols-2 gap-3">
		<h3 className="text-xl font-bold sm:col-span-2">I am specialized in ...</h3>
		{techStackList.map(({ secTitle, stacks }) => (
			<div
				key={secTitle}
				className="size-fit bg-stone-200/30 dark:bg-stone-800/30 hover:bg-stone-200/50 hover:dark:bg-stone-800/50 duration-300 rounded-xl overflow-hidden"
			>
				<h4 className="text-xl font-bold text-center bg-stone-200 dark:bg-stone-800 px-3 py-2">
					{secTitle}
				</h4>
				<ul className="p-3 flex flex-wrap gap-1">
					{stacks.map(({ Icon, name }) => (
						<li
							key={name}
							className="text-sm grow flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-stone-200/50 dark:bg-stone-800/50 hover:shadow-lg hover:-translate-y-0.5 duration-300"
						>
							<Icon size={20} /> <span>{name}</span>
						</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

export default TechStack;
