class MongooseService {
   constructor(Model) {
      this.model = Model
   }

   save(body) {
      return this.model.insertMany(body)
   }

   async insert(body) {
      return await this.model.create(body)
   }

   async find(id) {
      return this.model.findById(id)
   }

   async findBy(property, value) {
      return this.model.find({[property]: value})
   }

   async findOne(property, value) {
      return this.model.findOne({[property]: value})
   }
}

module.exports = MongooseService
