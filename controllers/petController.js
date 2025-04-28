const User = require('../models/petModel');
exports.getAllPets = (req, res) => {
    User.getAllPets((pets) => {
        res.render('index', { pets });
    });

};

exports.getPetById = (req, res) => {
    const petId = req.params.id;
    Pet.getPetById(petId, (pets) => {
        res.render('edit', { pets });

    });

};


///exibir usuário antes de deletar 
exports.getDeleteByPet = (req, res) => {
    const petId = req.params.id;
    Pet.getPetById(petId, (pet) => {
        res.render('delete', { pet });

    });

};


exports.addPet = (req, res) => {
    const newPet = {

        name: req.body.name,

        cor: req.body.cor,

        raca: req.body.raca,

        porte: req.body.porte,

        especie: req.body.especie

    };

    User.addPet(newPet, () => {

        res.redirect('/');

    });
};
exports.updatePet = (req, res) => {
    const petId = req.params.id;
    const updatedPet = {
        name: req.body.name,
        cor: req.body.cor,
        raca: req.body.raca,
        porte: req.body.porte,
        especie: req.body.especie
    };

    Pet.updatePet(petId, updatedPet, () => {
        res.redirect('/'); 
    }); 
};
