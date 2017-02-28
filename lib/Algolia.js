const algoliasearch = require('algoliasearch') 
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY)
let index = null

self = module.exports = {
	init: (index_name) => {
		index = client.initIndex(index_name)
		return self
	},

	search: (keyword, callback) => {
		if (index === null) throw 'Algolia doesn not have been initialized'
		else index.search(keyword, callback)
	},
	
	add: (obj, callback) => {
		if (index === null) throw 'Algolia doesn not have been initialized'
		else index.addObject(obj, callback)
	},	

	update: (obj, callback) => {
		if (index === null) throw 'Algolia doesn not have been initialized'
		else index.partialUpdateObject(obj, callback)
	},

	delete: (id, callback) => {
		if (index === null) throw 'Algolia doesn not have been initialized'
		else index.deleteObject(id, callback(err))
	},

	clearIndex: (callback) => {
		index.clearIndex(callback);
	}
}