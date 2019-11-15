const Users = require("./user-model");
const db = require("../data/dbConfig");

beforeEach(async () => {
  await db("users").truncate();
});
// beforeAll()
// afterAll()
// afterEach()

describe("User model", () => {
  describe("insert function", () => {
    let users;
    test("should insert a user", async () => {
      await Users.add({
        username: "sam",
        password: "password",
        location: "Nigeria"
      });
      await Users.add({
        username: "Ade",
        password: "password",
        location: "Lagos"
      });

      users = await db("users");
      expect(users).toHaveLength(2);
      expect(users[0]).toHaveProperty("username");
      expect(users[0].id).toBe(1);
      expect(users[0].username).toBe("sam");

      await Users.add({
        username: "Bola",
        password: "password",
        location: "UK"
      });

      users = await db("users");
      expect(users).toHaveLength(3);
    });
  });
});

describe("User model", () => {
  test("should be defined", () => {
    expect(Users).toBeDefined();
  });
});
