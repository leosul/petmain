const Walker = require("../models/Walker");

const findAll = (page) => {
    const options = {
        page,
        limit: 20,
        sort: { title: 1 },
        customLabels: { docs: "walkers" },
        select: { createdAt: 0, __v: 0 },
    };

    return Walker.paginate(options);
};

const findById = (_id) => {
    return Walker.findOne({ _id }).select({ createdAt: 0, __v: 0 });
};

const insert = (walkerData) => {
    const walker = new Walker({...walkerData });
    return walker.save();
};

const update = async(id, walkerData) => {
    const walker = await findById(id, walkerData);

    if (!walker) {
        throw new Error("not found");
    }

    Object.assign(walker, walkerData);
    return walker.save();
};

const remove = async(id) => {
    const walker = await findById(id);

    if (!walker) {
        throw new Error("not found");
    }

    return walker.remove();
};

const count = () => {
    return Walker.countDocuments();
};

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove,
    count,
};