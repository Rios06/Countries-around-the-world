import express from 'express';
import Country from '../models/CountryModel.js'; 

const router = express.Router();

router.post("/countries", (req, res) => {
    const country = new Country(req.body);
    country
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/countries", (req, res) => {
    Country.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/countries/:id", (req, res) => {
    const { id } = req.params;
    Country.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/countries/:id", (req, res) => {
    const { id } = req.params;
    Country.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/countries/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    Country.updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

export default router;