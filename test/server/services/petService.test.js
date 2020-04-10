const assert = require("assert");
const sinon = require("sinon");
const petService = require("./../../../server/services/petService");

describe("petservice", () => {
    describe("findById", () => {
        const stubValue = {
            id: '08a0s98d0as80da8s08d0as8d',
            name: 'teste',
            breed: 'mutt',
            size: 'small',
            weight: '5'
        };

        it("should retrieve a pet with specific id", async() => {
            sinon.stub(petService, "findById").returns(stubValue);

            const pet = await petService.findById(stubValue.id);

            assert.strictEqual(pet.name, stubValue.name);
            assert.strictEqual(pet.breed, stubValue.breed);
            assert.strictEqual(pet.size, stubValue.size);
            assert.strictEqual(pet.weight, stubValue.weight);

        });
    });

    describe("findAll", () => {
        const stubValue = [{
                id: '08a0s98d0as80da8s08d0as8d',
                name: 'teste 1',
                breed: 'mutt',
                size: 'small',
                weight: '5'
            },
            {
                id: '0a98s0dsd7a7s686a8s86d86as',
                name: 'teste 2',
                breed: 'mutt',
                size: 'medium',
                weight: '9'
            },
            {
                id: '767sda8s76575a7sdas7dasd089',
                name: 'teste 3',
                breed: 'labrador',
                size: 'big',
                weight: '30'
            }
        ];

        it("should retrieve all pets", async() => {
            sinon.stub(petService, "findAll").returns(stubValue);

            const pet = await petService.findAll();

            assert.strictEqual(pet, stubValue);
            assert.strictEqual(pet.length, stubValue.length)

        });
    });
});