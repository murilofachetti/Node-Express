class GenericController {
    generatePagination(params) {
        const limit = params.limit ? parseInt(params.limit) : 10,
              page = params.page ? parseInt(params.page) - 1 : 0;

        return [limit, page];
    }
};

module.exports = GenericController;