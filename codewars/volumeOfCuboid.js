/**
 * Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
 * volume of cuboid is weight * height * length

 * In geometry, a cuboid is a hexahedron, a six-faced solid. Its faces are quadrilaterals. Cuboid means "like a cube", in the sense that by adjusting the length of the edges or the angles between edges and faces a cuboid can be transformed into a cube.
 */

function cuboidVolume(length, height, width) {
  return length * height * width;
}

console.log(`cuboidVolume (8, 11, 9) will return ${cuboidVolume(8, 11, 9)}`);
