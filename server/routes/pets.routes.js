const { get } = require("mongoose");
const PetController = require("../controllers/pets.controller");
//

module.exports = (app) => {
    app.get("/api", PetController.findAllPets);
    
    app.post("/api/pet/new", PetController.createPet);
    app.get("/api/pet/:id", PetController.getPet);
    app.put("/api/pet/edite/:id", PetController.updatePet);
    app.delete("/api/pet/delete/:id", PetController.deletePet);

    app.put('/api/like/:_id', PetController.likePet);
}