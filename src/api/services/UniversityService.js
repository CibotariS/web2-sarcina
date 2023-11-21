const UniversityRepository = require('../../database/repositories/UniversityRepository');

class UniversityService {
  async getAll(fields = undefined) {
    return await UniversityRepository.getAll(fields);
  }

  async getOne(id) {
    return await UniversityRepository.getOne(id);
  }

  async create(university) {
    return await UniversityRepository.create(university);
  }

  async update(id, university) {
    const existingUniversity = await UniversityRepository.getOne(id);
    if (existingUniversity) {
      return await existingUniversity.update(university);
    }
    return null;
  }

  async delete(id) {
    return await UniversityRepository.delete(id);
  }
}

module.exports = new UniversityService();
