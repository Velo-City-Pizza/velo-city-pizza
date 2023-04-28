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

const retrieveCustomAttrs = async () => {
    debug.log("Retrieving custom attribute key/value pairs...")
    customAttrPairs = null
    try {
        const response = await catalogApi.searchCatalogItems({
            textFilter: 'selection level 1'
        })
        // debug.log(response.result)

        customAttrPairs = response.result['items'][0]['itemData']['variations'].map(variation => {
            let keyDict = Object.keys(variation['customAttributeValues'])
            let selectionId = variation['customAttributeValues'][keyDict]['selectionUidValues'][0]
            let name = variation['itemVariationData']['name']
            return {name, selectionId}
        })
    } catch (error) {
        console.log(error)
    }
    return customAttrPairs
}

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