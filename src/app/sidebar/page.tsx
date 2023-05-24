import React from 'react'
import styles from './page.module.scss'

export default function sidebar() {
  return (
    <div>
      <aside className={styles.sidebar} >
            <nav className={styles.nav}>
              <ul className='ml-5'>
                <li className={styles.active}><a href="/">Data Shelf</a></li>
                <li><a href="/create">
                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  + Create
                </button>

                  </a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/datasets">Datasets</a></li>
                <li><a href="/requests">Requests</a></li>
                <li><a href="/mycontributions">My Contributions</a></li>
                <li><a href="/myrequests">My Requests</a></li>
              </ul>
            </nav>
          </aside>
    </div>
  )
}
