var movies = [
  {
    id: 1,
    title: 'Stranger Things',
    desc: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
  	img: 'https://static.posters.cz/image/750/plakaty/stranger-things-one-sheet-i63329.jpg'
  },
  {
    id: 2,
    title: 'You',
    desc: 'A clever bookstore manager relies on his savvy Internet know-how to make the woman of his dreams fall in love with him.',
  	img: 'http://observer.case.edu/wp-content/uploads/2019/03/YOUTVPoster.jpg'
  },
  {
    id: 3,
    title: 'Mindhunter',
    desc: 'Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.',
  	img: 'https://ssl-gfx.filmweb.pl/po/41/11/764111/7799689.3.jpg'
  },
  {
    id: 4,
    title: 'La Casa de Papel',
    desc: 'A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.',
  	img: 'https://ssl-gfx.filmweb.pl/po/28/26/792826/7822938.3.jpg'
  },
  {
    id: 5,
    title: 'Narcos',
    desc: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',
  	img: 'https://cdn.cinematerial.com/p/500x/geax95ve/narcos-movie-poster.jpg'
  },
  {
    id: 6,
    title: 'Dark',
    desc: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
  	img: 'https://i.wpimg.pl/O/426x597/d.wpimg.pl/121630178--39009075/dark-netflix.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement("img", {src: movie.img},)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'The Best NETFLIX Series:'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));