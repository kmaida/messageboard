/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Forum = require('./models/Forum');
const Topic = require('./models/Topic');
const Post = require('./models/Post');
const Tag = require('./models/Tag');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config, mongoose) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

/*
 |--------------------------------------
 | Utilities
 |--------------------------------------
 */

  const indexOfObj = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return i;
      }
    }
    return -1;
  };

/*
 |--------------------------------------
 | API Routes (GET)
 |--------------------------------------
 */

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

  // GET list of forums
  app.get('/api/forums', jwtCheck, (req, res) => {
    Forum.find({}, (err, forums) => {
      let forumsArr = [];
      if (err) {
        return res.status(500).send(err.message);
      }
      if (forums) {
        forums.forEach(forum => {
          forumsArr.push(forum);
        });
      }
      res.send(forumsArr);
    });
  });

  // GET forum by ID
  app.get('/api/forum/:id', jwtCheck, (req, res) => {
    Forum.findById(req.params.id, (err, forum) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!forum) {
        return res.status(404).send('Forum does not exist.');
      }
      res.send(forum);
    });
  });

  // GET list of topics in a given forum
  app.get('/api/topics/:forumid', jwtCheck, (req, res) => {
    Topic.find({ forum_id: req.params.forumid }, (err, topics) => {
      let topicsArr = [];
      if (err) {
        return res.status(500).send(err.message);
      }
      if (topics) {
        topics.forEach(topic => {
          topicsArr.push(topic);
        });
      }
      res.send(topicsArr);
    });
  });

  // GET list of tags
  app.get('/api/tags', jwtCheck, (req, res) => {
    Tag.find({}, (err, tags) => {
      let tagsArr = [];
      if (err) {
        return res.status(500).send(err.message);
      }
      if (tags) {
        tags.forEach(tag => {
          tagsArr.push(tag);
        });
      }
      res.send(tagsArr);
    });
  });

  // GET tag by slug
  app.get('/api/tag/:slug', jwtCheck, (req, res) => {
    Tag.findOne({ slug: req.params.slug }, (err, tag) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!tag) {
        return res.status(404).send('Tag does not exist.');
      }
      res.send(tag);
    });
  });

  // GET list of topics by tag slug
  app.get('/api/topics/tag/:slug', jwtCheck, (req, res) => {
    Topic.find({ tags: {$elemMatch: {slug: req.params.slug}} }, (err, topics) => {
      let topicsArr = [];
      if (err) {
        return res.status(500).send(err.message);
      }
      if (topics) {
        topics.forEach(topic => {
          topicsArr.push(topic);
        });
      }
      res.send(topicsArr);
    });
  });

  // GET topic by ID
  app.get('/api/topic/:id', jwtCheck, (req, res) => {
    Topic.findById(req.params.id, (err, topic) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!topic) {
        return res.status(404).send('Topic does not exist.');
      }
      res.send(topic);
    });
  });

  // GET list of posts by topic ID
  app.get('/api/posts/:topicid', jwtCheck, (req, res) => {
    Post.find({ topic_id: req.params.topicid }, (err, posts) => {
      let postsArr = [];
      if (err) {
        return res.status(500).send(err.message);
      }
      if (posts) {
        posts.forEach(post => {
          postsArr.push(post);
        });
      }
      res.send(postsArr);
    });
  });

/*
 |--------------------------------------
 | API Routes (POST)
 |--------------------------------------
 */

  // POST a new forum
  app.post('/api/forum', jwtCheck, (req, res) => {
    Forum.findOne({title: req.body.title}, (err, existingForum) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (existingForum) {
        return res.status(409).send('You have already created a forum with this title.');
      }
      const forum = new Forum({
        title: req.body.title
      });
      forum.save((err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(forum);
      });
    });
  });

  // POST a new topic
  app.post('/api/topic', jwtCheck, (req, res) => {
    Topic.findOne({title: req.body.title, forum_id: req.body.forum_id}, (err, existingTopic) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (existingTopic) {
        return res.status(409).send('You have already created a topic in this forum with this title.');
      }
      const topic = new Topic({
        title: req.body.title,
        forum_id: mongoose.Types.ObjectId(req.body.forum_id),
        sticky: req.body.sticky || false,
        tags: req.body.tags
      });
      topic.save((err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(topic);
      });
    });
  });

  // POST a new post
  app.post('/api/post', jwtCheck, (req, res) => {
    Post.findOne({post_text: req.body.post_text, topic_id: req.body.topic_id, author: req.body.author}, (err, existingPost) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (existingPost) {
        return res.status(409).send('You have already posted this same copy in this topic.');
      }
      const post = new Post({
        topic_id: mongoose.Types.ObjectId(req.body.topic_id),
        datetime: new Date(),
        author: req.body.author,
        post_text: req.body.post_text
      });
      post.save((err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(post);
      });
    });
  });

  // POST a new tag
  app.post('/api/tag', jwtCheck, (req, res) => {
    Forum.findOne({tag: req.body.slug}, (err, existingTag) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (existingTag) {
        return res.status(409).send('You have already created this tag.');
      }
      const tag = new Tag({
        tag: req.body.tag,
        slug: req.body.slug
      });
      tag.save((err) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(tag);
      });
    });
  });

/*
 |--------------------------------------
 | API Routes (PUT)
 |--------------------------------------
 */

  // PUT (edit) an existing forum
  app.put('/api/forum/:id', jwtCheck, (req, res) => {
    Forum.findById(req.params.id, (err, forum) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!forum) {
        return res.status(404).send('Forum not found.');
      }
      forum.title = req.body.title;

      forum.save(err => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(forum);
      });
    });
  });

  // PUT (edit) an existing topic
  app.put('/api/topic/:id', jwtCheck, (req, res) => {
    Topic.findById(req.params.id, (err, topic) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!topic) {
        return res.status(404).send('Topic not found.');
      }
      topic.title = req.body.title;
      topic.sticky = req.body.sticky;
      topic.tags = req.body.tags;

      topic.save(err => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(topic);
      });
    });
  });

  // PUT (edit) an existing post
  app.put('/api/post/:id', jwtCheck, (req, res) => {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!post) {
        return res.status(404).send('Post not found.');
      }
      post.post_text = req.body.post_text;

      post.save(err => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send(post);
      });
    });
  });

/*
 |--------------------------------------
 | API Routes (DELETE)
 |--------------------------------------
 */

  // DELETE a post
  app.delete('/api/post/:id', jwtCheck, (req, res) => {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!post) {
        return res.status(404).send('Post not found.');
      }
      post.remove(err => {
        if (err) {
          return res.status(500).send(err.message);
        }
        res.send({ id: req.params.id, message: 'Post successfully deleted.'});
      });
    });
  });

  // DELETE a topic and all associated posts
  app.delete('/api/topic/:id', jwtCheck, (req, res) => {
    Topic.findById(req.params.id, (err, topic) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (!topic) {
        return res.status(404).send('Topic not found.');
      }
      Post.find({topic_id: req.params.id}, (err, posts) => {
        if (posts) {
          posts.forEach(post => {
            post.remove();
          });
        }
        topic.remove(err => {
          if (err) {
            return res.status(500).send(err.message);
          }
          res.send({ id: req.params.id, message: 'Topic and all topic posts successfully deleted.'});
        });
      });
    });
  });

  // DELETE a tag and remove that tag from all topics
  app.delete('/api/tag/:slug', jwtCheck, (req, res) => {
    Tag.findOne({slug: req.params.slug}, (err, tag) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (tag) {
        // delete the tag from the collection
        tag.remove(err => {
          if (err) {
            return res.status(500).send(err.message);
          }
        });
        // find and remove the tag from all topics
        Topic.find({ tags: {$elemMatch: {slug: req.params.slug}} }, (err, topics) => {
          if (err) {
            return res.status(500).send(err.message);
          }
          if (topics) {
            topics.forEach(topic => {
              // find the deleted tag object in the tags array and splice it
              const index = indexOfObj(topic.tags, 'slug', req.params.slug);
              topic.tags.splice(index, 1);
              topic.save();
            });
          }
          res.send({ tagSlug: req.params.slug, message: 'Tag deleted and tag successfully removed from all topics.'});
        });
      }
    });
  });

};
