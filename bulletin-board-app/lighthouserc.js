module.exports = {
    ci: {
        collect: {
            isSinglePageApplication: true,
            startServerCommand : 'node server.js' ,
			puppeteerScript: '../puppeteer/idamLogin.js', 
            url: ['http://localhost:8080', 'https://www.objectivity.co.uk/'] //- in the pipeline
            //url : ['https://appxx.azurewebsites.net/'] //or against a deployed application
        },
        upload: {
            //target: 'temporary-public-storage', - Google
            target: 'lhci',
            serverBaseUrl: 'http://20.72.129.91:9001/',
            token: 'ea6621e1-7600-4a6d-b842-fb8d794da415', // could also use LHCI_TOKEN variable instead
            ignoreDuplicateBuildFailure: true //to be able to run w/o git commit
        },
        // assert: {
        //     preset: 'lighthouse:recommended',
        // },
    },
};