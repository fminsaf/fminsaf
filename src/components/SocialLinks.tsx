import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialLinkList = [
	{ Icon: BsLinkedin, href: "http://linkedin.com/in/itsmefminsaf" },
	{ Icon: BsGithub, href: "http://github.com/fminsaf" },
];

const SocialLinks = ({ cardOpen }: { cardOpen: boolean }) => (
	<ul
		className={`flex items-center justify-center gap-3 ${!cardOpen && "max-lg:flex-col"}`}
	>
		{socialLinkList.map(({ Icon, href }) => (
			<li
				key={href}
				className="lg:hover:-translate-y-1 lg:hover:rotate-12 duration-300"
			>
				<a
					href="http://linkedin.com/in/itsmefminsaf"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon size={25} />
				</a>
			</li>
		))}
	</ul>
);

export default SocialLinks;
