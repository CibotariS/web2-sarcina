// services/FacultyService.js
const FacultyRepository = require('../../database/repositories/FacultyRepository');

class FacultyService {
  async getAll(fields = undefined) {
    return await FacultyRepository.getAll(fields);
  }

  async getOne(id) {
    return await FacultyRepository.getOne(id);
  }

  async create(faculty) {
    return await FacultyRepository.create(faculty);
  }

  async update(id, faculty) {
    const existingFaculty = await FacultyRepository.getOne(id);
    if (existingFaculty) {
      return await existingFaculty.update(faculty);
    }
    return null;
  }

  async delete(id) {
    return await FacultyRepository.delete(id);
  }
}

module.exports = new FacultyService();
