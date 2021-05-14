const charactersAPI = new APIHandler('http://localhost:8000');

const targetCharacters = document.querySelectorAll

function displayCharacters (characters) {
  console.log("super", characters);
}

window.addEventListener('load', () => {


  document
  .getElementById('fetch-all')
  .addEventListener('click', async (event) =>
  { const apiResult = await charactersAPI.getFullList()
    displayCharacters(apiResult.data);
  });

  document
  .getElementById('fetch-one')
  .addEventListener('click', function (event) {
    const input = document.querySelector('[name="character-id"]');
    const foo = charactersAPI.getOneRegister([input.value])
    .then(characterResult => displayCharacters([characterResult.data]))
    .catch();
  });

  document
  .getElementById('delete-one')
  .addEventListener('click', function (event) {
    const input = document.querySelector('[name="character-id-delete"]');
    const foo = charactersAPI.deleteOneRegister(input.value)
    .then(characterResult => console.log(characterResult.data))
    .catch(apiError => console.warn(apiError));
  });

  document
  .getElementById('edit-character-form')
  .addEventListener('submit', function (event) {

  });

  document
  .getElementById('new-character-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#new-character-form [name="name"]').value;
    const occupation = document.querySelector('#new-character-form [name="occupation"]').value;
    const weapon = document.querySelector('#new-character-form [name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form [name="cartoon"]').checked;
    const newCharacter = {name, occupation, weapon, cartoon}
    charactersAPI.createOneRegister(newCharacter)
    .then((characterResult) => {
      name.value=""
    })
    .catch((apiError) => console.warn(apiError));
  });
});
