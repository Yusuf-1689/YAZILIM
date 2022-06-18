//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date and Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
      return `${this.title} was written by ${this.author} in ${this.year} `;
    };
  }
  
  //? new keyword'u Book Constructor'ini parametereler ile cagirmaktadir.
  //? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
  //? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
  //? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan
  //? her bir instance'a da hayat bulmus olur.
  
  const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
  const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
  
  console.log(book1);
  console.log(book2.getSummary());

  book1.price = 100;

  console.log(book1, book2);

  // Eğer yeni bir property veya fonksiyonu constructor'a eklemek istersek
// prototype'ı kullanabilir

  Book.prototype.getAge = function (){
    return new Date().getFullYear() - this.year;
  };

  Book.prototype.type = 'novel';

  console.log(book1.getAge());
  console.log(book2.getAge());
  console.log(book2.type);


 console.log(Book.prototype);

 
 console.log(book1.__proto__);