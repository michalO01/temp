module.exports = {
    ci: {
        collect: {
            isSinglePageApplication: true,
            startServerCommand : 'node server.js' ,
            url: ['http://localhost:8080'] //- in the pipeline
            //url : ['https://appxx.azurewebsites.net/'] //or against a deployed application
        },
        upload: {
            //target: 'temporary-public-storage', - Google
            target: 'lhci',
            serverBaseUrl: 'http://20.72.129.91:9001/',
            token: '17f9e085-5287-418d-8ad5-d56fdd99c72e', // could also use LHCI_TOKEN variable instead
            ignoreDuplicateBuildFailure: true //to be able to run w/o git commit
        },
        // assert: {
        //     preset: 'lighthouse:recommended',
        // },
    },
};