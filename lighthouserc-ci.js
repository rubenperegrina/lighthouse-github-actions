module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run start',
            isSinglePageApplication: true,
            numberOfRuns: 3,
            url: [
                'http://localhost:4200/users',
                'http://localhost:4200/shop',
                'http://localhost:4200/features'
            ]
        },
        assert: {
            assertions: {
              "categories:performance": ["error", { minScore: .4 }],
              "categories:accessibility": ["error", { minScore: .8 }],
              "categories:best-practices": ["error", { minScore: .8 }],
              "categories:seo": ["error", { minScore: .8 }],
              "categories:pwa": "off",
            },
          },
        upload: {
            target: 'temporary-public-storage',
        }
    }
}
