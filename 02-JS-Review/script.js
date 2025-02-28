const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  const books = getBook(1);
//   console.log(books)
// 
// 
// 


const {title , author, pages , publicationDate , genres , hasMovieAdaptation} = books;
console.log(title , author);


// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];


// by using destructuring

const [primaryGenre , secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre , secondaryGenre, ...otherGenres);



const newGenres = [...genres, 'epic fantasy'];
console.log(newGenres);


const updatedBook = {
    ...books ,
    // Adding a new property
     moviePublicationDate: '2001-12-19',
     //Overwriting an existing property
    //  pages: 1210,
    };

console.log(updatedBook);




const summary = `${title} a  ${pages}-page long book was written by ${author} and published in ${publicationDate.split("-")[0]} `;

summary;




const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);



function getYear(str){
    return str.split("-")[0];
};


// const getYear = (str) => str.split("-")[0];


console.log(getYear(publicationDate));



//short circuiting


// falsy: 0 , ' ' , null , undefined

console.log(true && "Some string");
console.log(false && "Some string");


console.log("jawad" && "Some string");
console.log(0 && "Some string");



console.log(true || "Some string");
console.log(false || "Some string");



console.log((data[0].reviews.librarything.reviewsCount));



function getTotalReviewCount(books){
    const goodreads = books.reviews.goodreads.reviewsCount;
    const librarything = books.reviews.librarything?.reviewsCount  ?? 0;

    return goodreads + librarything;
}



console.log( getTotalReviewCount(books));




