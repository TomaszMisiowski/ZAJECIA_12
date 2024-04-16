function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

////////////////////OPIS THIS//////////////
//Wskazuje na obiekt będący kontekstem wykonania.
//Najprostszym przykładem jest odwołanie się do pola obiektu w jego metodzie - this.nazwaObiektu
//wtedy kontekstem jest obiekt, na którym wywołana została ta metoda, a this wskazuje właśnie na niego.

// class User {
//     constructor({ name, email }) {
//       this.name = name;
//       this.email = email;
//     }
//w tym przypadku po stworzeniu obiektu mówimy, że zasięg tego obiektu to name ma się równać name i tak samo email

const person = {
  name: "John",
  ShowName() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.ShowName();
// //odwołujemu się do danego obiektu w tym przypadku imienia.

const bookshelf = {
  authors: ["autor1", "autor2", "autor3"], //tablica z 3 autorami
  getAuthors() {
    return this.authors; // zwracanie metodą return // odwołanie do authors
  },
  addAuthors(authors) {
    this.authors.push(authors); //dodawanie metodą push + odwołanie
  },
};

bookshelf.getAuthors();
bookshelf.addAuthors("autor9");
bookshelf.addAuthors("autor10"); // dodawanie autorów
bookshelf.addAuthors("autor11");
const authorList = bookshelf.getAuthors();
console.log(authorList);
