<template>
  <page-card flat class="col">
    <q-card-section>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn outline rounded color="primary" label="English" @click="$i18n.locale = 'en-US'" />
      <q-btn outline rounded color="primary" label="Русский" @click="$i18n.locale = 'ru-RU'" />
    </q-card-actions>
  </page-card>
</template>
