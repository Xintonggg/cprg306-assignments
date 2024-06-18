import Link from "next/link";

import NewItem from './new-item';

export default function Week4Page() {
  return (
    <main className='bg-yellow-100 '>
        <h1 className="text-yellow-300 text-3xl font-bold mb-4">Week 4 Assignment</h1>
        <NewItem />
        <p>
            <Link href={"../"}>back</Link>
        </p>

    </main>
  );
}

