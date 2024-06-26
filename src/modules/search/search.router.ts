import SearchService from "./search.service";
import SearchController from "./search.controller";
import express from 'express'


/** Route /api/search/ */
const searchRouter = express.Router()

const searchService = new SearchService();
const searchController = new SearchController(searchService);
searchRouter.get('/by-postcode', searchController.getByPostalCode.bind(searchController))
export default searchRouter