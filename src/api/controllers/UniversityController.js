// controllers/UniversityController.js
const UniversityService = require('../services/UniversityService');

class UniversityController {
  async getAll(req, res) {
    try {
      return res.status(200).json(await UniversityService.getAll(['id', 'name']));
    } catch (error) {
      return res.status(500).json(JSON.stringify(error));
    }
  }

  async getOne(req, res) {
    try {
      const university = await UniversityService.getOne(req.params.id);
      if (university) {
        return res.status(200).json(university);
      }
      return res.status(404).json();
    } catch (error) {
      return res.status(500).json(JSON.stringify(error));
    }
  }

  async create(req, res) {
    try {
      return res.status(200).json(await UniversityService.create(req.body));
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }

  async update(req, res) {
    try {
      const existingUniversity = await UniversityService.getOne(req.params.id);
      if (existingUniversity) {
        return res.status(200).json(await existingUniversity.update(req.body));
      }
      return res.status(404).json();
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }

  async delete(req, res) {
    try {
      return res.status(200).json(await UniversityService.delete(req.params.id));
    } catch (error) {
      return res.status(400).json(JSON.stringify(error));
    }
  }
}

module.exports = new UniversityController();
