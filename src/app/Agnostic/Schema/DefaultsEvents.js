import { reject } from 'src/app/Util/general'
import { SCOPES } from 'src/app/Agnostic/enum'
import { parseResponseRecord } from 'src/settings/rest'

/**
 */
export default {
  /**
   * Method that perform all configure events
   * It call the methods of all default scopes
   */
  defaultCreated () {
    const schema = this

    this.hook('created:default', function () {
      // call component initialize method
      if (this.initialize && typeof this.initialize === 'function') {
        this.initialize()
      }

      // call configure of each field
      this.configure()

      // call global prototype configure
      schema.beforeCreateHook.call(this)

      const scopeHook = `createdHook${this.scope.toCamelCase(true)}`
      if (schema[scopeHook]) {
        /**
         * @fires createdHookScopeIndex
         * @fires createdHookScopeAdd
         * @fires createdHookScopeEdit
         * @fires createdHookScopeView
         * @fires createdHookScopeTrash
         */
        schema[scopeHook].call(this, schema)
      }

      // call global prototype configure
      /**
       * @fires createdHook
       */
      schema.createdHook.call(this, schema)
    })
  },

  /**
   * Install hook to handle the data event fetchRecords
   * The hook 'request:records' is triggered when component needs a list of entity
   */
  defaultRequestRecords () {
    const schema = this

    this.hook('request:records', function ({ parameters, filters }) {
      if (!schema.service) {
        return reject({})
      }
      const trash = this.$route.meta.scope === SCOPES.SCOPE_TRASH
      return schema.$service().paginate(parameters, filters, trash)
    })
  },

  /**
   * Install hook to handle the data event fetchRecord
   * The hook 'request:record' is triggered when component need a record of entity
   */
  defaultRequestRecord () {
    const schema = this

    this.hook('request:record', function ({ id }) {
      if (!schema.service) {
        return reject({})
      }
      if (!id) {
        return reject({})
      }
      const trash = this.$route.query.trash
      return schema.$service()
        .read(id, trash)
        .then(parseResponseRecord())
    })
  }
}
