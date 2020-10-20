const express = require('express')  
const gatwayRouter = express.Router()

// Use cachios as a wrapper around axios that caches requests to reduce traffic on the downstream
// API server
const cachios = require('cachios') 
const { response } = require('express')
cachios.cache =  require('./dcache.js')

const MQCMS_BASEURL = process.env.MQCMS_BASEURL
const MQCMS_USERNAME = process.env.MQCMS_USERNAME
const MQCMS_PASSWORD = process.env.MQCMS_PASSWORD
// auth header contains base64 encoded username:password string
const MQCMS_AUTH = Buffer.from(MQCMS_USERNAME + ':' + MQCMS_PASSWORD).toString('base64')

/**
 * 
 * List API for listing things
https://api.uat.mq.edu.au/ws/rest/cms/listcourses/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listdesignatedminors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listmajors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listminors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listpgspecialisations/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listugspecialisations/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listunits/{imp_year}

 */

const listAPI = (what, year) => {

    const url = MQCMS_BASEURL + 'list' + what + '/' + year

    const headers = {
        Authorization: "Basic " + MQCMS_AUTH,
        'Access-Control-Allow-Origin': '*'
    }

    return cachios.get(url, {headers})
                    .then(data => data.data)
                    .catch(error => {
                        response.status(500).json({error: error})
                    })
}

gatwayRouter.get('/gateway/list/:what/:year', async (request, response) => {

    const year = request.params.year
    const what = request.params.what
    
    const validOptions = ['courses', 'designatedminors', 'majors', 
                          'minors', 'pgspecialisations', 'ugspecialisations', 'units']

    if (validOptions.includes(what)) {
        const result = await listAPI(what, year)
        response.json(result)
    } else {
        response.status(404).json({error: 'unknown resource'})
    }
    
})

/**
 * Entity API for getting details of things via ID
 * 
https://api.uat.mq.edu.au/ws/rest/cms/cms_course/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_designated_minor/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_major/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_minor/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_pg_specialisation/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_ug_specialisation/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_unit/{id}
 */

const getAPI = (what, id) => {
    const url = MQCMS_BASEURL + 'cms_' + what + '/' + id

    const headers = {
        Authorization: "Basic " + MQCMS_AUTH,
        'Access-Control-Allow-Origin': '*'
    }

    return cachios.get(url, {headers})
                .then(data => data.data)
                .catch(error => {
                    response.status(500).json({error: error})
                })
}

gatwayRouter.get('/gateway/get/:what/:id', async (request, response) => {

    const id = request.params.id
    const what = request.params.what
    
    const validOptions = ['course', 'designated_minor', 'major', 'minor', 
                          'pg_specialisation', 'ug_specialisation', 'unit']

    if (validOptions.includes(what)) {
        try {
        const result = await getAPI(what, id)
        response.json(result)
        } catch {
            response.status(404).json({error: 'unknown resource'})
        }
    } else {
        response.status(404).json({error: 'unknown resource'})
    }
    
})


module.exports = gatwayRouter
