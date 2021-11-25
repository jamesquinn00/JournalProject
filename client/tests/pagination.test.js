/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
global.fetch = require("jest-fetch-mock");
let script;
describe("script", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    script = require("../assets/js/pagination.js");
  });
  afterEach(() => {
    fetch.resetMocks();
  });

  describe("pagination", () => {
    test('check that pagination exists"', () => {
      expect(script.activatePage).toBeTruthy();
    });
    test('check the number of pages"', () => {
      let pages = document.querySelectorAll(".page-content .page");
      expect(pages.length).toBe(3);
    });
  });
  describe("next page", () => {
    test('check that pagination exists"', () => {
      expect(script.nextPage).toBeTruthy();
    });

    test('check that pagination exists"', () => {
      const next = document.querySelector(".next-page");
      expect(next.textContent).toBe("Next");
    });
  });
  describe("previous page", () => {
    test('check that pagination exists"', () => {
      expect(script.previousPage).toBeTruthy();
    });

    test('check that pagination exists"', () => {
      const previous = document.querySelector(".previous-page");
      expect(previous.textContent).toBe("Previous");
    });
  });
});
