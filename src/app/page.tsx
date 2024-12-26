import Link from "next/link";
export default function Home() {
	return (
		<div>
			<main>
				<h1>Practice Hub</h1>
					<ul>
						<Link href="/pages/problem1">
							Problem 1: Placeholder
						</Link>
						<Link href="/pages/problem2">
							Problem 1: Placeholder
						</Link>					
					</ul>
			</main>
		</div>
	);
}
