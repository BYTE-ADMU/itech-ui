// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api) {
  api.loadSource( async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const {data} = await axios.get('http://localhost:1337/articles');

    const collection = actions.addCollection({
      typeName:'articles',
      path:'/articles/:id'
    });

    for (const eachArticle of data){
      collection.addNode({
        id:eachArticle.id,
        path:'/articles/' + eachArticle.id,
        title:eachArticle.title,
        author:eachArticle.author,
        date:eachArticle.date,
        content:eachArticle.content,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
