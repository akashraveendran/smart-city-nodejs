

const getSignupPage = (req, res) => {
    res.render("student/signup")
}
const doSignup = (req, res) => {
    console.log(req.body);
}



module.exports = { getSignupPage, doSignup }