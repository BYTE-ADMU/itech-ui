// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop` hello BUILD

const axios = require('axios');

module.exports = function (api) {
  //START: ARTICLES
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await axios.get('https://calm-everglades-39473.herokuapp.com/articles');

    const articles = actions.addCollection({
      typeName: 'articles',
      path: '/articles/:id'
    });

    for (const article of data) {
      articles.addNode({
        //PATH
        path: '/articles/' + article.id,
        // ARTICLE INFORMATION
        id: article.id,
        title: article.title,
        description: article.description,
        publishedDate: article.published_at,
        lastEditedDate: article.updatedAt,
        // AUTHORS INFORMATION
        author: article.author.name,
        profileImage: article.author.profileImage.url,
        //CONTENTS
        content: article.content,
        sources: article.sources,
        //IMAGES
        thumbnailImage: article.thumbnailImage.url,
        featuredImage: article.featuredImage.url,
        //RELATED COLLECTIONS
        categories: article.categories[0].name,
        courses: article.courses[0],
      });
    }
  }
  )
  //END: ARTICLES


  //START: CATEGORIES
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await axios.get('https://calm-everglades-39473.herokuapp.com/categories');

    const categories = actions.addCollection({
      typeName: 'categories',
      path: '/categories/:name'
    });

    for (const category of data) {
      categories.addNode({
        //PATH
        path: '/categories/' + category.name,
        // ARTICLE INFORMATION
        id: category.id,
        name: category.name,
        description: category.description,
        //RELATED COLLECTIONS
        topics: category.topics,
        courses: category.courses,
        articles: category.articles,
      });
    }
  }
  )
  //END: CATEGORIES



  //START: TOPICS
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await axios.get('https://calm-everglades-39473.herokuapp.com/topics');

    const topics = actions.addCollection({
      typeName: 'topics',
      path: '/topics/:name'
    });

    for (const topic of data) {
      topics.addNode({
        //PATH
        path: '/topics/' + topic.name,
        // TOPIC INFORMATION
        publishedDate: topic.published_at,
        id: topic.id,
        name: topic.name,
        description: topic.description,
        thumbnail: topic.thumbnail.url,
        //RELATED COLLECTIONS
        courses: topic.courses,
        categories: topic.categories[0].name,
      });
    }
  }
  )
  //END: TOPICS



  //START: COURSES
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await axios.get('https://calm-everglades-39473.herokuapp.com/courses');

    const courses = actions.addCollection({
      typeName: 'courses',
      path: '/courses/:id'
    });

    for (const course of data) {
      courses.addNode({
        //PATH
        path: '/courses/' + course.id,
        // COURSE INFORMATION
        publishedDate: courses.published_at,
        id: course.id,
        name: course.name,
        description: course.description,
        thumbnail: course.thumbnail.url,
        //RELATED COLLECTIONS
        articles: course.articles,
        categories: course.categories[0].name,
      });
    }
  }
  )
  //END: COURSES





  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

  })


}
