import Insaf from "#/assets/Insaf.jpg";

const Profile = ({ cardOpen }: { cardOpen: boolean }) => (
	<div className="mx-auto w-fit">
		<div
			className={`size-40 rounded-full overflow-hidden mx-auto ${!cardOpen && "max-lg:hidden"}`}
		>
			<img src={Insaf} alt="Muhammad Insaf" />
		</div>

		<h1
			className={`text-xl font-extrabold text-center leading-tight ${!cardOpen && "max-lg:text-sm max-lg:[writing-mode:vertical-rl] max-lg:rotate-180"}`}
		>
			Muhammad Insaf <br />
			<span className="font-semibold text-taupe-600 dark:text-taupe-500">
				ibn Farsan
			</span>
		</h1>

		<p
			className={`w-56 text-sm text-center text-taupe-600 dark:text-taupe-400 ${!cardOpen && "max-lg:hidden"}`}
		>
			Your technical partner for fast, high-quality web applications development
		</p>
	</div>
);

export default Profile;
