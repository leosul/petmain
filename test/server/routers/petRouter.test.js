const assert = require("assert");
const sinon = require("sinon");
const petRouter = require("../../../server/routers/petRouter");

describe("petrouter", () => {
    describe("get", () => {
        const stubValue = [{
            id: '08a0s98d0as80da8s08d0as8d',
            name: 'teste',
            breed: 'mutt',
            size: 'small',
            weight: '5'
        }, {
            id: '92882jj2k2d98979797asd979',
            name: 'teste 2',
            breed: 'poodle',
            size: 'medium',
            weight: '8'
        }];

        it("should retrieve statusCode 200 for get  all pets", async() => {
            sinon.stub(petRouter, "get").returns(stubValue)

            const pet = await petRouter.get();

            assert.strictEqual(pet, stubValue);
            assert.strictEqual(pet.length, stubValue.length)
        });
    });
});