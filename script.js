// MOVEMENT IS COUNTER CLOCKWISE STARTING FROM LEFT e.g. left is top left -> bottom left

const SIDE_OPTIONS = ["left", "bottom", "right", "top"];

// get a specific side of a window
function getWindowSide(windowEntity, side) {
  if (!SIDE_OPTIONS.includes(side)) return new Error("invalid side input");

  const points = windowEntity.points.map((point, pointIndex) => {
    if (windowSides[side].includes(pointIndex)) return point;
  });

  return points.filter((p) => p);
}

// create rectangle from 4 lines stored in window object
function drawSides(windowEntity) {
  SIDE_OPTIONS.forEach((option) => {
    console.log(`${option} side:`);
    console.log(getWindowSide(windowEntity, option));
  });
}

var stage = new Konva.Stage({
  container: "container", // id of container <div>
  width: 500,
  height: 500,
});

var layer = new Konva.Layer();

// array of indexes that represent rectangle sides
windowSides = {
  left: [0, 1, 2, 3], // top left to bottom left
  bottom: [2, 3, 4, 5], // bottom left to bottom right
  right: [4, 5, 6, 7], // bottom right to top right
  top: [6, 7, 0, 1], // top right to top left
};

let windowEntity = {
  points: [25, 25, 25, 75, 75, 75, 75, 25, 25, 25],
};

var line = new Konva.Line({
  points: windowEntity.points,
  stroke: "red",
  strokeWidth: 2,
});

layer.add(line);

stage.add(layer);

layer.draw();
