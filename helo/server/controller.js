
module.exports = {
    register: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.create_user([req.body.username, req.body.password])
            .then(user => res.status(200).send(user))
            .catch(err => {
                console.log(err);
                res.status(500).send('Unable to register new user.')
            })
    },

    login: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_user([req.body.username, req.body.password])
            .then(user => res.status(200).send(user))
            .catch( err => {
                console.log(err);
                res.status(500).send('User not found');
            })
    }
}