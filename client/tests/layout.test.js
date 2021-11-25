/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe("head", () => {
    test("it has a title", () => {
      const title = document.querySelector("head title");
      expect(title).toBeTruthy();
      expect(title.textContent).toBe("Group 4 Community Journaling website");
    });
  });

  describe("body", () => {
    describe("button", () => {
      let button;

      beforeEach(() => {
        button = document.getElementById("submitbutton");
      });

      test("it exists", () => {
        expect(button).toBeTruthy();
      });

      test("it has a call to action", () => {
        expect(button.textContent.toLowerCase()).toContain("submit");
      });
    });

    describe("form", () => {
      let form;
      let BlogTitle, BlogContent, BlogGif, submitBtn;
      beforeEach(() => {
        form = document.querySelector("#form1");
        BlogTitle = form.querySelector("#blog_title");
        BlogContent = form.querySelector("#blog_content");
        BlogGif = form.querySelector("#blog_gif");
        submitBtn = form.querySelector("#submitbutton");
      });

      //   tests for the title
      test("it exists", () => {
        expect(form).toBeTruthy();
      });

      describe("title input", () => {
        test('it has an id of "blog_title"', () => {
          expect(BlogTitle).toBeTruthy();
        });

        test('it is a text input"', () => {
          expect(BlogTitle.getAttribute("type")).toBe("text");
        });

        test('it has a label"', () => {
          expect(document.querySelector("#blog_title")).toBeTruthy();
        });
      });
      // tests for the main blog content
      describe("content input", () => {
        test('it has an id of "blog_content"', () => {
          expect(BlogContent).toBeTruthy();
        });

        test('it is a text input"', () => {
          expect(BlogContent.tagName).toBe("TEXTAREA");
        });

        test('it has a label"', () => {
          expect(document.querySelector("#blog_content")).toBeTruthy();
        });
      });

      //   tests for the gif part: FIRST TEST NOT WORKING
      describe("gif input", () => {
        test('it has an id of "blog_gif"', () => {
          expect(BlogGif).toBeTruthy();
        });

        test("it is a text input", () => {
          expect(BlogGif.getAttribute("type")).toBe("text");
        });

        test("it has a label", () => {
          expect(document.querySelector("#blog_gif")).toBeTruthy();
        });
      });
    });

    test("it has a section to display cards", () => {
      expect(document.querySelector("section#page1")).toBeTruthy();
    });

    test("card title has to be added to page", () => {
      expect(document.querySelector("#blog_title")).toBeTruthy();
    });

    test("card content has to be added to page", () => {
      expect(document.querySelector("#blog_content")).toBeTruthy();
    });

    test("card gif has to be added to page", () => {
      expect(document.querySelector("#blog_gif")).toBeTruthy();
    });
  });
});
