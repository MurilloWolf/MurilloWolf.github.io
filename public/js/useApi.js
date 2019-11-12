function submitForm() {
  const avatarName = document.getElementById("avatar-name");
  const avatarDesc = document.getElementById("avatar-desc");
  const avatarFigure = document.getElementById("figure");
  const avatarImage = document.getElementById("avatar-image");
  const repositorios = document.getElementById("rep-container");
  const quantidadeRep = document.getElementById("qtd-rep");
  const userName = document.getElementById("input-search").value;
  const link = document.getElementsByTagName("a")[0];

  console.log(link);
  console.log("mirajane");
  repositorios.innerHTML = "";

  axios({
    method: "get", // metodo http
    url: `https://api.github.com/users/${userName}/repos` //caminho e parametros da api
  })
    .then(response => {
      console.log(response.data);
      avatarImage.setAttribute("src", "" + response.data[0].owner.avatar_url);
      link.setAttribute("href", response.data[0].owner.html_url);
      avatarName.innerText = response.data[0].owner.login;
      quantidadeRep.innerText = response.data.length;

      response.data.map(item => {
        let desc;
        item.description == null ? (desc = "") : (desc = item.description);

        repositoryHTML = ` 
              <div class="rep-item">
              <p class="rep-item-title">${item.name}</p>
              <p>
                ${desc}
              </p>
              </div>`;

        repositorios.insertAdjacentHTML("afterbegin", repositoryHTML);
      });
    })
    .catch(error => {
      console.log(error);
    });
}
