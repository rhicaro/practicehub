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
						<a href="#">Program 2:</a>
					</ul>
			</main>
		</div>
	);
}
