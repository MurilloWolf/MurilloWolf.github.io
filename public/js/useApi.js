const avatarName = document.getElementById("avatar-name");
const avatarDesc = document.getElementById("avatar-desc");
const avatarFigure = document.getElementById("figure");

axios({
  method: "get", // metodo http
  url: "https://api.github.com/users/vinicius-vasconcelos" //caminho e parametros da api
})
  .then(response => {
    console.log(response);
    avatarFigure.insertAdjacentHTML(
      "afterbegin",
      `<img class='image' src = ${response.data.avatar_url} alt= ${avatarName}/>`
    );
    avatarName.innerText = response.data.name;
    avatarDesc.innerText = response.data.bio;
  })
  .catch(error => {
    console.log(error);
  });
