import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import MyQuotes from '../views/MyQuotes'
import Export from '../views/Export'

export default [
  {
    path: '/',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        components: {
          content: Home
        },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'myquotes',
        name: 'MyQuotes',
        components: {
          content: MyQuotes
        },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'export',
        name: 'Export',
        components: {
          content: Export
        },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/logout',
        name: 'Logout'
      }
    ]
  }
]
