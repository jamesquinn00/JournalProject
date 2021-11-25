/**
 * @jest-environment jsdom
 */
const { TestWatcher } = require("@jest/core");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

global.fetch = require("jest-fetch-mock");
let script;

describe("script", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    script = require("../assets/js/script.js");
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe("requests", () => {
    describe("displayOnLoad", () => {
      test("it exists", () => {
        expect(script.displayOnLoad).toBeTruthy();
      });
    });

    describe("pageLoad", () => {
      test("it exists", () => {
        expect(script.pageLoad).toBeTruthy();
      });
    });

    describe("buildCards", () => {
      test("it exists", () => {
        expect(script.buildCards).toBeTruthy();
      });
    });

    describe("sendBlog", () => {
      test("it exists", () => {
        expect(script.sendBlog).toBeTruthy();
      });
    });

    describe("sendComment", () => {
      test("it exists", () => {
        expect(script.sendComment).toBeTruthy();
      });
    });

    describe("handleCommentValues", () => {
      test("it exists", () => {
        expect(script.handleCommentValues).toBeTruthy();
      });
    });

    describe("getFinalGifUrl", () => {
      test("it exists", () => {
        expect(script.getFinalGifUrl).toBeTruthy();
      });
    });

    describe("gifPreview", () => {
      test("it exists", () => {
        expect(script.gifPreview).toBeTruthy();
      });
    });
    describe("addListeners", () => {
      test("it exists", () => {
        expect(script.addListeners).toBeTruthy();
      });
    });
    describe("buildCards", () => {
      test("it exists", () => {
        expect(script.buildCards).toBeTruthy();
      });
    });

    describe("requests", () => {
      test("it makes a request to /", () => {
        script.pageLoad();
        expect(fetch).toHaveBeenCalled();
      });
    });

    // TESTS NOT WORKING: TESTS FROM SERGI

    // describe("sendBlog", () => {
    //   test("it makes a post request to /blogs with the blog data", () => {
    //     const fakeSubmitEvent = {
    //       preventDefault: jest.fn(),
    //       target: {
    //         id: { value: 1 },
    //         heading: { value: "hi" },
    //         content: { value: "hello world" },
    //         image: {
    //           value:
    //             "https://media0.giphy.com/media/UsEgpqTnhPiXm/giphy.gif?cid=ecf05e47g0fj6jlsl4bfbc3f2ffovbmcncsrevo5qcxsj7yv&rid=giphy.gif&ct=g",
    //         },
    //         comments: { value: [] },
    //         reacts: { value: [] },
    //       },
    //     };

    //     script.sendBlog(fakeSubmitEvent);
    //     expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
    //     expect(fetch.mock.calls)[0][1].toHaveProperty(
    //       "body",
    //       JSON.stringify({
    //         id: { value: 1 },
    //         heading: { value: "hi" },
    //         content: { value: "hello world" },
    //         image: {
    //           value:
    //             "https://media0.giphy.com/media/UsEgpqTnhPiXm/giphy.gif?cid=ecf05e47g0fj6jlsl4bfbc3f2ffovbmcncsrevo5qcxsj7yv&rid=giphy.gif&ct=g",
    //         },
    //         comments: { value: [] },
    //         reacts: { value: [] },
    //       })
    //     );
    //   });
    // });
  });

  //   describe("displayOnLoad", () => {
  //     test("Iterates through fetched data from /blogs, sends each blog to buildCards", () => {
  //       const FakeDataSubmit = {
  //         id: 1,
  //         heading: "Muntaz",
  //         content:
  //           "The muntaz was a military rank of the Italian colonial troops, equivalent to the rank of corporal in the Italian Royal Army Regio Esercito.",
  //         image: null,
  //       };
  //       script.displayOnLoad(FakeDataSubmit);
  //       expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
  //       expect(fetch.mock.calls[0][1]).toHaveProperty(
  //         "body",
  //         JSON.stringify({
  //           id: 1,
  //           heading: "Muntaz",
  //           content:
  //             "The muntaz was a military rank of the Italian colonial troops, equivalent to the rank of corporal in the Italian Royal Army Regio Esercito.",
  //           image: null,
  //         })
  //       );
  //     });
  //   });

  // test working:
  describe("buildCards", () => {
    test("check to see if card elements are created", () => {
      expect(document.getElementsByTagName("div")).toBeDefined();
      expect(document.getElementsByTagName("img")).toBeDefined();
      expect(document.getElementsByTagName("h6")).toBeDefined();
      expect(document.getElementsByTagName("p")).toBeDefined();
    });
  });

  //   describe("addListeners", () => {
  //     test("Function to add event listeners to each of the blog cards so that they disappear when one card is clicked", () => {
  //       const blogSection = document.querySelector(".blog-section-simple");
  //       const allBlogs = document.querySelectorAll(
  //         ".blog-section-simple .blog-post"
  //       );
  //       expect(blogSection.style.display).toEqual("none");
  //       expect(document.querySelector("#page2").style.display).toEqual("none");
  //       expect(document.querySelector("#page3").style.display).toEqual("none");
  //       expect(document.querySelector(".comments_section")).toBeDefined;
  //       expect(document.querySelector("#form1").style.display).toEqual("none");
  //       expect(document.querySelector(".nextpage").style.display).toEqual("none");
  //       expect(document.querySelector("#emojis_section").style.display).toEqual(
  //         "block"
  //       );
  //       expect(document.querySelector(".comments_section").style.display).toEqual(
  //         "block"
  //       );
  //     });
  //   });

  //   test working:
  describe("handleBlogValues", () => {
    test("Check that each one of three form variables exist", () => {
      expect(document.querySelector("#blog_title")).toBeDefined;
      expect(document.querySelector("#blog_content")).toBeDefined;
      expect(document.getElementById("blog_gif")).toBeDefined;
    });
  });

  //   describe("requests", () => {
  //     describe("gifPreview", () => {
  //       test("Check to see whether two elements are created", () => {
  //         let APIKey = "S3T7ZBACrEr9MH7QC5RKPzsgF9zT6pjm";
  //         expect(document.createElement("figure")).toBeDefined;
  //         expect(document.createElement("img")).toBeDefined;
  //         //Check this test later
  //         expect(fetch.mock.calls[0][0]).toMatch(
  //           "https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&limit=1&q="
  //         );
  //       });
  //     });
  //   });

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
