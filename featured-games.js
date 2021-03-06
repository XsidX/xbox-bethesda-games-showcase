const featuredGames = [
  {
    title: 'Pentiment',
    caption: 'A most unexpected narrarive adventure',
    desc: 'Walk in the footsteps of Andreas Maler, a master artist who finds himself in the middle of murders, scandals, and intrigue in the Bavarian Alps.',
    thumbnail: 'pentiment.jpg',
  },
  {
    title: 'As Dusk Falls',
    caption: 'Every Family has secrets. Every secret must Fall',
    desc: 'Starting in 1998 with a robbery-gone-wrong in small town Arizona, the choices you make have a powerful impact on the characters’ lives in this uncompromising story of betrayal, sacrifice and resilience.',
    thumbnail: 'as-dusk-falls.jpg',
  },
  {
    title: 'Forza Motrosport',
    caption: 'Automotive entertainment re-imagined for a new generation.',
    desc: 'Games built using the Xbox Series X|S development kit are designed to take advantage of the unique capabilities of the Xbox Series X|S.',
    thumbnail: 'forza-motorsport.jpg',
  },
  {
    title: 'Minecraft Legends',
    caption: 'Unite the World',
    desc: 'Discover the mysteries of Minecraft Legends, a new action strategy game. Explore a beautiful and once peaceful land on the brink of destruction.',
    thumbnail: 'minecraft.jpg',
  },
  {
    title: 'Ara: Hero Untold',
    caption: 'It\'s your world now',
    desc: 'Build a nation and lead your people throughout history to the pinnacles of human achievement as you explore new lands, develop arts and culture.',
    thumbnail: 'ara.jpg',
  },
  {
    title: 'Grounded',
    caption: 'Go big or never go home',
    desc: 'The world is a vast, beautiful, and dangerous place – especially when you have been shrunken to the size of an ant. Explore, build, and survive together in this cooperative survival-adventure.',
    thumbnail: 'grounded.jpg',
  },
];
const moreBtn = document.querySelector('.more-btn');

const featuredGame = document.querySelector('.game-details-wrapper');
featuredGames.forEach((game) => {
  const featuredGameContainer = document.createElement('div');
  featuredGameContainer.classList.add('game-details-container');
  featuredGameContainer.innerHTML = `
    <div class="game-snapshot">
      <img src="assets/img/${game.thumbnail}" alt="picture of the starfield game">
    </div>
    <div class="game-details">
      <h4>${game.title}</h4>
      <p><i>${game.caption}</i></p>
      <div class="line"></div>
      <h5>${game.desc}</h5>
    </div>
  `;
  featuredGame.insertBefore(featuredGameContainer, featuredGame.children[0]);
});

const gamesContainer = document.querySelectorAll('.game-details-container');
moreBtn.addEventListener('click', () => {
  gamesContainer.forEach((game) => {
    game.style.display = 'grid';
  });
});
