const request = require("supertest");
const server = require("../app");
const data = require("../data");

describe("API server", () => {
  let api;
  // it("check if 2+2=4", ()=>{
  //   expect(2+2).toEqual(4)
  // });

  beforeAll(()=>{
    // start the server and store it in the api variable
    api = server.listen(5000, ()=>{
        console.log("Test server running on port 5000");
    });
  });

  afterAll((done)=>{
      // close the server, then run done
      console.log("Gracefully stopping test server");
      api.close(done);
  });

  it("Responds to get / with status 200", (done)=>{
      request(api).get("/").expect(200,done);
  });

  it("Responds to get /blogs with status 200", (done)=>{
      request(api).get("/blogs").expect(200,done);
  });

  it("responds to get /blogs to fetch 7 results", () => {
    request(api)
      .get("/blogs")
      .expect(200)
      .expect([
        {
          1: {
            id: 1,
            heading: "The Nintendo Wii",
            content:
              "The Wii is a home video game console developed and marketed by Nintendo. The fifth major home console released by the company, it is the successor to the GameCube and was released on November 19, 2006. Although a competitor in the seventh generation of video game consoles, the Wii aimed to appeal to a larger and broader target demographic, directing towards the 'casual' market rather than the 'core' audience.",
            image:
              "https://media2.giphy.com/media/3o6Zt6RCjlIKNSUmDS/giphy.gif?cid=ecf05e478k16pbacnsc8ssqshe5n3g796ehifmq4i6hhwbb3&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          2: {
            id: 2,
            heading: "The Charleston Swamp Foxes",
            content:
              "The Charleston Swamp Foxes were one of the 15 original teams to join the inaugural 2000 AF2 season. They started off in the American Conference, before switching divisions in every year of their existence (2001-Northeast, 2002-Southern & 2003-Atlantic). Charleston played their home games in the North Charleston Coliseum.",
            image:
              "https://media0.giphy.com/media/UsEgpqTnhPiXm/giphy.gif?cid=ecf05e47g0fj6jlsl4bfbc3f2ffovbmcncsrevo5qcxsj7yv&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          3: {
            id: 3,
            heading: "D.I.D",
            content:
              "Dissociative identity disorder (DID), previously known as multiple personality disorder (MPD),[7] is a mental disorder characterized by the maintenance of at least two distinct and relatively enduring personality states.[3] The disorder is accompanied by memory gaps beyond what would be explained by ordinary forgetfulness.",
            image:
              "https://media2.giphy.com/media/l41lJ8ywG1ncm9FXW/giphy.gif?cid=ecf05e47htpo6if7y8n3iv4mixg7rg7zecz2ir1h2y79yi24&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          4: {
            id: 4,
            heading: "Samsaram (1975 film)",
            content:
              "Samsaram (transl.???Family) is a 1975 Indian Telugu-language drama film, produced and directed by Tatineni Prakash Rao under the Anil Productions banner.[2] It stars N. T. Rama Rao and Jamuna.[3] The music was composed by T. Chalapathi Rao.[4]",
            image:
              "https://media0.giphy.com/media/xjKBHMsZQsXug/giphy.gif?cid=ecf05e47rv8nkm2p1qhh8ojhkjdfzbi0dvbd3twgf3jkl5ta&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          5: {
            id: 5,
            heading: "Bridgend Athletic RFC",
            content:
              "Bridgend Athletic RFC are a Welsh rugby union club based in Bridgend in South Wales. They are members of the Welsh Rugby Union playing in the National League Division 1 West and are a feeder club for the Ospreys.[1]",
            image:
              "https://media4.giphy.com/media/vQ3eiY7RRXLxbJNGVn/giphy.gif?cid=ecf05e47hrs02z9qkl7edkmmwls7svxgzyb3ge5n5zy89x5k&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          6: {
            id: 6,
            heading: "Crystal Palace Baltimore",
            content:
              "Crystal Palace Baltimore was an American professional soccer team based in Baltimore, Maryland, US. Founded in 2006, the club was originally named Crystal Palace USA and was affiliated with English side Crystal Palace.",
            image:
              "https://media4.giphy.com/media/KbMxF8QD966gYjnTzq/giphy.gif?cid=ecf05e47srecpt4lrrmo2ap30epazqfag1ijal06wp59q9vr&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
          7: {
            id: 7,
            heading: "My Home Village",
            content:
              "My Home Village (Korean: ??? ??????; 1949), directed by Kang Hong-sik, is a film in the war film genre, the first film to be made in the then newly independent Democratic People's Republic of Korea (North Korea). The film portrays the liberation of Korea from Japanese colonial rule in 1945.",
            image:
              "https://media3.giphy.com/media/nPkDRTgcTxu84elFBf/giphy.gif?cid=ecf05e475ge321gdyqujr86hkknz8lpmdl74e0wo7debmyrc&rid=giphy.gif&ct=g",
            comments: [],
            reacts: [],
          },
        },
      ]);
  });
});
