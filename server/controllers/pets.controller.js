const Pets = require('../models/pets.model');

// create a new
module.exports.createPet = (request, response) => {
  const { name, type, desc, skill1, skill2, skill3 } = request.body;
  Pets.create({
    name,
    type,
    desc,
    skill1,
    skill2,
    skill3
    
  })
    .then(pets => response.json(pets))
    .catch(err =>response.status(400).json(err));
}

module.exports.findAllPets = (req, res) => {
  Pets.find().collation({locale:"en"}).sort({type:1})
    .then(allPets => res.json({ Pets:allPets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getPet = (request, response) => {
  Pets.findOne({_id:request.params.id})
      .then(pet => response.json(pet))
      .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
  Pets.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
      .then(updatedPet => response.json(updatedPet))
      .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
  Pets.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

module.exports.likePet = (req, res) => {
  Pets.findOneAndUpdate(
    { _id: req.params._id},
    { $inc: { likes: 1 } }
  )
    .then(() => res.json({ message: "likes increased" }))
    .catch(err => res.json(err));
}
