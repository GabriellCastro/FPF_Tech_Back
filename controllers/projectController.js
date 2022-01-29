const router = require('express').Router()
const Project = require('../models/projectModel')

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const result = await Project.getByid(id)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
})

router.get('/', async (_req, res) => {
  try {
    const result = await Project.getAll()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
})

router.post('/create', async (req, res) => {
  try {
    const { name_project, date_initial, date_final, value, risk, name_participant } = req.body
    await Project.add({ name_project, date_initial, date_final, value, risk, name_participant })
    return res.status(201).send()
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
})

router.put('/update', async (req, res) => {
  try {
    const { id } = req.params
    const { name_project, date_initial, date_final, value, risk, name_participant } = req.body
    await Project.update({ id, name_project, date_initial, date_final, value, risk, name_participant })
    return res.status(204).send()
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Project.exclude(id)
    return res.status(200).json({ message: "projeto deletado com sucesso!" })
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
})

module.exports = router
