// repositories/FacultyRepository.js
const Faculty = require('../models').Faculty

class FacultyRepository {
  async getAll(fields = undefined) {
    return await Faculty.findAll({
      attributes: fields,
    });
  }

  async getOne(id) {
    return await Faculty.findByPk(id);
  }

  async create(faculty) {
    return await Faculty.create(faculty);
  }

  async update(id, faculty) {
    const existingFaculty = await Faculty.findByPk(id);
    if (existingFaculty) {
      return await existingFaculty.update(faculty);
    }
    return null;
  }

  async delete(id) {
    return await Faculty.destroy({
      where: { id: id },
    });
  }
}

module.exports = new FacultyRepository();
