const fs = require('fs')
 
const CACHE_DIR = './dcache/'

// set to true to always return a response from the cache
// even if we don't have one - prevents trying to access the API
const PREVENT_API_REQUESTS = true

/**
cacheKey: string

if a value has been set for this `cacheKey`, return it.
otherwise, return a falsey value (undefined, false, null)
*/
const get = (cacheKey) => {
    const filename = CACHE_DIR + cacheKey
    if (fs.existsSync(filename)) {
        console.log("hit", filename)
        return JSON.parse(fs.readFileSync(filename))
    } else {
        console.log("Get undefined")
        if (PREVENT_API_REQUESTS) {
            return {data: {}, status: 200}
        } else {
            return undefined
        }
    }
}
   
/**
cacheKey: string
cacheValue: mixed
ttl: number|undefined

store the value `cacheValue` under `cacheKey` for `ttl` seconds.
if `ttl` is not set, it is assumed the value is stored forever.
*/
const set = (cacheKey, cacheValue, ttl) => {
    const filename = CACHE_DIR + cacheKey
    fs.writeFileSync(filename, JSON.stringify(cacheValue))
}


module.exports = {get, set}
