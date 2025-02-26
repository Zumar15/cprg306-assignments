import Link from "next/link";

export default function Page() {
  return (
    <div className = "grid">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className = "p-4 rounded-lg m-4 bg-orange-300 w-48" href="/week-2">Week 2</Link>
      <Link className = "p-4 rounded-lg m-4 bg-red-300 w-48" href="/week-3"> Week 3</Link>
      <Link className = "p-4 rounded-lg m-4 bg-purple-300 w-48" href="/week-4"> Week 4</Link>
      <Link className = "p-4 rounded-lg m-4 bg-blue-300 w-48" href="/week-5"> Week 5</Link>
    </div>
  );
}