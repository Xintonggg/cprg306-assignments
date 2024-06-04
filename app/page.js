import Link from "next/link";


export default function Home(){
  return(
    <main className="bg-yellow-100 ">
      <h1 className="text-pink-300 text-3xl text-center font-bold">CPRG306: Web Development 2 - Assignments</h1>
      <li className="text-yellow-300 text-xl font-bold">
        <Link href={"./week-2/"}>Week 2 Assignment</Link>
      </li>
      <li className="text-yellow-300 text-xl font-bold">
        <Link href={"./week-3/"}>Week 3 Assignment</Link>
      </li>
      <li className="text-yellow-300 text-xl font-bold">
        <Link href={"./week-4/"}>Week 4 Assignment</Link>
      </li>

      
    </main>
  )
}