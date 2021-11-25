/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let script;

describe("script", () => {
  beforeEach(() => {
    document.Element.innerHTML = html.toString();
    script = require("../js/app.js");
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe("pageLoad", () => {
    test("sends fetch request to /blogs data upon page load, then call the displayOnLoad function", () => {
      app.pageLoad();
      // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
      expect(fetch.mock.calls[0][0]).toMatch(/blogs$/);
    });
  });

  describe("displayOnLoad", () => {
    test("Iterates through fetched data from /blogs, sends each blog to buildCards", () => {
      const FakeDataSubmit = {
        id: 1,
        heading: "Muntaz",
        content:
          "The muntaz was a military rank of the Italian colonial troops, equivalent to the rank of corporal in the Italian Royal Army Regio Esercito.",
        image: null,
      };
      script.displayOnLoad(FakeDataSubmit);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({
          id: 1,
          heading: "Muntaz",
          content:
            "The muntaz was a military rank of the Italian colonial troops, equivalent to the rank of corporal in the Italian Royal Army Regio Esercito.",
          image: null,
        })
      );
    });
  });

  describe("buildCards", () => {
    test("check to see if card elements are created", () => {
      expect(document.getElementsByTagName("div")).toBeDefined();
      expect(document.getElementsByTagName("img")).toBeDefined();
      expect(document.getElementsByTagName("h6")).toBeDefined();
      expect(document.getElementsByTagName("p")).toBeDefined();
    });
  });

  describe("addListeners", () => {
    test("Function to add event listeners to each of the blog cards so that they disappear when one card is clicked", () => {
      const blogSection = document.querySelector(".blog-section-simple");
      const allBlogs = document.querySelectorAll(
        ".blog-section-simple .blog-post"
      );
      expect(blogSection.style.display).toEqual("none");
      expect(document.querySelector("#page2").style.display).toEqual("none");
      expect(document.querySelector("#page3").style.display).toEqual("none");
      expect(document.querySelector(".comments_section")).toBeDefined;
      expect(document.querySelector("#form1").style.display).toEqual("none");
      expect(document.querySelector(".nextpage").style.display).toEqual("none");
      expect(document.querySelector("#emojis_section").style.display).toEqual(
        "block"
      );
      expect(document.querySelector(".comments_section").style.display).toEqual(
        "block"
      );
    });
  });

  describe("handleBlogValues", () => {
    test("Check that each one of three form variables exist", () => {
      expect(document.querySelector("#blog_title")).toBeDefined;
      expect(document.querySelector("#blog_content")).toBeDefined;
      expect(document.getElementById("blog_gif")).toBeDefined;
    });
  });

  describe("requests", () => {
    describe("gifPreview", () => {
      test("Check to see whether two elements are created", () => {
        let APIKey = "S3T7ZBACrEr9MH7QC5RKPzsgF9zT6pjm";
        expect(document.createElement("figure")).toBeDefined;
        expect(document.createElement("img")).toBeDefined;
        //Check this test later
        expect(fetch.mock.calls[0][0]).toMatch(
          "https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q="
        );
      });
    });
  });

  //   describe("render helpers", () => {
  //     describe("renderMessage", () => {
  //       test("it renders a received message on the page", () => {
  //         app.renderMessage("testing, testing, 1 2 3");
  //         expect(document.querySelector("body").textContent).toContain(
  //           "testing, testing, 1 2 3"
  //         );
  //       });
  //     });
  //   });
});
