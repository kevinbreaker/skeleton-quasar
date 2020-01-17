import Rest from 'src/app/Services/Rest'
import { resource } from '../settings'
import { promisify, uuid, get } from 'src/app/Util/general'

/**
 * @type {UserService}
 */
export default class UserService extends Rest {
  /**
   * @type {String}
   */
  resource = resource

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  create (record) {
    return promisify({ ...record, id: uuid() })
  }

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  update (record) {
    return promisify({ ...record })
  }

  /**
   * @param {string | number | Record<string, any>} record
   * @param {boolean} trash
   * @returns {Promise}
   */
  read (record, trash = false) {
    return promisify({
      data: {
        id: uuid(),
        name: 'User fake',
        email: 'user' + Math.ceil(Math.random() * 100) + '@mail.com',
        profile: {
          id: uuid(),
          name: 'Profile fake',
          reference: 'path/' + Math.ceil(Math.random() * 100),
          actions: []
        },
        active: Math.ceil(Math.random() * 100) % 2 === 0
      }
    })
  }

  /**
   * @param {Object} record
   * @returns {Promise}
   */
  destroy (record) {
    return promisify({ ...record })
  }

  /**
   * @param {Record<string, string | number>} parameters
   * @param {Array<string>} [filters] = []
   * @param {boolean} [trash] = false
   * @returns {Promise<any>}
   */
  paginate (parameters, filters, trash = false) {
    const { pagination } = parameters

    const rowsPerPage = get(pagination, 'rowsPerPage', this.size)
    const sortBy = get(pagination, 'sortBy')
    const descending = get(pagination, 'descending')
    const page = get(pagination, 'page', 1)

    const rowsNumber = 21
    const pagesNumber = Math.ceil(rowsNumber / rowsPerPage)
    let length = rowsPerPage
    if (page === pagesNumber) {
      length = rowsNumber % (pagesNumber - 1)
    } else if (page > pagesNumber) {
      length = 0
    }

    const generator = (value, index) => {
      const counter = (page - 1) * rowsPerPage + index + 1
      return {
        id: uuid(),
        name: `User fake ${counter}`,
        email: 'user' + Math.ceil(Math.random() * 100) + '@mail.com',
        profile: {
          id: uuid(),
          name: 'Profile fake',
          reference: 'path/' + Math.ceil(Math.random() * 100),
          actions: []
        },
        active: Math.ceil(Math.random() * 100) % 2 === 0
      }
    }

    return promisify({
      rowsPerPage: rowsPerPage,
      rowsNumber: rowsNumber,
      pagesNumber: pagesNumber,
      sortBy: sortBy,
      descending: descending,
      page: page,
      rows: Array.from({ length }, generator)
    })
  }
}
