<template>
  <mobile-page>
    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Practices"
        />
      </template>
      <template #title>Resume Practice</template>
    </mobile-page-header>
    <mobile-page-body>
        <page-list bordered>
          <q-item-label header>Magick</q-item-label>
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ contact.letter }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="primary" />
            </q-item-section>
          </q-item>

          <q-separator />
          <q-item-label header>Mysticism</q-item-label>

          <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ contact.letter }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="primary" />
            </q-item-section>
          </q-item>
        </page-list>
    </mobile-page-body>
  </mobile-page>
</template>

<script>
  const contacts = [ {
    id: 1,
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    letter: 'R'
  }, {
    id: 2,
    name: 'Mallorie Alessandrini',
    email: 'malessandrini1@marketwatch.com',
    letter: 'M'
  }, {
    id: 3,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    letter: 'E'
  }, {
    id: 4,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    letter: 'S'
  } ]

  const offline = [ {
    id: 5,
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    letter: 'S'
  }, {
    id: 6,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    letter: 'E'
  } ]

  export default {
    setup () {
      return {
        contacts,
        offline
      }
    }
  }
</script>
