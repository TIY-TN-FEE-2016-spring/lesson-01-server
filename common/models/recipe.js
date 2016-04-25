module.exports = function(Recipe) {
  Recipe.beforeRemote(`create`, (context, user, callback) => {
    // Get the request from the server context
    const request = context.req;

    // Get current user id
    const userId = req.accessToken.userId;

    // Set relationship data for user
    req.body.data.relationships.user.data = {
      id: userId,
    };

    // Continue creating the recipe
    callback();
  })
};
