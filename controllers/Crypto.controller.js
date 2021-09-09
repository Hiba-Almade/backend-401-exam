const axios = require('axios');
const { userModel, cryptoModel } = require('../models/schema');


const gitAll = (req, res) => {
    let url = 'https://crypto-explorer.herokuapp.com/crypto-list/';
    axios.get(url).then(result => {
        res.send(result.data)
    })
}

const gitFav = (req, res) => {
    userModel.findOne({ email: req.query.email }, (err, data) => {
        if (err) { res.send(err) } else {
            res.send(data.fav)
        }
    })
}

const addFav = (req, res) => {
    let body = req.body
    let newFav = {
        title: body.title,
        desc: body.desc,
        usd: body.usd,
        img: body.img
    }
    userModel.findOne({ email: req.query.email }, (err, data) => {
        if (err) { res.send(err) }
        else {
            data.fav.push(newFav);
            data.save()
            res.send(data.fav)

        }
    })
}

const editFav = (req, res) => {
    let body = req.body
    userModel.findOne({ email: req.query.email }, (err, data) => {
        if (err) { res.send(err) }
        else {
            data.fav.findbyIdandUpdate({ _id: req.params.id }, {
                title: body.title,
                desc: body.desc,
                usd: body.usd
            },(err, data) => {
                if (err) { res.send(err) } else {
                    res.send(data.fav)


                }
            })

        }
    })
}

const deleteFav = (req, res) => {
    let body = req.body
    userModel.findOne({ email: req.query.email }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            data.fav.splice(+req.params.id, 1)
            data.save();
            res.send(data.fav)
        }
    })

}


module.exports = { gitAll, gitFav, addFav, editFav, deleteFav };