<template>
  <q-editor
    v-model="text"
    :dense="$q.screen.lt.md"
    :toolbar="edit_toolbar_options"
    :fonts="edit_toolbar_fonts"
  >

  </q-editor>
</template>

<script>
  export default {
    props: ['text'],
    name: "TextEditor",
    data() {
      return {
        edit_toolbar_options: [

          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['token', 'hr', 'link', 'custom_btn'],
          [
            {
              label: this.$q.lang.editor.formatting,
              icon: this.$q.iconSet.editor.formatting,
              list: 'no-icons',
              options: [
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
              ]
            },
            {
              label: this.$q.lang.editor.fontSize,
              icon: this.$q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7'
              ]
            },
            {
              label: this.$q.lang.editor.defaultFont,
              icon: this.$q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana',
                'hebrew_font',
                'latin_font',
                'greek_font',
                'enochian_font',
                'esoterica_font',
              ]
            },
            'removeFormat'
          ],
          [
            {
              icon: this.$q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify']
            },
            'quote',
            'unordered',
            'ordered',
            'outdent',
            'indent'
          ],
          ['undo', 'redo'],
          ['fullscreen', 'viewsource']
        ],
        edit_toolbar_fonts: {
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana',
          hebrew_font: 'Drugulin CLM',
          latin_font: 'Bitter',
          greek_font: 'Alkaios',
          enochian_font: 'Enochian',
          esoterica_font: 'Esoterica',
        }
      }
    }
  }
</script>

<style scoped>

</style>
