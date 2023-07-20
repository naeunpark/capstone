import Models from "../models/index.js";

const getUser = (res) => {
    Models.User.findAll({})
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const getUserById = (req, res) => {
    console.log(req.params.userId);
    Models.User.findByPk(req.params.userId)
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const updateUser = (req, res) => {
    console.log(req.body);
    Models.User.update(req.body,{where: {id:req.params.id}})
    .then((data)=>res.send({result: 200, data: data}))
    .catch(error => {throw error})
}

const deleteUser = (data, res) => {
    Models.User.destroy({
        where: {
          id: data.params.id
        }
      })
      .then((data)=>res.send({result: 200, data: data}))
      .catch(error => {throw error})
}

const Controllers = {
    getUser, getUserById, updateUser, deleteUser
}

export default Controllers;