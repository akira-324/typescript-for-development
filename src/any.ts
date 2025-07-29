import axios from "axios";
export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  interface Articles {
    id: Number;
    title: String;
    description: String;
  }

  let data: Articles[];
  data = response.data;

  data = [
    {
      id: 1,
      title: "title",
      description: "des",
    },
  ];
  console.log(data);
});
