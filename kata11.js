const PI = 3.14159;

const sphereVolume = function(radius) {
  let result = 0;
  if (radius > 0) {
    result = 4 / 3 * PI * Math.pow(radius, 3);
  }
  return result;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  let result = 0;
  if (radius > 0 && height) {
    result = PI * Math.pow(radius, 2) * height / 3;
  }
  return result;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  let result = 0;
  if (height > 0 && width > 0 && depth > 0) {
    result = width * depth * height;
  }
  return result;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let result = 0;
  for (let i = 0; i < solids.length; i++) {
    if (solids[i]['type'] === 'sphere') {
      result += sphereVolume(solids[i]['radius']);
    } else if (solids[i]['type'] === 'cone') {
      result += coneVolume(solids[i]['radius'], solids[i]['height']);
    } else if (solids[i]['type'] === 'prism') {
      result += prismVolume(solids[i]['height'], solids[i]['width'], solids[i]['depth']);
    }
  }
  return result;
};


const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);