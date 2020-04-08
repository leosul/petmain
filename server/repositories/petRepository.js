const Pet = require("../models/Pet");

const findAll = (page) => {
    const options = {
        page,
        limit: 20,
        sort: { name: 1 },
        customLabels: { docs: "pets" },
        select: { createdAt: 0, __v: 0 },
    };

    return Pet.paginate(options);
};

const findById = (_id) => {
    return Pet.findOne({ _id }).select({ createdAt: 0, __v: 0 });
};

const insert = (petData) => {
    const pet = new Pet({...petData });
    return pet.save();
};

const update = async(id, petData) => {
    const pet = await findById(id, petData);

    if (!pet) {
        throw new Error("not found");
    }

    Object.assign(pet, petData);
    return pet.save();
};

const remove = async(id) => {
    const pet = await findById(id);

    if (!pet) {
        throw new Error("not found");
    }

    return pet.remove();
};

const count = () => {
    return Pet.countDocuments();
};

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove,
    count,
};