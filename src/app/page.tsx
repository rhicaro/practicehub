import Link from "next/link";
export default function Home() {
	return (
		<div>
			<main>
				<h1>Practice Hub</h1>
				<ul>
					<li>
						<Link href="/pages/problem1">
							Problem 1: Historian Hysteria
						</Link>
					</li>
					<li>
						<Link href="/pages/problem2">
							Problem 2: Historian Hysteria Part 2
						</Link>
					</li>
					<li>
						<Link href="/pages/problem3">
							Problem 3: Red-Nosed Reports
						</Link>
					</li>
					<li>
						<Link href="/pages/problem4">
							Problem 4: Red-Nosed Reports Part 2
						</Link>
					</li>
				</ul>
			</main>
		</div>
	);
}
