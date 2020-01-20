import Basic from 'src/app/Components/Schema/Contracts/Basic'

/**
 * @typedef {Static}
 */
export default {
  /**
   */
  mixins: [
    Basic
  ],
  /**
   */
  inject: [
    'path',
    'domain',
    'table',
    'form',
    'domains',
    'primaryKey',
    'displayKey',
    'fields',
    'actions',
    'hooks'
  ]
}
