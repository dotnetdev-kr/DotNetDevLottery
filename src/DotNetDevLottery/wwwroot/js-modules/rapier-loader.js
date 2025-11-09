// Rapier2D loader without TypeScript
// This module loads the Rapier2D physics engine directly from the library

let rapierModule = null;

export async function getRapier() {
  if (!rapierModule) {
    // Import the rapier2d library directly
    rapierModule = await import('/lib/rapier2d/rapier.js');
  }
  return rapierModule;
}
