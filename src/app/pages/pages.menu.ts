export const PAGES_MENU  = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          },
          roles: ['_s_a']
        }
      },

      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 100
          },
          roles: ['_s_a']
        },
        children: [
          {
            path: 'adduser',
            data: {
              menu: {
                title: 'Add User',
              },
              roles: ['_s_a']
            }
          },
          {
            path: 'allusers',
            data: {
              menu: {
                title: 'List Users',
              },
              roles: ['_s_a']
            }
          }
        ]
      },

      {
        path: 'books',
        data: {
          menu: {
            title: 'Books',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 100
          },
          roles: ['_s_a']
        },
        children: [
          {
            path: 'addbook',
            data: {
              menu: {
                title: 'Add Book',
              },
              roles: ['_s_a']
            }
          },
          {
            path: 'allbooks',
            data: {
              menu: {
                title: 'List Books',
              },
              roles: ['_s_a']
            }
          }
        ]
      },

      {
        path: 'issue-books',
        data: {
          menu: {
            title: 'Issue Books',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 100
          },
         roles: ['_s_a']
        },
        children: [
          {
            path: 'issue-new-book',
            data: {
              menu: {
                title: 'Issue New Book',
              },
              roles: ['_s_a']
            }
          },
          {
            path: 'allissuedbooks',
            data: {
              menu: {
                title: 'Issued Books',
              },
              roles: ['_s_a']
            }
          }
        ]
      },


    ]
  }
];

