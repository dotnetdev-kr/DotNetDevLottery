// Rapier coordinate utility - Plain JavaScript version
// Converts between screen coordinates and Rapier physics coordinates

const M_PER_PX = 1 / 50;

export const coords = {
  toRapier: {
    x(distance) {
      return distance * M_PER_PX;
    },
    y(distance) {
      return -distance * M_PER_PX;
    },
    length(distance) {
      return distance * M_PER_PX;
    },
    lengths(w, h) {
      return [w * M_PER_PX, h * M_PER_PX];
    },
    angle(angle) {
      return -angle;
    },
    vector(x, y) {
      return [x * M_PER_PX, -y * M_PER_PX];
    },
    vectorObject(x, y) {
      return { x: x * M_PER_PX, y: -y * M_PER_PX };
    },
  },
  fromBody: {
    vector(body) {
      const t = body.translation();
      return [t.x / M_PER_PX, -t.y / M_PER_PX];
    },
  },
};
