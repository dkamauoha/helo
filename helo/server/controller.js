
module.exports = {
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_user([req.body.username, req.body.password])
            .then(user => {
                req.session.user = {...user}
                res.status(200).send(req.session.user)
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Unable to register new user.')
            })
    },

    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_user([req.body.username, req.body.password])
            .then(user => {
                req.session.user = {...user}
                user === [] ? 'User not found.' :  res.status(200).send(req.session.user)
            })
            .catch( err => {
                console.log(err);
                res.status(500).send('User not found');
            })
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send(req.session)
    }
}