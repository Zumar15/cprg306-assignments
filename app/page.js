import Link from "next/link";

export default function Page() {
  return (
    <div className = "grid">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link className = "p-4 rounded-lg m-4 bg-orange-300 w-48" href="/week-2">Week 2</Link>
      <Link className = "p-4 rounded-lg m-4 bg-red-300 w-48" href="/week-3"> Week 3</Link>
      <Link className = "p-4 rounded-lg m-4 bg-purple-300 w-48" href="/week-4"> Week 4</Link>
      <Link className = "p-4 rounded-lg m-4 bg-blue-300 w-48" href="/week-5"> Week 5</Link>
      <Link className = "p-4 rounded-lg m-4 bg-green-300 w-48" href="/week-6"> Week 6</Link>
      <Link className = "p-4 rounded-lg m-4 bg-pink-300 w-48" href="/week-7"> Week 7</Link>
      <Link className = "p-4 rounded-lg m-4 bg-teal-300 w-48" href="/week-8"> Week 8</Link>
      <Link className = "p-4 rounded-lg m-4 bg-yellow-300 w-48" href="/week-9"> Week 9</Link>
      <Link className = "p-4 rounded-lg m-4 bg-violet-300 w-48" href="/week-10"> Week 10</Link>
    </div>
  );
}