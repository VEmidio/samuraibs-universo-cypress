/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { Pool } = require('pg')


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

  const pool = new Pool({
    host: 'jelani.db.elephantsql.com',
    user: 'vocikcoa',
    password: 'YqJNxlAIBvWl2ev8jTc3LJzql4OrSzvn',
    database: 'vocikcoa',
    port: 5432
  })

  on('task', {
    removeUser(email) {
      return new Promise(function (resolve) {
        pool.query('DELETE FROM public.users WHERE email = $1', [email], function (error, result) {
          if (error) {
            throw error
          }
          resolve({success: result})
        })
      })

    }
  })

}
