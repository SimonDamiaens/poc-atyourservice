/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Organisations() {
  return (
    <main className="flex min-h-screen w-full">
      <aside id="logo-sidebar" className="h-screen w-2/12" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <a href="https://beatvenues.be/" className="flex items-center pl-2.5 mb-5">
            <img src="https://beatvenues.be/wp-content/uploads/2022/02/be-at-logo.png" className="h-6 mr-3 sm:h-7" alt="be-at Logo" />
          </a>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/" className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/organisations" className="flex items-center p-2  rounded-lg text-white bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Organisations</span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Events</span>
              </Link>
            </li>
            <li>
              <Link href="venues" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Venues</span>
              </Link>
            </li>
            <li>
              <Link href="/admin" className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group">
                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 w-10/12">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
