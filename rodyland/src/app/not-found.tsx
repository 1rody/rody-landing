import Link from 'next/link'

import '@/src/styles/error.css';
import '@/src/styles/globals.css';

export default function NotFound() {
  return (
    <div className="flex no-select flex-col items-center justify-center h-screen w-full gap-10">
      <div className='flex items-center justify-center text-center  flex-col'>
        <Link href="/" className="duration-200 hover:scale-95 hover:underline">
              back to rody.city/
        </Link>
        <h1 className="error-404 text-9xl font-bold">404</h1>
            <p className="">Sorry :c this page doesn&apos;t exist.</p>
      </div>
    </div>
  )
}