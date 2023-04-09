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

const retrieveCategories = async () => {
    if (process.env.NODE_ENV === 'development') {
        console.log("Retrieving Categories...")
        console.log("Env mode: ", process.env.SQUARE_ENV)
    }
    square_categories = []
    try {
        const response = await catalogApi.listCatalog(undefined, 'category');
        console.log(response.result);
        square_categories.push(...response.result['objects']['categoryData']['name'])
        // for (const category of response.result['objects']) {
        //     console.log(category['categoryData']['name'])
        //     square_categories.
        // }
    }
    catch (error) {
        console.log(error);
    }
    if (process.env.NODE_ENV === 'development') {
        console.log(square_categories)
    }
    return;
}

module.exports = {
    retrieveCategories
}