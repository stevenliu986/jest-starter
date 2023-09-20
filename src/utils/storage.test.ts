import storage from "./storage";

describe("Storage", () => {
  it("can set the value", () => {
    storage.set("newKey", "Hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual("Hello");
  });

  it("can get the value", () => {
    localStorage.setItem("my-app-secondKey", "Very Important");
    expect(storage.get("secondKey")).toEqual("Very Important");
  });
});
