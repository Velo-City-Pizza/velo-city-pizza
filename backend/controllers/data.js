const Data = require('../models/dataModel')

/**
 * @returns Created data document on success, null on failure
 * @sideEffect Deletes old category entries with a matching "name" attribute
 */
async function newVar(name, ...data) {
    try {
        const deleteResult = await Data.deleteMany({ name })
        console.log("Deleted documents =>", deleteResult)
        result = await Data.create({ name, data })
        return result
    }
    catch (error) {
        return null
    }
}

module.exports = {
    newVar
}