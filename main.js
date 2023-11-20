
var button_random = document.getElementById('random');
var text = document.getElementById('phrase');

function getRandomPhrase() {
  const phrases = [
    'бля я пидор',
    'шесть шесть шесть мои руки прада блейдс',
    'вот бы в речке поплавать так туда сюда крабов поймать и съесть)))0))',
    'пи пи пи пидор гей пи пи пидор гей, он пидорас',
    'я делаю урлки и смотрю соньку зодотую.оучку'
    'у нас тока пусть заговарят их училка сисбками задушит'
  ];

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById('phrase').textContent = randomPhrase;
}
