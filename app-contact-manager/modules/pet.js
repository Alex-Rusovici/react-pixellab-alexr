export const render = (pet) => {
  const { name, species, age } = pet;
  const container = document.createElement('article');
  container.classList.add('pet', 'mt-3');

  container.innerHTML = `
    <h1>${name}</h1>
    <ul>
      <li>Species: ${species}</li>
      <li>Age: ${age}</li>
    </ul>

    <button title="Delete"
      type="button"
      class="btn btn-secondary"
    >Delete</button>

    <button title="Edit"
      type="button"
      class="btn btn-secondary mx-2"
    >Edit</button>
  `;

  return container;
};