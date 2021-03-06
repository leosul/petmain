const Breed = require("../models/Breed");

const findAll = () => {
    return Breed.find();
};

const findById = (_id) => {
    return Breed.findOne({ _id }).select({ createdAt: 0, __v: 0 });
};

const insert = (breedData) => {
    const breed = new Breed({...breedData });
    return breed.save();
};

const update = async(id, breedData) => {
    const breed = await findById(id, breedData);

    if (!breed) {
        throw new Error("not found");
    }

    Object.assign(breed, breedData);
    return breed.save();
};

const remove = async(id) => {
    const breed = await findById(id);

    if (!breed) {
        throw new Error("not found");
    }

    return breed.remove();
};

const count = () => {
    return breed.countDocuments();
};

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove,
    count,
};