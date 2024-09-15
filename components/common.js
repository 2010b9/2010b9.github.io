export function initializeTypewriter(elementId, text) {
  var app = document.getElementById(elementId);

  var typewriter = new Typewriter(app, {
    loop: false,
    delay: 50,
  });

  typewriter.pauseFor(500).typeString(text).pauseFor(3000).start();
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
