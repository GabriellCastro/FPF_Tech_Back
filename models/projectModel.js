const connection = require('./connection')
const { ObjectId } = require('mongodb')

const getAll = () => {
  return connection().then((db) => db.collection('project').find().toArray())
}

const getByid = (id) => {
  if(!ObjectId.isValid(id)) return null;
  return connection().then((db) => db.collection('project').findOne(ObjectId(id)))
}

const add = ({ name_project, date_initial, date_final, value, risk, name_participant }) => {
  return connection().then((db) => db.collection('project')
    .insertOne({ name_project, date_initial, date_final, value, risk, name_participant }))
}

const update = ({ id, name_project, date_initial, date_final, value, risk, name_participant }) => {
  if(!ObjectId.isValid(id)) return null;
  return connection().then((db) => db.collection('project')
    .updateOne({ _id: ObjectId(id) }, { $set: { name_project, date_initial, date_final, value, risk, name_participant } }))
}

const exclude = (id) => {
  if(!ObjectId.isValid(id)) return null;
  connection().then((db) => db.collection('project').deleteOne({ _id: ObjectId(id) }))
}

module.exports = { getAll, getByid, add, update, exclude }
