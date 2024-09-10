export function initializeTypewriter(elementId, text) {
  var app = document.getElementById(elementId);

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter.pauseFor(1000).typeString(text).pauseFor(3000).start();
}

export function initializeGranim(elementId, imageSource) {
  new Granim({
    element: elementId,
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
      source: imageSource,
      blendingMode: 'multiply',
    },
    states: {
      'default-state': {
        gradients: [
          ['#81a39d', '#eceba3'],
          ['#ffffff', '#ffffff'],
        ],
      },
    },
  });
}
