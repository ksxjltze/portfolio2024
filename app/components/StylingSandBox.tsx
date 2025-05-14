'use client'
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "../contexts/ThemeContext";

export default function StylingSandBox(props: {styleTemplate: string}) {
  const { theme } = useTheme();
  const currentTheme = theme;
  const aeroTemplate = 
`
<!DOCTYPE html>
<html>

<head>
  <title>Frutiger Aero Sandbox</title>
  <meta charset="UTF-8" />
  <style>
  body {
    background: linear-gradient(185deg, #0599ffff, #24ff01aa);
    background-attachment: fixed;
    color: white;
  }

  body main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }

  button {
    color: white;
    padding: 0 1em;
    width: 100%;
    margin: 0rem 1rem 1rem;
    border-radius: 8px;
    filter: drop-shadow(2px 1px 1px black);
    background: linear-gradient(179deg, gray, rgba(1, 1, 1, 0.6));

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6),
      inset 0px 2px 1px rgba(255, 255, 255, 0.2),
      inset 0px -2px 1px rgba(0, 0, 0, 0.2);
  }

  article {
    padding: 1rem;
    background: linear-gradient(179deg, rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3));
    border-radius: 8px;
    filter: drop-shadow(2px 1px 1px rgba(0, 0, 0, 0.1));

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6),
      inset 0px 2px 1px rgba(255, 255, 255, 0.2),
      inset 0px -2px 1px rgba(0, 0, 0, 0.2);

    margin-bottom: 1em;
  }

  p {
    margin: auto;
  }

  .aero-glass {
    border-radius: 8px;
  }

  .aero-glass .window-header {
    border-radius: 8px 8px 0px 0px;
    height: 1em;
    width: 100%;

    margin: 0;
    background: linear-gradient(175deg, rgba(222, 222, 222, 0.8), rgba(222, 222, 255, 0.3));
  }

  .aero-glass .window {
    padding: 0;
    border-radius: 8px;
    background: linear-gradient(175deg, rgba(222, 222, 222, 0.5), rgba(222, 222, 255, 0.3));
  }

  .aero-glass .window-content {
    color: black;
    border-radius: 0px 0px 8px 8px;
    margin: 1em;
    padding-bottom: 1em;
  }

  .aero-glass p {
    background-color: white;
    border-radius: 4px;
    padding: 1em;
  }

  .aero-green {
    background: linear-gradient(175deg, rgba(222, 222, 222, 0.5), rgba(222, 222, 255, 0.3));
    border-radius: 8px;
    filter: drop-shadow(2px 1px 1px rgba(0, 0, 0, 0.1));
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6),
      inset 0px 2px 1px rgba(255, 255, 255, 0.2),
      inset 0px -2px 1px rgba(0, 0, 0, 0.2);
  }

  .overlay-container{
    position: relative;
  }

  .no-margin-bottom {
    margin-bottom: 0;}

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    filter: drop-shadow(2px 1px 1px rgba(0, 0, 0, 0.1));
    z-index: 2;
    pointer-events: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6),
      inset 0px 2px 1px rgba(255, 255, 255, 0.2),
      inset 0px -2px 1px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }
  </style>

  <script>
    let canvas, ctx, fishArray;
    function init() {
      canvas = document.getElementById("myCanvas");
      ctx = canvas.getContext("2d");

      const fishCount = 10;
      fishArray = generateFish(fishCount);

      draw();
    }

    function generateFish(count) {
      const fishArray = [];
      for (let i = 0; i < count; i++) {
        const newFish = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 5,
          speed: Math.random() * 1 + 0.1,
          direction: Math.random() * 2 * Math.PI,
          color: \`hsl(\${Math.random() * 360}, 100%, 50%)\`
        };
        fishArray.push(newFish);
      }

      return fishArray;
    }
    
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const fish of fishArray) {
        let size;
        if (Math.cos(fish.direction) < 0) {
          size = -fish.size;
        }
        else {
          size = fish.size;
        }


        //draw tail
        ctx.beginPath();
        ctx.moveTo(fish.x - size, fish.y);
        ctx.lineTo(fish.x - size * 2, fish.y - size / 2);
        ctx.lineTo(fish.x - size * 2, fish.y + size / 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = fish.color;
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(fish.x, fish.y, fish.size * 1.5, fish.size / 3, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = fish.color;
        ctx.fill();

        //draw eyes
        ctx.beginPath();
        ctx.ellipse(fish.x - fish.size * Math.sign(-Math.cos(fish.direction)) * 0.75, fish.y, (fish.size * 1.5) / 4, (fish.size / 1.5) / 4, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(fish.x - fish.size * Math.sign(-Math.cos(fish.direction)) * 0.75, fish.y, (fish.size * 1.5) / 6, (fish.size / 1.5) / 6, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();

        fish.x += Math.cos(fish.direction) * fish.speed;
        fish.y += Math.sin(fish.direction) * fish.speed / 2;
        fish.direction += (Math.random() - 0.5) * 0.01;

        if (fish.x < 0 || fish.x > canvas.width) {
          fish.direction = Math.PI - fish.direction;
        }
        if (fish.y < 0 || fish.y > canvas.height) {
          fish.direction = -fish.direction;
        }
      }
      
      requestAnimationFrame(draw);
    }

    window.onload = init;
  </script>
</head>

<body>
  <main>
    <button>
      <h1>Frutiger Aero</h1>
    </button>
    <article>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sagittis suscipit. Vestibulum convallis tempor leo. Vivamus ut posuere nunc. Curabitur vehicula nisl ut arcu viverra pretium. Phasellus vel orci sit amet magna fringilla eleifend nec eget erat. Vestibulum vestibulum ut risus in egestas. Nunc efficitur, tellus sit amet accumsan varius, nulla libero tristique est, eget blandit nisl nibh id orci. Donec ac suscipit sapien. Praesent sed est justo. Phasellus sodales auctor hendrerit. Nulla consequat nisi at nibh rutrum pulvinar. In euismod dolor sed justo pellentesque, nec facilisis nisi mattis. Quisque tempor velit at bibendum tincidunt. Maecenas sagittis, enim vel semper mollis, magna risus tristique lectus, at sollicitudin orci lectus et sapien. Morbi dolor mauris, egestas vel fermentum sit amet, mollis vitae odio. Aliquam ut eros fringilla, egestas massa vel, facilisis odio.</p>
    </article>
    <section class="aero-glass">
      <article class="window">
        <div class="window-header"></div>
        <section class="window-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sagittis suscipit. Vestibulum convallis tempor leo. Vivamus ut posuere nunc. Curabitur vehicula nisl ut arcu viverra pretium. Phasellus vel orci sit amet magna fringilla eleifend nec eget erat. Vestibulum vestibulum ut risus in egestas. Nunc efficitur, tellus sit amet accumsan varius, nulla libero tristique est, eget blandit nisl nibh id orci. Donec ac suscipit sapien. Praesent sed est justo. Phasellus sodales auctor hendrerit. Nulla consequat nisi at nibh rutrum pulvinar. In euismod dolor sed justo pellentesque, nec facilisis nisi mattis. Quisque tempor velit at bibendum tincidunt. Maecenas sagittis, enim vel semper mollis, magna risus tristique lectus, at sollicitudin orci lectus et sapien. Morbi dolor mauris, egestas vel fermentum sit amet, mollis vitae odio. Aliquam ut eros fringilla, egestas massa vel, facilisis odio.</p></section
      </article>
    </section>
    <section class="overlay-container aero-green">
      <canvas class="overlay" id="myCanvas" width="300" height="300">
      </canvas>
      <article class="window no-margin-bottom">
      <section class="window-content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sagittis suscipit. Vestibulum convallis tempor leo. Vivamus ut posuere nunc. Curabitur vehicula nisl ut arcu viverra pretium. Phasellus vel orci sit amet magna fringilla eleifend nec eget erat. Vestibulum vestibulum ut risus in egestas. Nunc efficitur, tellus sit amet accumsan varius, nulla libero tristique est, eget blandit nisl nibh id orci. Donec ac suscipit sapien. Praesent sed est justo. Phasellus sodales auctor hendrerit. Nulla consequat nisi at nibh rutrum pulvinar. In euismod dolor sed justo pellentesque, nec facilisis nisi mattis. Quisque tempor velit at bibendum tincidunt. Maecenas sagittis, enim vel semper mollis, magna risus tristique lectus, at sollicitudin orci lectus et sapien. Morbi dolor mauris, egestas vel fermentum sit amet, mollis vitae odio. Aliquam ut eros fringilla, egestas massa vel, facilisis odio.</p></section
    </section>
  </main>
</body>

</html>
`;

  return (
    <Sandpack 
      template="static"
      theme={currentTheme == "dark" ? "dark" : "auto"}
      files={
        props.styleTemplate == "aero" ? {"/index.html": aeroTemplate} : {}
      }
    />
  );
}
