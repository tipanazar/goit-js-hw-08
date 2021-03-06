import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.querySelector('iframe');

const player = new Player(videoPlayer);

player.on('timeupdate', throttle( data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

let stopTime = Number(localStorage.getItem('videoplayer-current-time'));
console.log(stopTime);

player
  .setCurrentTime(stopTime)
  .then(function (seconds) {
    seconds = 0;
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
