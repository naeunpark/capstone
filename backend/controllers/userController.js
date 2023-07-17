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
    Models.User.findByPk(req.params.userId)
    .then((data) => {
        res.send({result: 200, data: data})
    })
    .catch(error => {
        throw error
    })
}

const updateUser = (data, res) => {
    console.log(data);
    Models.User.update(data,{where: {id:data.id}})
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