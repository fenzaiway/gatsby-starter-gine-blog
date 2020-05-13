module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/fenzaiway/86710f82af454623bef0833a0cbd1355?v=47911fe7e4a04f8d98577ea198724d40"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/fenzaiway/2b3d65c2df3c430d82326ab994131ee7?v=ba0f2e6f05ac4b0fb5524b950e91ac2b"
            }
        }
    ],
}
