gsap.registerPlugin(Draggable);

const stars = document.querySelectorAll(".star");
let draggableInstances = [];

function createDraggables() {
  draggableInstances.forEach((instance) => instance.kill());
  draggableInstances = [];

  stars.forEach((star) => {
    const instance = Draggable.create(star, {
      type: "x,y",
      bounds: ".star-container",
      inertia: true,
      onDrag: function () {
        const x = (this.x / window.innerWidth) * 100;
        const y = (this.y / window.innerHeight) * 100;
        this.target.style.transform = `translate(${x}vw, ${y}vh)`;
      },
    })[0];
    draggableInstances.push(instance);
  });
}

createDraggables();

window.addEventListener("resize", gsap.utils.debounce(createDraggables, 250));
