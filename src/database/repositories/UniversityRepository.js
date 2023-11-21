// repositories/UniversityRepository.js
const  University  = require('../models').University


class UniversityRepository {
  async getAll(fields = undefined) {
    return await University.findAll({
      attributes: fields,
    });
  }

  async getOne(id) {
    return await University.findByPk(id);
  }

  async create(university) {
    return await University.create(university);
  }

  async update(id, university) {
    const existingUniversity = await University.findByPk(id);
    if (existingUniversity) {
      return await existingUniversity.update(university);
    }
    return null;
  }

  async delete(id) {
    return await University.destroy({
      where: { id: id },
    });
  }
}

module.exports = new UniversityRepository();
