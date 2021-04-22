module.exports = {
    ci: {
        collect: {
            isSinglePageApplication: true,
            startServerCommand : 'node server.js; sleep 10',
			puppeteerScript: '../puppeteer/appActions.js', 
            url: ['http://localhost:8080'] //- in the pipeline
            //url : ['https://appxx.azurewebsites.net/'] //or against a deployed application
        },
        upload: {
            //target: 'temporary-public-storage', - Google
            target: 'lhci',
            serverBaseUrl: 'http://20.71.85.121:9001/',
            token: 'f0e32979-1a72-43b8-9a2b-7a7c5f355b44', // could also use LHCI_TOKEN variable instead
            ignoreDuplicateBuildFailure: true //to be able to run w/o git commit
        },
        // assert: {
        //     preset: 'lighthouse:recommended',
        // },
    },
};