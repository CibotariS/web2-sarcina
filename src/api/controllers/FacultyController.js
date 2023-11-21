// controllers/FacultyController.js
const FacultyService = require('../services/FacultyService');

class FacultyController {
  async getAll(req, res) {
    try {
      return res.status(200).json(await FacultyService.getAll(['id', 'name']));
    } catch (error) {
      return res.status(500).json(JSON.stringify(error));
    }
  }

  async getOne(req, res) {
    try {
      const faculty = await FacultyService.getOne(req.params.id);
      if (faculty) {
        return res.status(200).json(faculty);
      }
      return res.status(404).json();
    } catch (error) {
      return res.status(500).json(JSON.stringify(error));
    }
  }

  async create(req, res) {
    try {
      return res.status(200).json(await FacultyService.create(req.body));
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }

  async update(req, res) {
    try {
      const existingFaculty = await FacultyService.getOne(req.params.id);
      if (existingFaculty) {
        return res.status(200).json(await existingFaculty.update(req.body));
      }
      return res.status(404).json();
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }

  async delete(req, res) {
    try {
      return res.status(200).json(await FacultyService.delete(req.params.id));
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }
}

module.exports = new FacultyController();
