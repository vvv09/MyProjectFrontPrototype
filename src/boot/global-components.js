import { boot } from 'quasar/wrappers'

const globalComponents = {
  'mobile-page': require('components/MobilePage/Page').default,
  'mobile-page-header': require('components/MobilePage/PageHeader').default,
  'mobile-page-body': require('components/MobilePage/PageBody').default,
  'mobile-page-header-button-back': require('components/MobilePage/PageHeaderButtonBack').default,
  'page-card': require('components/Common/PageCard').default,
  'page-list': require('components/Common/PageList').default,
  'page-tab-panels': require('components/Common/PageTabPanels').default,
  'page-block-title': require('components/Common/PageBlockTitle').default,
  'page-frame': require('components/Common/PageFrame').default,
  'hidden-area': require('components/Common/HiddenArea').default,
}

export default boot(async ({ app }) => {
  for (const key in globalComponents) {
    app.component(key,globalComponents[key])
  }
})
