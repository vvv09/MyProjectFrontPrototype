// Vuex can be used instead of it

import { reactive } from 'vue'


const state = reactive({
  usePageTransition: false,
  navItems: [
    {
      to: '/diary',
      icon: 'las la-book',
      label: 'Diary',
      root: '/diary',
    },
    {
      to: '/tables',
      icon: 'las la-th-list',
      label: 'Tables',
      root: '/tables',
    },
    {
      to: '/numbers',
      icon: 'las la-infinity',
      label: 'Numbers',
      root: '/numbers',
    },
    {
      to: '/tides',
      icon: 'las la-clock',
      label: 'Tides',
      root: '/tides',
    },
    {
      to: '/library',
      icon: 'las la-book-reader',
      label: 'Library',
      root: '/library',
    },
    {
      to: '/settings',
      icon: 'las la-cog',
      label: 'Settings',
      root: '/settings',
    },
  ],
  images: [
    {
      id: 'id1',
      url: '/images/1.jpg',
      caption: 'Cat',
    },
    {
      id: 'id2',
      url: '/images/2.jpg',
      caption: 'Tree',
    },
    {
      id: 'id3',
      url: '/images/3.jpg',
      caption: 'Ancient street',
    },
    {
      id: 'id4',
      url: '/images/4.jpg',
      caption: 'Beautiful waterfall',
    },
    {
      id: 'id5',
      url: '/images/5.jpg',
      caption: 'Coffee beans',
    },
    {
      id: 'id6',
      url: '/images/6.jpg',
      caption: 'Lighthouse at dusk',
    },
  ],
  practices: [
    {
      id: 'practice-id1',
      url: '/images/practices/lbrp.jpg',
      caption: 'Lesser Ritual Of The Pentagram',
      type: 'magick',
    },
    {
      id: 'practice-id2',
      url: '/images/practices/lbrh.jpg',
      caption: 'Lesser Ritual Of The Hexagram',
      type: 'magick',
    },
    {
      id: 'practice-id3',
      url: '/images/practices/starruby.jpg',
      caption: 'Liber 25: Star Ruby',
      type: 'magick',
    },
    {
      id: 'practice-id4',
      url: '/images/practices/starruby.jpg',
      caption: 'Asana',
      type: 'mysticism',
    },
    {
      id: 'practice-id5',
      url: '/images/practices/starruby.jpg',
      caption: 'Adoration F.L.O.',
      type: 'devotion',
    },
    {
      id: 'practice-id6',
      url: '/images/practices/starruby.jpg',
      caption: 'Liber Resh',
      type: 'devotion',
    },
    {
      id: 'practice-id7',
      url: '/images/practices/starruby.jpg',
      caption: 'Tarot Divination',
      type: 'divination',
    },
    {
      id: 'practice-id8',
      url: '/images/practices/starruby.jpg',
      caption: 'Чтение Сефер Йецира',
      type: 'studies',
    },
  ],
  sessions: [
    {
      id: 'session-id1',
      title: 'Session 1 Title',
      description: 'Session 1 Description',
      result: 'Session 1 Result',
      rate: 2,
      iteration: 1,
      session: 13,
      startTime: null,
      duration: null,
      practiceId: 'practice-id1',
      practiceAvatar: '/images/practices/lbrp.jpg',
      practiceName: 'Lesser Ritual Of The Pentagram',
      practiceType: 'magick',
    },
    {
      id: 'session-id2',
      title: 'Session 2 Title',
      description: 'Session 2 Description',
      result: 'Session 2 Result',
      rate: 3,
      iteration: 2,
      session: 23,
      startTime: null,
      duration: null,
      practiceId: 'practice-id2',
      practiceAvatar: '/images/practices/lbrh.jpg',
      practiceName: 'Lesser Ritual Of The Hexagram',
      practiceType: 'magick',
    },
    {
      id: 'session-id3',
      title: 'Session 3 Title',
      description: 'Session 3 Description',
      result: 'Session 3 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id3',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Liber 25: Star Ruby',
      practiceType: 'magick',
    },
    {
      id: 'session-id4',
      title: 'Dragon',
      description: 'Session 4 Description',
      result: 'Session 4 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id4',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Asana',
      practiceType: 'mysticism',
    },
    {
      id: 'session-id5',
      title: 'Session 5 Title',
      description: 'Session 5 Description',
      result: 'Session 5 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id5',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Adoration F.L.O.',
      practiceType: 'devotion',
    },
    {
      id: 'session-id6',
      title: 'Session 6 Title',
      description: 'Session 6 Description',
      result: 'Session 6 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id6',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Liber Resh',
      practiceType: 'devotion',
    },
    {
      id: 'session-id7',
      title: 'Session 7 Title',
      description: 'Session 7 Description',
      result: 'Session 7 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id7',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Tarot Divination',
      practiceType: 'divination',
    },
    {
      id: 'session-id8',
      title: 'Session 8 Title',
      description: 'Session 8 Description',
      result: 'Session 8 Result',
      rate: 4,
      iteration: 3,
      session: 33,
      startTime: null,
      duration: null,
      practiceId: 'practice-id8',
      practiceAvatar: '/images/practices/starruby.jpg',
      practiceName: 'Чтение Сефер Йецира',
      practiceType: 'studies',
    },
  ],
  iosBrowserSwipingBack: false,
})

const getters = {
  getImage(imageId) {
    return state.images.filter(image => image.id === imageId)[0]
  },
  getPractice(practiceId) {
    return state.practices.filter(practice => practice.id === practiceId)[0]
  },
  getSessions(sessionId) {
    return state.sessions.filter(session => session.id === sessionId)[0]
  }
}

const store = {
  state,
  getters
}

export default store
