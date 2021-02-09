function checkAuth(req, res, next)  {
    console.log(req.user)
    if (!req.user) {
      return res.redirect("/auth/google");
    }
    next()
}

module.exports = {checkAuth}