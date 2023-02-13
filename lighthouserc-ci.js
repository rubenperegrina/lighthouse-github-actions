module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            numberOfRuns: 3,
            url: [
                'http://localhost:4200/users',
                'http://localhost:4200/shop',
                'http://localhost:4200/features'
            ]
        },
        asserts: {
            assertions: {
                'categories:performance': ['error', {minScore: .6}],
                'categories:accessibility': ['error', {minScore: .6}],
                'categories:best-practices': ['error', {minScore: .6}],
                'categories:seo': ['error', {minScore: .6}],
                'categories:pwa': 'off',
            }
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
}