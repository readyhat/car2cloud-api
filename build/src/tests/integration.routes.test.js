const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const server = require("../index");

describe("GET /health - check server health", () => {
	it("should be healthy", done => {
		chai.request(server)
		.get("/health")
		.end((err, res) => {
			should.not.exist(err);
			res.status.should.equal(200);
			res.body.healthy.should.equal(true);
			done();
		});
	});
});

describe("GET /hello - Generic greeting", () => {
	it("should provide a generic greeting", done => {
		chai.request(server)
		.get("/hello")
		.end((err, res) => {
			should.not.exist(err);
			res.status.should.equal(200);
			done();
		});
	});
});

describe("GET /hello/:user - User specific greeting", () => {
	it("should provide a user specific greeting", done => {
		chai.request(server)
		.get("/hello/car2cloud")
		.end((err, res) => {
			should.not.exist(err);
			res.status.should.equal(200);
			done();
		});
	});
});