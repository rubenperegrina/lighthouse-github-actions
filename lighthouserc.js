module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 1,
            url: [
                'http://localhost:4200/users',
                'http://localhost:4200/shop',
                'http://localhost:4200/features'
            ]
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
}