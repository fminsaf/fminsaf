import { useRouteContext, useRouter } from "@tanstack/react-router";
import { FaMoon, FaSun } from "react-icons/fa";
import { setTheme } from "#/lib/theme";

const Footer = ({ cardOpen }: { cardOpen: boolean }) => {
	const { theme } = useRouteContext({ from: "__root__" });
	const router = useRouter();

	const switchTheme = async () => {
		await setTheme({ data: theme === "dark" ? "light" : "dark" });
		return await router.invalidate();
	};

	return (
		<footer className="flex items-center justify-center gap-3 py-3 text-xs font-semibold bg-stone-200 dark:bg-stone-800 text-taupe-600 dark:text-taupe-400">
			<span className={`${!cardOpen && "max-lg:hidden"}`}>
				© Muhammad Insaf
			</span>
			<button type="button" onClick={switchTheme} className="cursor-pointer">
				{theme === "dark" ? <FaMoon size={16} /> : <FaSun size={16} />}
			</button>
		</footer>
	);
};

export default Footer;
