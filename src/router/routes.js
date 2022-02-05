
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/diary' },
      { path: '/diary',
        component: () => import('pages/Diary/Diary.vue'),
        children: [
          {
            path: '/diary/practice-resume',
            component: () => import('pages/Diary/Children/PracticeResume.vue'),
          },
          {
            path: '/diary/practice-create',
            component: () => import('pages/Diary/Children/PracticeCreate.vue'),
          },
          {
            path: '/diary/:sessionId',
            component: () => import('pages/Diary/Children/PracticeSession.vue'),
            children: [
              {
                path: '/diary/:sessionId/:practiceId',
                component: () => import('pages/Diary/Children/PracticeDescription.vue'),
              }
            ]
          }
        ]
      },
      { path: '/tables',
        component: () => import('pages/Tables/Tables.vue'),
        children: [
          {
            path: '/tables/answer',
            component: () => import('pages/Tables/Answer.vue'),
          }
        ]
      },
      { path: '/numbers',
        component: () => import('pages/Numbers/Numbers.vue'),
        children: [
          {
            path: '/numbers/child',
            component: () => import('pages/Numbers/Children/Practice.vue'),
            children: [
              {
                path: '/numbers/child/grandchild',
                component: () => import('pages/Numbers/Children/PracticeStart.vue'),
              }
            ]
          }
        ]
      },
      { path: '/tides',
        component: () => import('pages/Tides/Tides.vue'),
        children: [
          {
            path: '/tides/:id',
            component: () => import('pages/Tides/Answer.vue'),
          }
        ]
      },
      { path: '/library',
        component: () => import('pages/Library/Library.vue'),
        children: [
          {
            path: '/library/:id',
            component: () => import('pages/Library/Image.vue'),
          }
        ]
      },
      { path: '/settings',
        component: () => import('pages/Settings/Settings.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
