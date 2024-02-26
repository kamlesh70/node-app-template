import request from "supertest";
import app from "./app";

describe("App", () => {
  it("should work", () => {});

  it("should return 200", async () => {
    const result = await request(app).get("/");
    expect(result.status).toBe(200);
  });
});
