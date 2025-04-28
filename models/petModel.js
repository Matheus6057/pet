const db = require('../config/db')

const Pet = {
    getAllPets: (callback) => {
        const sql = 'SELECT * FROM pets'; 
        db.query(sql, (err, results) =>{
        if (err) throw err; 
        callback(results);
        });
    },      
        getPetById: (id, callback) => {
            const sql = 'SELECT * FROM pets WHERE id = ?';
            db.query(sql, [id], (err, result) => {
            if (err) throw err; callback(result[0]);
        });
    },
        addPet: (data, callback) => {
            const sql = 'INSERT INTO pets SET ?'; 
            db.query(sql, data, (err, result) => { 
                if (err) throw err; callback(result); 
            });
    },
        updatePet: (id, data, callback) => {
            const sql = 'UPDATE pets SET? WHERE id = ?'; 
            db.query(sql, [data, id], (err, result) => {
                if (err) throw err; 
                callback(result);
            });
    },
           deletePet: (id, callback) => {
                const sql = 'DELETE FROM pets WHERE id = ?';
                db.query(sql, [id], (err, result) => { 
                    if (err) throw err; 
                    callback(result); 
            });
        }, 
};

module.exports = Pet;