// Square tools to interact with the Square API
const { Client } = require("square")

// Set Square credentials
const SQUARE_ACCESS_TOKEN = process.env["SQUARE_ACCESS_TOKEN"]
const config = {
    accessToken: SQUARE_ACCESS_TOKEN,
    environment: process.env.SQUARE_ENV,
    userAgentDetail: "retrieve_categories"
}

// Extract necessary APIs, add more if necessary
const client = new Client(config)
const { catalogApi } = client

/**
 * Retrieves all catalog items with a given search term
 * @param {String} query - Search term (e.g "pizza")
 */
const searchItems = async (query) => {
    return query
}

/**
 * Retrieves attribute pairs {name, selectionId} of custom
 * attribute categories from the designated "[Dev] Selection Level 1"
 * Square item.
 * @returns {Object} { customAttrId: ID of the list of custom attrs, customAttrPairs: list of {name, selectionId} }
 * @returns null if error
 */
const retrieveCustomAttrs = async () => {
    debug.log("Retrieving custom attribute key/value pairs...")
    var customAttrPairs
    var customAttrId
    try {
        const response = await catalogApi.searchCatalogItems({
            textFilter: 'selection level 1'
        })
        // debug.log(response.result)
        customAttrPairs = response.result['items'][0]['itemData']['variations'].map(variation => {
            let keyDict = Object.keys(variation['customAttributeValues'])
            customAttrId = variation['customAttributeValues'][keyDict]['customAttributeDefinitionId']
            let selectionId = variation['customAttributeValues'][keyDict]['selectionUidValues'][0]
            let name = variation['itemVariationData']['name']
            return {name, selectionId}
        })
    } catch (error) {
        console.log("catalog.retrieveCustomAttrs error: ", error)
    }
    if (!customAttrPairs || !customAttrId) return null
    return { customAttrId, customAttrPairs }
}

/**
 * Grabs all categories. Currently obselete because of the new organization method
 * using Square's custom attributes.
 */
const retrieveCategories = async () => {
    debug.log("Retrieving categories...")
    debug.log("Env mode: ", process.env.SQUARE_ENV)
    squareCategories = null
    try {
        const response = await catalogApi.listCatalog(undefined, 'category');
        // debug.log(response.result);
        
        squareCategories = response.result['objects'].map(category => {
            let name = category['categoryData']['name']
            let id = category['id']
            return {name, id}
        })
    }
    catch (error) {
        console.log(error);
    }
    return squareCategories;
}

module.exports = {
    retrieveCustomAttrs,
    retrieveCategories
}