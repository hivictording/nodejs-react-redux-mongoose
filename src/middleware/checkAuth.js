// const checkAuth = (req, res, next) => {
//     if (!req.user) {
//       return res.redirect("/auth/google");
//     }
//     next()
// }

function checkAuth (req, res, next)  {
  if (!req.user) {
    return res.redirect("/auth/google");
  }
  next()
}

module.exports = {checkAuth}