exports.getPosts = (req, res, next) => {
  res
    .status(200) //indicate success
    .json({ title: "First Post", content: "This is the first post" });
};

exports.postPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    //indicate success and create resources
    message: "post created successfully!",
    post: { id: new Date().toISOString(), title, content },
  });
};
