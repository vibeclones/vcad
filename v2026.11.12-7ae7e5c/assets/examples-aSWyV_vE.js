import { n as e } from "./rolldown-runtime-COiEfhsA.js";
var t = { id: `plate`, name: `Mounting Plate`, description: `A plate with a center hole and mounting holes. Demonstrates boolean difference operations.`, difficulty: `beginner`, thumbnail: `/assets/plate.png`, features: [`Primitives`, `Transforms`, `Boolean Difference`], unlockAfter: 0, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: null, op: { type: `Cube`, size: { x: 80, y: 60, z: 6 } } }, 2: { id: 2, name: null, op: { type: `Cylinder`, radius: 6, height: 20, segments: 32 } }, 3: { id: 3, name: null, op: { type: `Rotate`, child: 2, angles: { x: 0, y: 0, z: 0 } } }, 4: { id: 4, name: null, op: { type: `Translate`, child: 3, offset: { x: 40, y: 30, z: -7 } } }, 10: { id: 10, name: null, op: { type: `Cylinder`, radius: 2, height: 20, segments: 24 } }, 11: { id: 11, name: null, op: { type: `Rotate`, child: 10, angles: { x: 0, y: 0, z: 0 } } }, 20: { id: 20, name: null, op: { type: `Translate`, child: 11, offset: { x: 8, y: 8, z: -7 } } }, 21: { id: 21, name: null, op: { type: `Translate`, child: 11, offset: { x: 72, y: 8, z: -7 } } }, 22: { id: 22, name: null, op: { type: `Translate`, child: 11, offset: { x: 8, y: 52, z: -7 } } }, 23: { id: 23, name: null, op: { type: `Translate`, child: 11, offset: { x: 72, y: 52, z: -7 } } }, 24: { id: 24, name: null, op: { type: `Translate`, child: 11, offset: { x: 8, y: 30, z: -7 } } }, 25: { id: 25, name: null, op: { type: `Translate`, child: 11, offset: { x: 72, y: 30, z: -7 } } }, 26: { id: 26, name: null, op: { type: `Translate`, child: 11, offset: { x: 40, y: 8, z: -7 } } }, 27: { id: 27, name: null, op: { type: `Translate`, child: 11, offset: { x: 40, y: 52, z: -7 } } }, 30: { id: 30, name: null, op: { type: `Union`, left: 4, right: 20 } }, 31: { id: 31, name: null, op: { type: `Union`, left: 30, right: 21 } }, 32: { id: 32, name: null, op: { type: `Union`, left: 31, right: 22 } }, 33: { id: 33, name: null, op: { type: `Union`, left: 32, right: 23 } }, 34: { id: 34, name: null, op: { type: `Union`, left: 33, right: 24 } }, 35: { id: 35, name: null, op: { type: `Union`, left: 34, right: 25 } }, 36: { id: 36, name: null, op: { type: `Union`, left: 35, right: 26 } }, 37: { id: 37, name: null, op: { type: `Union`, left: 36, right: 27 } }, 40: { id: 40, name: null, op: { type: `Difference`, left: 1, right: 37 } }, 50: { id: 50, name: null, op: { type: `Scale`, child: 40, factor: { x: 1, y: 1, z: 1 } } }, 51: { id: 51, name: null, op: { type: `Rotate`, child: 50, angles: { x: 0, y: 0, z: 0 } } }, 52: { id: 52, name: `Mounting Plate`, op: { type: `Translate`, child: 51, offset: { x: -40, y: -30, z: 0 } } } }, materials: { default: { name: `Default`, color: [0.55, 0.55, 0.55], metallic: 0, roughness: 0.7 } }, part_materials: {}, roots: [{ root: 52, material: `default` }] }, parts: [{ id: `part-1`, name: `Mounting Plate`, kind: `cube`, primitiveNodeId: 1, scaleNodeId: 50, rotateNodeId: 51, translateNodeId: 52 }], consumedParts: {}, nextNodeId: 55, nextPartNum: 2 } }, n = { id: `bracket`, name: `Bracket`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: null, op: { type: `Cube`, size: { x: 60, y: 40, z: 4 } } }, 2: { id: 2, name: null, op: { type: `Cube`, size: { x: 60, y: 4, z: 36 } } }, 3: { id: 3, name: null, op: { type: `Translate`, child: 2, offset: { x: 0, y: 36, z: 4 } } }, 4: { id: 4, name: null, op: { type: `Union`, left: 1, right: 3 } }, 10: { id: 10, name: null, op: { type: `Cylinder`, radius: 2.5, height: 20, segments: 32 } }, 12: { id: 12, name: null, op: { type: `Rotate`, child: 10, angles: { x: 0, y: 0, z: 0 } } }, 20: { id: 20, name: null, op: { type: `Translate`, child: 12, offset: { x: 12.5, y: 20, z: -7 } } }, 21: { id: 21, name: null, op: { type: `Translate`, child: 12, offset: { x: 47.5, y: 20, z: -7 } } }, 11: { id: 11, name: null, op: { type: `Rotate`, child: 10, angles: { x: -90, y: 0, z: 0 } } }, 22: { id: 22, name: null, op: { type: `Translate`, child: 11, offset: { x: 12.5, y: 28, z: 22 } } }, 23: { id: 23, name: null, op: { type: `Translate`, child: 11, offset: { x: 47.5, y: 28, z: 22 } } }, 30: { id: 30, name: null, op: { type: `Union`, left: 20, right: 21 } }, 31: { id: 31, name: null, op: { type: `Union`, left: 30, right: 22 } }, 32: { id: 32, name: null, op: { type: `Union`, left: 31, right: 23 } }, 40: { id: 40, name: null, op: { type: `Difference`, left: 4, right: 32 } }, 50: { id: 50, name: null, op: { type: `Scale`, child: 40, factor: { x: 1, y: 1, z: 1 } } }, 51: { id: 51, name: null, op: { type: `Rotate`, child: 50, angles: { x: 0, y: 0, z: 0 } } }, 52: { id: 52, name: `L-Bracket`, op: { type: `Translate`, child: 51, offset: { x: -30, y: -20, z: 0 } } } }, materials: { default: { name: `Default`, color: [0.55, 0.55, 0.55], metallic: 0, roughness: 0.7 } }, part_materials: {}, roots: [{ root: 52, material: `default` }] }, parts: [{ id: `part-1`, name: `L-Bracket`, kind: `cube`, primitiveNodeId: 1, scaleNodeId: 50, rotateNodeId: 51, translateNodeId: 52 }], consumedParts: {}, nextNodeId: 53, nextPartNum: 2 } }, r = { id: `mascot`, name: `Mascot`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: null, op: { type: `Sphere`, radius: 14, segments: 32 } }, 2: { id: 2, name: null, op: { type: `Scale`, child: 1, factor: { x: 1, y: 1, z: 1 } } }, 3: { id: 3, name: null, op: { type: `Rotate`, child: 2, angles: { x: 0, y: 0, z: 0 } } }, 4: { id: 4, name: `Head`, op: { type: `Translate`, child: 3, offset: { x: 0, y: 0, z: 32 } } }, 5: { id: 5, name: null, op: { type: `Sphere`, radius: 10, segments: 24 } }, 6: { id: 6, name: null, op: { type: `Scale`, child: 5, factor: { x: 1, y: 0.9, z: 1.3 } } }, 7: { id: 7, name: null, op: { type: `Rotate`, child: 6, angles: { x: 0, y: 0, z: 0 } } }, 8: { id: 8, name: `Body`, op: { type: `Translate`, child: 7, offset: { x: 0, y: 0, z: 12 } } }, 9: { id: 9, name: null, op: { type: `Sphere`, radius: 4.5, segments: 20 } }, 10: { id: 10, name: null, op: { type: `Scale`, child: 9, factor: { x: 1, y: 1, z: 1.1 } } }, 11: { id: 11, name: null, op: { type: `Rotate`, child: 10, angles: { x: 0, y: 0, z: 0 } } }, 12: { id: 12, name: `Left Eye`, op: { type: `Translate`, child: 11, offset: { x: -5, y: 11, z: 34 } } }, 13: { id: 13, name: null, op: { type: `Sphere`, radius: 4.5, segments: 20 } }, 14: { id: 14, name: null, op: { type: `Scale`, child: 13, factor: { x: 1, y: 1, z: 1.1 } } }, 15: { id: 15, name: null, op: { type: `Rotate`, child: 14, angles: { x: 0, y: 0, z: 0 } } }, 16: { id: 16, name: `Right Eye`, op: { type: `Translate`, child: 15, offset: { x: 5, y: 11, z: 34 } } }, 17: { id: 17, name: null, op: { type: `Sphere`, radius: 2.2, segments: 16 } }, 18: { id: 18, name: null, op: { type: `Scale`, child: 17, factor: { x: 1, y: 1, z: 1 } } }, 19: { id: 19, name: null, op: { type: `Rotate`, child: 18, angles: { x: 0, y: 0, z: 0 } } }, 20: { id: 20, name: `Left Pupil`, op: { type: `Translate`, child: 19, offset: { x: -5, y: 14.5, z: 35 } } }, 21: { id: 21, name: null, op: { type: `Sphere`, radius: 2.2, segments: 16 } }, 22: { id: 22, name: null, op: { type: `Scale`, child: 21, factor: { x: 1, y: 1, z: 1 } } }, 23: { id: 23, name: null, op: { type: `Rotate`, child: 22, angles: { x: 0, y: 0, z: 0 } } }, 24: { id: 24, name: `Right Pupil`, op: { type: `Translate`, child: 23, offset: { x: 5, y: 14.5, z: 35 } } }, 33: { id: 33, name: null, op: { type: `Sphere`, radius: 1.8, segments: 12 } }, 34: { id: 34, name: null, op: { type: `Scale`, child: 33, factor: { x: 1.2, y: 0.3, z: 0.7 } } }, 35: { id: 35, name: null, op: { type: `Rotate`, child: 34, angles: { x: 0, y: 0, z: 0 } } }, 36: { id: 36, name: `Left Cheek`, op: { type: `Translate`, child: 35, offset: { x: -9, y: 13, z: 30 } } }, 37: { id: 37, name: null, op: { type: `Sphere`, radius: 1.8, segments: 12 } }, 38: { id: 38, name: null, op: { type: `Scale`, child: 37, factor: { x: 1.2, y: 0.3, z: 0.7 } } }, 39: { id: 39, name: null, op: { type: `Rotate`, child: 38, angles: { x: 0, y: 0, z: 0 } } }, 40: { id: 40, name: `Right Cheek`, op: { type: `Translate`, child: 39, offset: { x: 9, y: 13, z: 30 } } }, 41: { id: 41, name: null, op: { type: `Cylinder`, radius: 1, height: 8, segments: 12 } }, 42: { id: 42, name: null, op: { type: `Scale`, child: 41, factor: { x: 1, y: 1, z: 1 } } }, 43: { id: 43, name: null, op: { type: `Rotate`, child: 42, angles: { x: 0, y: 0, z: 0 } } }, 44: { id: 44, name: `Antenna Stem`, op: { type: `Translate`, child: 43, offset: { x: 0, y: 0, z: 46 } } }, 45: { id: 45, name: null, op: { type: `Sphere`, radius: 2.5, segments: 16 } }, 46: { id: 46, name: null, op: { type: `Scale`, child: 45, factor: { x: 1, y: 1, z: 1 } } }, 47: { id: 47, name: null, op: { type: `Rotate`, child: 46, angles: { x: 0, y: 0, z: 0 } } }, 48: { id: 48, name: `Antenna Tip`, op: { type: `Translate`, child: 47, offset: { x: 0, y: 0, z: 56 } } }, 49: { id: 49, name: null, op: { type: `Sphere`, radius: 4, segments: 16 } }, 50: { id: 50, name: null, op: { type: `Scale`, child: 49, factor: { x: 1, y: 1, z: 1 } } }, 51: { id: 51, name: null, op: { type: `Rotate`, child: 50, angles: { x: 0, y: 0, z: 0 } } }, 52: { id: 52, name: `Left Hand`, op: { type: `Translate`, child: 51, offset: { x: -13, y: 0, z: 12 } } }, 53: { id: 53, name: null, op: { type: `Sphere`, radius: 4, segments: 16 } }, 54: { id: 54, name: null, op: { type: `Scale`, child: 53, factor: { x: 1, y: 1, z: 1 } } }, 55: { id: 55, name: null, op: { type: `Rotate`, child: 54, angles: { x: 0, y: 0, z: 0 } } }, 56: { id: 56, name: `Right Hand`, op: { type: `Translate`, child: 55, offset: { x: 13, y: 0, z: 12 } } }, 57: { id: 57, name: null, op: { type: `Cylinder`, radius: 4, height: 3, segments: 16 } }, 58: { id: 58, name: null, op: { type: `Scale`, child: 57, factor: { x: 1, y: 1.2, z: 1 } } }, 59: { id: 59, name: null, op: { type: `Rotate`, child: 58, angles: { x: 0, y: 0, z: 0 } } }, 60: { id: 60, name: `Left Foot`, op: { type: `Translate`, child: 59, offset: { x: -5, y: 0, z: 0 } } }, 61: { id: 61, name: null, op: { type: `Cylinder`, radius: 4, height: 3, segments: 16 } }, 62: { id: 62, name: null, op: { type: `Scale`, child: 61, factor: { x: 1, y: 1.2, z: 1 } } }, 63: { id: 63, name: null, op: { type: `Rotate`, child: 62, angles: { x: 0, y: 0, z: 0 } } }, 64: { id: 64, name: `Right Foot`, op: { type: `Translate`, child: 63, offset: { x: 5, y: 0, z: 0 } } }, 65: { id: 65, name: null, op: { type: `Sphere`, radius: 1.2, segments: 12 } }, 66: { id: 66, name: null, op: { type: `Scale`, child: 65, factor: { x: 1, y: 1, z: 1 } } }, 67: { id: 67, name: null, op: { type: `Rotate`, child: 66, angles: { x: 0, y: 0, z: 0 } } }, 68: { id: 68, name: `Belly Button`, op: { type: `Translate`, child: 67, offset: { x: 0, y: 9.5, z: 8 } } } }, materials: { head: { name: `Head`, color: [0.45, 0.78, 0.95], metallic: 0.1, roughness: 0.4 }, body: { name: `Body`, color: [0.4, 0.72, 0.9], metallic: 0.1, roughness: 0.4 }, eye_white: { name: `Eye White`, color: [1, 1, 1], metallic: 0, roughness: 0.15 }, pupil: { name: `Pupil`, color: [0.15, 0.15, 0.2], metallic: 0, roughness: 0.1 }, cheek: { name: `Cheek`, color: [0.95, 0.55, 0.6], metallic: 0, roughness: 0.7 }, antenna: { name: `Antenna`, color: [0.95, 0.7, 0.2], metallic: 0.5, roughness: 0.3 }, limb: { name: `Limb`, color: [0.92, 0.92, 0.95], metallic: 0, roughness: 0.4 }, foot: { name: `Foot`, color: [0.35, 0.4, 0.5], metallic: 0.2, roughness: 0.5 }, accent: { name: `Accent`, color: [0.95, 0.5, 0.4], metallic: 0.2, roughness: 0.4 } }, part_materials: {}, roots: [{ root: 4, material: `head` }, { root: 8, material: `body` }, { root: 12, material: `eye_white` }, { root: 16, material: `eye_white` }, { root: 20, material: `pupil` }, { root: 24, material: `pupil` }, { root: 36, material: `cheek` }, { root: 40, material: `cheek` }, { root: 44, material: `limb` }, { root: 48, material: `antenna` }, { root: 52, material: `limb` }, { root: 56, material: `limb` }, { root: 60, material: `foot` }, { root: 64, material: `foot` }, { root: 68, material: `antenna` }] }, parts: [{ id: `part-1`, name: `Head`, kind: `sphere`, primitiveNodeId: 1, scaleNodeId: 2, rotateNodeId: 3, translateNodeId: 4 }, { id: `part-2`, name: `Body`, kind: `sphere`, primitiveNodeId: 5, scaleNodeId: 6, rotateNodeId: 7, translateNodeId: 8 }, { id: `part-3`, name: `Left Eye`, kind: `sphere`, primitiveNodeId: 9, scaleNodeId: 10, rotateNodeId: 11, translateNodeId: 12 }, { id: `part-4`, name: `Right Eye`, kind: `sphere`, primitiveNodeId: 13, scaleNodeId: 14, rotateNodeId: 15, translateNodeId: 16 }, { id: `part-5`, name: `Left Pupil`, kind: `sphere`, primitiveNodeId: 17, scaleNodeId: 18, rotateNodeId: 19, translateNodeId: 20 }, { id: `part-6`, name: `Right Pupil`, kind: `sphere`, primitiveNodeId: 21, scaleNodeId: 22, rotateNodeId: 23, translateNodeId: 24 }, { id: `part-7`, name: `Left Cheek`, kind: `sphere`, primitiveNodeId: 33, scaleNodeId: 34, rotateNodeId: 35, translateNodeId: 36 }, { id: `part-8`, name: `Right Cheek`, kind: `sphere`, primitiveNodeId: 37, scaleNodeId: 38, rotateNodeId: 39, translateNodeId: 40 }, { id: `part-9`, name: `Antenna Stem`, kind: `cylinder`, primitiveNodeId: 41, scaleNodeId: 42, rotateNodeId: 43, translateNodeId: 44 }, { id: `part-10`, name: `Antenna Tip`, kind: `sphere`, primitiveNodeId: 45, scaleNodeId: 46, rotateNodeId: 47, translateNodeId: 48 }, { id: `part-11`, name: `Left Hand`, kind: `sphere`, primitiveNodeId: 49, scaleNodeId: 50, rotateNodeId: 51, translateNodeId: 52 }, { id: `part-12`, name: `Right Hand`, kind: `sphere`, primitiveNodeId: 53, scaleNodeId: 54, rotateNodeId: 55, translateNodeId: 56 }, { id: `part-13`, name: `Left Foot`, kind: `cylinder`, primitiveNodeId: 57, scaleNodeId: 58, rotateNodeId: 59, translateNodeId: 60 }, { id: `part-14`, name: `Right Foot`, kind: `cylinder`, primitiveNodeId: 61, scaleNodeId: 62, rotateNodeId: 63, translateNodeId: 64 }, { id: `part-15`, name: `Belly Button`, kind: `sphere`, primitiveNodeId: 65, scaleNodeId: 66, rotateNodeId: 67, translateNodeId: 68 }], consumedParts: {}, nextNodeId: 69, nextPartNum: 16 } }, i = { id: `container`, name: `Container`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Container Solid`, op: { type: `Cube`, size: { x: 40, y: 30, z: 25 } } }, 2: { id: 2, name: `Shell (3mm walls)`, op: { type: `Shell`, child: 1, thickness: 3 } }, 3: { id: 3, name: `Container Scale`, op: { type: `Scale`, child: 2, factor: { x: 1, y: 1, z: 1 } } }, 4: { id: 4, name: `Container Rotate`, op: { type: `Rotate`, child: 3, angles: { x: 0, y: 0, z: 0 } } }, 5: { id: 5, name: `Container Body`, op: { type: `Translate`, child: 4, offset: { x: 0, y: 0, z: 0 } } }, 6: { id: 6, name: `Handle Bar Cylinder`, op: { type: `Cylinder`, radius: 2, height: 24, segments: 16 } }, 7: { id: 7, name: `Handle Bar Scale`, op: { type: `Scale`, child: 6, factor: { x: 1, y: 1, z: 1 } } }, 8: { id: 8, name: `Handle Bar Rotate (X=-90\xB0)`, op: { type: `Rotate`, child: 7, angles: { x: -90, y: 0, z: 0 } } }, 9: { id: 9, name: `Handle Bar`, op: { type: `Translate`, child: 8, offset: { x: 0, y: 0, z: 32 } } }, 10: { id: 10, name: `Left Support Cylinder`, op: { type: `Cylinder`, radius: 2, height: 7, segments: 16 } }, 11: { id: 11, name: `Left Support Scale`, op: { type: `Scale`, child: 10, factor: { x: 1, y: 1, z: 1 } } }, 12: { id: 12, name: `Left Support Rotate`, op: { type: `Rotate`, child: 11, angles: { x: 0, y: 0, z: 0 } } }, 13: { id: 13, name: `Left Support`, op: { type: `Translate`, child: 12, offset: { x: -12, y: 0, z: 25 } } }, 14: { id: 14, name: `Right Support Cylinder`, op: { type: `Cylinder`, radius: 2, height: 7, segments: 16 } }, 15: { id: 15, name: `Right Support Scale`, op: { type: `Scale`, child: 14, factor: { x: 1, y: 1, z: 1 } } }, 16: { id: 16, name: `Right Support Rotate`, op: { type: `Rotate`, child: 15, angles: { x: 0, y: 0, z: 0 } } }, 17: { id: 17, name: `Right Support`, op: { type: `Translate`, child: 16, offset: { x: 12, y: 0, z: 25 } } }, 18: { id: 18, name: `Rim Outer Cylinder`, op: { type: `Cylinder`, radius: 22, height: 2, segments: 32 } }, 19: { id: 19, name: `Rim Inner Cylinder`, op: { type: `Cylinder`, radius: 19, height: 2.5, segments: 32 } }, 20: { id: 20, name: `Rim Ring (Difference)`, op: { type: `Difference`, left: 18, right: 19 } }, 21: { id: 21, name: `Rim Scale (elliptical)`, op: { type: `Scale`, child: 20, factor: { x: 0.91, y: 0.68, z: 1 } } }, 22: { id: 22, name: `Rim Rotate`, op: { type: `Rotate`, child: 21, angles: { x: 0, y: 0, z: 0 } } }, 23: { id: 23, name: `Rim`, op: { type: `Translate`, child: 22, offset: { x: 0, y: 0, z: 24 } } } }, materials: { container: { name: `Container`, color: [0.2, 0.6, 0.85], metallic: 0, roughness: 0.4 }, handle: { name: `Handle`, color: [0.3, 0.3, 0.35], metallic: 0.1, roughness: 0.5 }, rim: { name: `Rim`, color: [0.25, 0.55, 0.8], metallic: 0, roughness: 0.35 } }, part_materials: {}, roots: [{ root: 5, material: `container` }, { root: 9, material: `handle` }, { root: 13, material: `handle` }, { root: 17, material: `handle` }, { root: 23, material: `rim` }], partDefs: { body: { id: `body`, name: `Container Body`, root: 5, defaultMaterial: `container` }, handleBar: { id: `handleBar`, name: `Handle Bar`, root: 9, defaultMaterial: `handle` }, leftSupport: { id: `leftSupport`, name: `Left Support`, root: 13, defaultMaterial: `handle` }, rightSupport: { id: `rightSupport`, name: `Right Support`, root: 17, defaultMaterial: `handle` }, rim: { id: `rim`, name: `Rim`, root: 23, defaultMaterial: `rim` } }, instances: [{ id: `body-1`, partDefId: `body`, name: `Container Body`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }, { id: `handleBar-1`, partDefId: `handleBar`, name: `Handle Bar`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }, { id: `leftSupport-1`, partDefId: `leftSupport`, name: `Left Support`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }, { id: `rightSupport-1`, partDefId: `rightSupport`, name: `Right Support`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }, { id: `rim-1`, partDefId: `rim`, name: `Rim`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `body-1` }, parts: [{ id: `part-1`, name: `Container`, kind: `cube`, primitiveNodeId: 1, scaleNodeId: 3, rotateNodeId: 4, translateNodeId: 5 }, { id: `part-2`, name: `Handle Bar`, kind: `cylinder`, primitiveNodeId: 6, scaleNodeId: 7, rotateNodeId: 8, translateNodeId: 9 }, { id: `part-3`, name: `Left Support`, kind: `cylinder`, primitiveNodeId: 10, scaleNodeId: 11, rotateNodeId: 12, translateNodeId: 13 }, { id: `part-4`, name: `Right Support`, kind: `cylinder`, primitiveNodeId: 14, scaleNodeId: 15, rotateNodeId: 16, translateNodeId: 17 }], consumedParts: {}, nextNodeId: 24, nextPartNum: 5 } }, a = { id: `flange`, name: `Flange`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Plate Cylinder`, op: { type: `Cylinder`, radius: 50, height: 10, segments: 64 } }, 2: { id: 2, name: `Center Bore Cylinder`, op: { type: `Cylinder`, radius: 15, height: 20, segments: 32 } }, 3: { id: 3, name: `Center Bore Positioned`, op: { type: `Translate`, child: 2, offset: { x: 0, y: -5, z: 0 } } }, 4: { id: 4, name: `Plate with Center Bore`, op: { type: `Difference`, left: 1, right: 3 } }, 10: { id: 10, name: `Bolt Hole Template`, op: { type: `Cylinder`, radius: 4, height: 20, segments: 24 } }, 11: { id: 11, name: `Bolt Hole at Radius`, op: { type: `Translate`, child: 10, offset: { x: 35, y: -5, z: 0 } } }, 12: { id: 12, name: `Bolt Hole Pattern`, op: { type: `CircularPattern`, child: 11, axis_origin: { x: 0, y: 0, z: 0 }, axis_dir: { x: 0, y: 0, z: 1 }, count: 6, angle_deg: 360 } }, 20: { id: 20, name: `Flange with All Holes`, op: { type: `Difference`, left: 4, right: 12 } }, 30: { id: 30, name: `Scale`, op: { type: `Scale`, child: 20, factor: { x: 1, y: 1, z: 1 } } }, 31: { id: 31, name: `Rotate`, op: { type: `Rotate`, child: 30, angles: { x: 0, y: 0, z: 0 } } }, 32: { id: 32, name: `Flange Plate`, op: { type: `Translate`, child: 31, offset: { x: 0, y: 0, z: 0 } } } }, materials: { steel: { name: `Steel`, color: [0.6, 0.6, 0.65], metallic: 0.9, roughness: 0.4 } }, part_materials: {}, roots: [{ root: 32, material: `steel` }], partDefs: { flange: { id: `flange`, name: `Flange Plate`, root: 32, defaultMaterial: `steel` } }, instances: [{ id: `flange-1`, partDefId: `flange`, name: `Flange Plate`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `flange-1` }, parts: [{ id: `part-1`, name: `Flange Plate`, kind: `cylinder`, primitiveNodeId: 1, scaleNodeId: 30, rotateNodeId: 31, translateNodeId: 32 }], consumedParts: {}, nextNodeId: 33, nextPartNum: 2 } }, o = { id: `ribbon`, name: `Twisted Ribbon`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Ribbon Profile (10x2mm)`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 0 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: [{ type: `Line`, start: { x: -5, y: -1 }, end: { x: 5, y: -1 } }, { type: `Line`, start: { x: 5, y: -1 }, end: { x: 5, y: 1 } }, { type: `Line`, start: { x: 5, y: 1 }, end: { x: -5, y: 1 } }, { type: `Line`, start: { x: -5, y: 1 }, end: { x: -5, y: -1 } }] } }, 2: { id: 2, name: `Twisted Line Sweep`, op: { type: `Sweep`, sketch: 1, path: { type: `Line`, start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 0, z: 80 } }, twist_angle: 4 * Math.PI, scale_start: 1, scale_end: 1 } }, 3: { id: 3, name: `Scale`, op: { type: `Scale`, child: 2, factor: { x: 1, y: 1, z: 1 } } }, 4: { id: 4, name: `Rotate`, op: { type: `Rotate`, child: 3, angles: { x: 0, y: 0, z: 0 } } }, 5: { id: 5, name: `Twisted Ribbon`, op: { type: `Translate`, child: 4, offset: { x: 0, y: 0, z: -40 } } } }, materials: { copper: { name: `Copper`, color: [0.95, 0.64, 0.54], metallic: 0.9, roughness: 0.25 } }, part_materials: {}, roots: [{ root: 5, material: `copper` }], partDefs: { ribbon: { id: `ribbon`, name: `Twisted Ribbon`, root: 5, defaultMaterial: `copper` } }, instances: [{ id: `ribbon-1`, partDefId: `ribbon`, name: `Twisted Ribbon`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `ribbon-1` }, parts: [{ id: `part-1`, name: `Twisted Ribbon`, kind: `sweep`, sketchNodeId: 1, sweepNodeId: 2, scaleNodeId: 3, rotateNodeId: 4, translateNodeId: 5 }], consumedParts: {}, nextNodeId: 6, nextPartNum: 2 } }, s = 1.5, c = 16, l = [];
for (let e2 = 0; e2 < c; e2++) {
  let t2 = 2 * Math.PI * e2 / c, n2 = 2 * Math.PI * (e2 + 1) / c;
  l.push({ type: `Arc`, start: { x: s * Math.cos(t2), y: s * Math.sin(t2) }, end: { x: s * Math.cos(n2), y: s * Math.sin(n2) }, center: { x: 0, y: 0 }, ccw: true });
}
var u = { id: `spring`, name: `Spring`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Wire Cross-Section`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 0 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: l } }, 2: { id: 2, name: `Helix Sweep`, op: { type: `Sweep`, sketch: 1, path: { type: `Helix`, radius: 10, pitch: 8, height: 50, turns: 6.25 } } }, 3: { id: 3, name: `Scale`, op: { type: `Scale`, child: 2, factor: { x: 1, y: 1, z: 1 } } }, 4: { id: 4, name: `Rotate`, op: { type: `Rotate`, child: 3, angles: { x: 0, y: 0, z: 0 } } }, 5: { id: 5, name: `Spring Coil`, op: { type: `Translate`, child: 4, offset: { x: 0, y: 0, z: 0 } } } }, materials: { silver: { name: `Metallic Silver`, color: [0.75, 0.75, 0.78], metallic: 0.9, roughness: 0.25 } }, part_materials: {}, roots: [{ root: 5, material: `silver` }], partDefs: { spring: { id: `spring`, name: `Spring Coil`, root: 5, defaultMaterial: `silver` } }, instances: [{ id: `spring-1`, partDefId: `spring`, name: `Spring Coil`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `spring-1` }, parts: [{ id: `part-1`, name: `Spring Coil`, kind: `sweep`, sketchNodeId: 1, sweepNodeId: 2, scaleNodeId: 3, rotateNodeId: 4, translateNodeId: 5 }], consumedParts: {}, nextNodeId: 6, nextPartNum: 2 } };
function d(e2, t2) {
  let n2 = [];
  for (let r2 = 0; r2 < t2; r2++) {
    let i2 = r2 / t2 * 2 * Math.PI, a2 = (r2 + 1) / t2 * 2 * Math.PI;
    n2.push({ type: `Line`, start: { x: Math.cos(i2) * e2, y: Math.sin(i2) * e2 }, end: { x: Math.cos(a2) * e2, y: Math.sin(a2) * e2 } });
  }
  return n2;
}
var f = 24, p = { id: `vase`, name: `Vase`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Profile 1: Base (r=15)`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 0 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: d(15, f) } }, 2: { id: 2, name: `Profile 2: Bulge (r=35)`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 30 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: d(35, f) } }, 3: { id: 3, name: `Profile 3: Neck (r=12)`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 70 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: d(12, f) } }, 4: { id: 4, name: `Profile 4: Lip (r=18)`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 90 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 1, z: 0 }, segments: d(18, f) } }, 5: { id: 5, name: `Loft (4 profiles)`, op: { type: `Loft`, sketches: [1, 2, 3, 4], closed: false } }, 6: { id: 6, name: `Scale`, op: { type: `Scale`, child: 5, factor: { x: 1, y: 1, z: 1 } } }, 7: { id: 7, name: `Rotate`, op: { type: `Rotate`, child: 6, angles: { x: 0, y: 0, z: 0 } } }, 8: { id: 8, name: `Vase`, op: { type: `Translate`, child: 7, offset: { x: 0, y: 0, z: 0 } } } }, materials: { terracotta: { name: `Terracotta`, color: [0.76, 0.38, 0.28], metallic: 0, roughness: 0.85 } }, part_materials: {}, roots: [{ root: 8, material: `terracotta` }], partDefs: { vase: { id: `vase`, name: `Vase`, root: 8, defaultMaterial: `terracotta` } }, instances: [{ id: `vase-1`, partDefId: `vase`, name: `Vase`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `vase-1` }, parts: [{ id: `part-1`, name: `Vase`, kind: `loft`, sketchNodeIds: [1, 2, 3, 4], loftNodeId: 5, scaleNodeId: 6, rotateNodeId: 7, translateNodeId: 8 }], consumedParts: {}, nextNodeId: 9, nextPartNum: 2 } }, m = 35, h = 3, g = 3, _ = 63, v = 40, y = 30, b = 0.1;
function x() {
  let e2 = [];
  e2.push({ type: `Line`, start: { x: b, y: 0 }, end: { x: m, y: 0 } }), e2.push({ type: `Line`, start: { x: m, y: 0 }, end: { x: m, y: h } }), e2.push({ type: `Line`, start: { x: m, y: h }, end: { x: m * 0.6, y: 5 } }), e2.push({ type: `Line`, start: { x: m * 0.6, y: 5 }, end: { x: 5, y: 8 } }), e2.push({ type: `Line`, start: { x: 5, y: 8 }, end: { x: g, y: 11 } }), e2.push({ type: `Line`, start: { x: g, y: 11 }, end: { x: g, y: _ } }), e2.push({ type: `Line`, start: { x: g, y: _ }, end: { x: 8, y: 68 } });
  let t2 = 8, n2 = 68;
  for (let r2 = 1; r2 <= 8; r2++) {
    let i2 = r2 / 8, a2 = 68 + 65 * i2, o2;
    if (i2 < 0.5) {
      let e3 = i2 * 2;
      o2 = 8 + 32 * Math.sqrt(e3);
    } else {
      let e3 = (i2 - 0.5) * 2;
      o2 = v - 10 * e3 * e3;
    }
    e2.push({ type: `Line`, start: { x: t2, y: n2 }, end: { x: o2, y: a2 } }), t2 = o2, n2 = a2;
  }
  e2.push({ type: `Line`, start: { x: y, y: 133 }, end: { x: 28, y: 133 } }), t2 = 28, n2 = 133;
  for (let r2 = 7; r2 >= 1; r2--) {
    let i2 = r2 / 8, a2 = 68 + 65 * i2, o2;
    if (i2 < 0.5) {
      let e3 = i2 * 2;
      o2 = 7 + 31 * Math.sqrt(e3);
    } else {
      let e3 = (i2 - 0.5) * 2;
      o2 = 38 - 10 * e3 * e3;
    }
    e2.push({ type: `Line`, start: { x: t2, y: n2 }, end: { x: o2, y: a2 } }), t2 = o2, n2 = a2;
  }
  return e2.push({ type: `Line`, start: { x: t2, y: n2 }, end: { x: 5, y: 68 } }), e2.push({ type: `Line`, start: { x: 5, y: 68 }, end: { x: b, y: 68 } }), e2.push({ type: `Line`, start: { x: b, y: 68 }, end: { x: b, y: 0 } }), e2;
}
var S = { id: `wineglass`, name: `Wine Glass`, file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Wine Glass Profile`, op: { type: `Sketch2D`, origin: { x: 0, y: 0, z: 0 }, x_dir: { x: 1, y: 0, z: 0 }, y_dir: { x: 0, y: 0, z: 1 }, segments: x() } }, 2: { id: 2, name: `Revolve 360\xB0 around Z`, op: { type: `Revolve`, sketch: 1, axis_origin: { x: 0, y: 0, z: 0 }, axis_dir: { x: 0, y: 0, z: 1 }, angle_deg: 360 } }, 3: { id: 3, name: `Scale`, op: { type: `Scale`, child: 2, factor: { x: 1, y: 1, z: 1 } } }, 4: { id: 4, name: `Rotate`, op: { type: `Rotate`, child: 3, angles: { x: 0, y: 0, z: 0 } } }, 5: { id: 5, name: `Wine Glass`, op: { type: `Translate`, child: 4, offset: { x: 0, y: 0, z: 0 } } } }, materials: { glass: { name: `Glass`, color: [0.9, 0.95, 1], metallic: 0.1, roughness: 0.05 } }, part_materials: {}, roots: [{ root: 5, material: `glass` }], partDefs: { wineglass: { id: `wineglass`, name: `Wine Glass`, root: 5, defaultMaterial: `glass` } }, instances: [{ id: `wineglass-1`, partDefId: `wineglass`, name: `Wine Glass`, transform: { translation: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }], groundInstanceId: `wineglass-1` }, parts: [{ id: `part-1`, name: `Wine Glass`, kind: `revolve`, sketchNodeId: 1, revolveNodeId: 2, scaleNodeId: 3, rotateNodeId: 4, translateNodeId: 5 }], consumedParts: {}, nextNodeId: 6, nextPartNum: 2 } }, C = { id: `robot-arm`, name: `Robot Arm`, description: `SCARA-style robot arm with shoulder and elbow joints`, difficulty: `intermediate`, features: [`assembly`, `joints`, `kinematics`], file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Base`, op: { type: `Cylinder`, radius: 40, height: 30, segments: 32 } }, 2: { id: 2, name: `Upper Arm`, op: { type: `Cube`, size: { x: 80, y: 20, z: 20 } } }, 3: { id: 3, name: `Lower Arm`, op: { type: `Cube`, size: { x: 60, y: 16, z: 16 } } }, 4: { id: 4, name: `Gripper`, op: { type: `Cylinder`, radius: 8, height: 25, segments: 32 } } }, materials: { steel: { name: `Steel`, color: [0.45, 0.45, 0.5], metallic: 1, roughness: 0.3, density: 7850, friction: 0.5 }, aluminum: { name: `Aluminum`, color: [0.85, 0.87, 0.9], metallic: 1, roughness: 0.4, density: 2700, friction: 0.6 }, orange: { name: `Orange Plastic`, color: [1, 0.5, 0.1], metallic: 0, roughness: 0.5, density: 1200, friction: 0.4 } }, part_materials: { base: `steel`, upper_arm: `aluminum`, lower_arm: `aluminum`, gripper: `orange` }, partDefs: { base: { id: `base`, name: `Base`, root: 1, defaultMaterial: `steel` }, upper_arm: { id: `upper_arm`, name: `Upper Arm`, root: 2, defaultMaterial: `aluminum` }, lower_arm: { id: `lower_arm`, name: `Lower Arm`, root: 3, defaultMaterial: `aluminum` }, gripper: { id: `gripper`, name: `Gripper`, root: 4, defaultMaterial: `orange` } }, instances: [{ id: `base_inst`, partDefId: `base`, name: `Base`, transform: { translation: { x: -40, y: -40, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 } } }, { id: `upper_arm_inst`, partDefId: `upper_arm`, name: `Upper Arm` }, { id: `lower_arm_inst`, partDefId: `lower_arm`, name: `Lower Arm` }, { id: `gripper_inst`, partDefId: `gripper`, name: `Gripper` }], joints: [{ id: `shoulder`, name: `Shoulder Joint`, parentInstanceId: `base_inst`, childInstanceId: `upper_arm_inst`, parentAnchor: { x: 40, y: 40, z: 30 }, childAnchor: { x: 0, y: 10, z: 10 }, kind: { type: `Revolute`, axis: { x: 0, y: 1, z: 0 }, limits: [-120, 120] }, state: 0 }, { id: `elbow`, name: `Elbow Joint`, parentInstanceId: `upper_arm_inst`, childInstanceId: `lower_arm_inst`, parentAnchor: { x: 80, y: 10, z: 10 }, childAnchor: { x: 0, y: 8, z: 8 }, kind: { type: `Revolute`, axis: { x: 0, y: 1, z: 0 }, limits: [-135, 135] }, state: 0 }, { id: `wrist`, name: `Wrist Joint`, parentInstanceId: `lower_arm_inst`, childInstanceId: `gripper_inst`, parentAnchor: { x: 60, y: 8, z: 8 }, childAnchor: { x: 8, y: 8, z: 25 }, kind: { type: `Fixed` }, state: 0 }], groundInstanceId: `base_inst`, roots: [] }, parts: [], consumedParts: {}, nextNodeId: 5, nextPartNum: 5 } }, w = { id: `sheet-metal-bracket`, name: `Sheet metal U-channel`, description: `100\xD750\xD71mm aluminum base flange with two 25mm Up flanges. Evaluated entirely in the Rust kernel via @vcad/kernel-wasm.`, difficulty: `intermediate`, features: [`sheet-metal`, `flange`, `unfold`], file: { document: { version: `0.1`, nodes: { 1: { id: 1, name: `Base flange`, op: { type: `SheetMetalBaseFlangeRect`, width: 100, depth: 50, thickness: 1, material: `Al-soft` } }, 2: { id: 2, name: `Front flange`, op: { type: `SheetMetalEdgeFlange`, parent: 1, panel_id: 0, edge_index: 0, length: 25, angle: Math.PI / 2, radius: 1, direction: `Up` } }, 3: { id: 3, name: `Back flange`, op: { type: `SheetMetalEdgeFlange`, parent: 2, panel_id: 0, edge_index: 2, length: 25, angle: Math.PI / 2, radius: 1, direction: `Up` } }, 10: { id: 10, name: null, op: { type: `Scale`, child: 3, factor: { x: 1, y: 1, z: 1 } } }, 11: { id: 11, name: null, op: { type: `Rotate`, child: 10, angles: { x: 0, y: 0, z: 0 } } }, 12: { id: 12, name: `Sheet metal U-channel`, op: { type: `Translate`, child: 11, offset: { x: -50, y: -25, z: 0 } } } }, materials: { default: { name: `Aluminum`, color: [0.85, 0.85, 0.88], metallic: 0.7, roughness: 0.4 } }, part_materials: {}, roots: [{ root: 12, material: `default` }] }, parts: [{ id: `part-1`, name: `Sheet metal U-channel`, kind: `cube`, primitiveNodeId: 3, scaleNodeId: 10, rotateNodeId: 11, translateNodeId: 12 }], consumedParts: {}, nextNodeId: 13, nextPartNum: 2 } }, T = `<robot name="g1_23dof">\r
  <material name="dark">\r
    <color rgba="0.2 0.2 0.2 1"/>\r
  </material>\r
  <material name="white">\r
    <color rgba="0.7 0.7 0.7 1"/>\r
  </material>\r
\r
  <mujoco>\r
    <compiler meshdir="meshes" discardvisual="false"/>\r
  </mujoco>\r
\r
  <!-- [CAUTION] uncomment when convert to mujoco -->\r
  <!-- <link name="world"></link>\r
  <joint name="floating_base_joint" type="floating">\r
    <parent link="world"/>\r
    <child link="pelvis"/>\r
  </joint> -->\r
\r
  <link name="pelvis">\r
    <inertial>\r
      <origin xyz="0 0 -0.07605" rpy="0 0 0"/>\r
      <mass value="3.813"/>\r
      <inertia ixx="0.010549" ixy="0" ixz="2.1E-06" iyy="0.0093089" iyz="0" izz="0.0079184"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/pelvis.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
  </link>\r
  <link name="pelvis_contour_link">\r
    <inertial>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <mass value="0.001"/>\r
      <inertia ixx="1e-7" ixy="0" ixz="0" iyy="1e-7" iyz="0" izz="1e-7"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/pelvis_contour_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/pelvis_contour_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="pelvis_contour_joint" type="fixed">\r
    <parent link="pelvis"/>\r
    <child link="pelvis_contour_link"/>\r
  </joint>\r
\r
  <!-- Legs -->\r
  <link name="left_hip_pitch_link">\r
    <inertial>\r
      <origin xyz="0.002741 0.047791 -0.02606" rpy="0 0 0"/>\r
      <mass value="1.35"/>\r
      <inertia ixx="0.001811" ixy="3.68E-05" ixz="-3.44E-05" iyy="0.0014193" iyz="0.000171" izz="0.0012812"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_pitch_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_pitch_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_hip_pitch_joint" type="revolute">\r
    <origin xyz="0 0.064452 -0.1027" rpy="0 0 0"/>\r
    <parent link="pelvis"/>\r
    <child link="left_hip_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-2.5307" upper="2.8798" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="left_hip_roll_link">\r
    <inertial>\r
      <origin xyz="0.029812 -0.001045 -0.087934" rpy="0 0 0"/>\r
      <mass value="1.52"/>\r
      <inertia ixx="0.0023773" ixy="-3.8E-06" ixz="-0.0003908" iyy="0.0024123" iyz="1.84E-05" izz="0.0016595"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_roll_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_roll_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_hip_roll_joint" type="revolute">\r
    <origin xyz="0 0.052 -0.030465" rpy="0 -0.1749 0"/>\r
    <parent link="left_hip_pitch_link"/>\r
    <child link="left_hip_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-0.5236" upper="2.9671" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="left_hip_yaw_link">\r
    <inertial>\r
      <origin xyz="-0.057709 -0.010981 -0.15078" rpy="0 0 0"/>\r
      <mass value="1.702"/>\r
      <inertia ixx="0.0057774" ixy="-0.0005411" ixz="-0.0023948" iyy="0.0076124" iyz="-0.0007072" izz="0.003149"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_yaw_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_hip_yaw_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_hip_yaw_joint" type="revolute">\r
    <origin xyz="0.025001 0 -0.12412" rpy="0 0 0"/>\r
    <parent link="left_hip_roll_link"/>\r
    <child link="left_hip_yaw_link"/>\r
    <axis xyz="0 0 1"/>\r
    <limit lower="-2.7576" upper="2.7576" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="left_knee_link">\r
    <inertial>\r
      <origin xyz="0.005457 0.003964 -0.12074" rpy="0 0 0"/>\r
      <mass value="1.932"/>\r
      <inertia ixx="0.011329" ixy="4.82E-05" ixz="-4.49E-05" iyy="0.011277" iyz="-0.0007146" izz="0.0015168"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_knee_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_knee_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_knee_joint" type="revolute">\r
    <origin xyz="-0.078273 0.0021489 -0.17734" rpy="0 0.1749 0"/>\r
    <parent link="left_hip_yaw_link"/>\r
    <child link="left_knee_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-0.087267" upper="2.8798" effort="139" velocity="20"/>\r
  </joint>\r
  <link name="left_ankle_pitch_link">\r
    <inertial>\r
      <origin xyz="-0.007269 0 0.011137" rpy="0 0 0"/>\r
      <mass value="0.074"/>\r
      <inertia ixx="8.4E-06" ixy="0" ixz="-2.9E-06" iyy="1.89E-05" iyz="0" izz="1.26E-05"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_ankle_pitch_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_ankle_pitch_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_ankle_pitch_joint" type="revolute">\r
    <origin xyz="0 -9.4445E-05 -0.30001" rpy="0 0 0"/>\r
    <parent link="left_knee_link"/>\r
    <child link="left_ankle_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-0.87267" upper="0.5236" effort="35" velocity="30"/>\r
  </joint>\r
  <link name="left_ankle_roll_link">\r
    <inertial>\r
      <origin xyz="0.026505 0 -0.016425" rpy="0 0 0"/>\r
      <mass value="0.608"/>\r
      <inertia ixx="0.0002231" ixy="2E-07" ixz="8.91E-05" iyy="0.0016161" iyz="-1E-07" izz="0.0016667"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_ankle_roll_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="-0.05 0.025 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="-0.05 -0.025 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="0.12 0.03 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="0.12 -0.03 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_ankle_roll_joint" type="revolute">\r
    <origin xyz="0 0 -0.017558" rpy="0 0 0"/>\r
    <parent link="left_ankle_pitch_link"/>\r
    <child link="left_ankle_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-0.2618" upper="0.2618" effort="35" velocity="30"/>\r
  </joint>\r
  <link name="right_hip_pitch_link">\r
    <inertial>\r
      <origin xyz="0.002741 -0.047791 -0.02606" rpy="0 0 0"/>\r
      <mass value="1.35"/>\r
      <inertia ixx="0.001811" ixy="-3.68E-05" ixz="-3.44E-05" iyy="0.0014193" iyz="-0.000171" izz="0.0012812"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_pitch_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_pitch_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_hip_pitch_joint" type="revolute">\r
    <origin xyz="0 -0.064452 -0.1027" rpy="0 0 0"/>\r
    <parent link="pelvis"/>\r
    <child link="right_hip_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-2.5307" upper="2.8798" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="right_hip_roll_link">\r
    <inertial>\r
      <origin xyz="0.029812 0.001045 -0.087934" rpy="0 0 0"/>\r
      <mass value="1.52"/>\r
      <inertia ixx="0.0023773" ixy="3.8E-06" ixz="-0.0003908" iyy="0.0024123" iyz="-1.84E-05" izz="0.0016595"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_roll_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_roll_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_hip_roll_joint" type="revolute">\r
    <origin xyz="0 -0.052 -0.030465" rpy="0 -0.1749 0"/>\r
    <parent link="right_hip_pitch_link"/>\r
    <child link="right_hip_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-2.9671" upper="0.5236" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="right_hip_yaw_link">\r
    <inertial>\r
      <origin xyz="-0.057709 0.010981 -0.15078" rpy="0 0 0"/>\r
      <mass value="1.702"/>\r
      <inertia ixx="0.0057774" ixy="0.0005411" ixz="-0.0023948" iyy="0.0076124" iyz="0.0007072" izz="0.003149"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_yaw_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_hip_yaw_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_hip_yaw_joint" type="revolute">\r
    <origin xyz="0.025001 0 -0.12412" rpy="0 0 0"/>\r
    <parent link="right_hip_roll_link"/>\r
    <child link="right_hip_yaw_link"/>\r
    <axis xyz="0 0 1"/>\r
    <limit lower="-2.7576" upper="2.7576" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="right_knee_link">\r
    <inertial>\r
      <origin xyz="0.005457 -0.003964 -0.12074" rpy="0 0 0"/>\r
      <mass value="1.932"/>\r
      <inertia ixx="0.011329" ixy="-4.82E-05" ixz="4.49E-05" iyy="0.011277" iyz="0.0007146" izz="0.0015168"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_knee_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_knee_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_knee_joint" type="revolute">\r
    <origin xyz="-0.078273 -0.0021489 -0.17734" rpy="0 0.1749 0"/>\r
    <parent link="right_hip_yaw_link"/>\r
    <child link="right_knee_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-0.087267" upper="2.8798" effort="139" velocity="20"/>\r
  </joint>\r
  <link name="right_ankle_pitch_link">\r
    <inertial>\r
      <origin xyz="-0.007269 0 0.011137" rpy="0 0 0"/>\r
      <mass value="0.074"/>\r
      <inertia ixx="8.4E-06" ixy="0" ixz="-2.9E-06" iyy="1.89E-05" iyz="0" izz="1.26E-05"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_ankle_pitch_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_ankle_pitch_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_ankle_pitch_joint" type="revolute">\r
    <origin xyz="0 9.4445E-05 -0.30001" rpy="0 0 0"/>\r
    <parent link="right_knee_link"/>\r
    <child link="right_ankle_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-0.87267" upper="0.5236" effort="35" velocity="30"/>\r
  </joint>\r
  <link name="right_ankle_roll_link">\r
    <inertial>\r
      <origin xyz="0.026505 0 -0.016425" rpy="0 0 0"/>\r
      <mass value="0.608"/>\r
      <inertia ixx="0.0002231" ixy="-2E-07" ixz="8.91E-05" iyy="0.0016161" iyz="1E-07" izz="0.0016667"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_ankle_roll_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="-0.05 0.025 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="-0.05 -0.025 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="0.12 0.03 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
    <collision>\r
      <origin xyz="0.12 -0.03 -0.03" rpy="0 0 0"/>\r
      <geometry>\r
        <sphere radius="0.005"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_ankle_roll_joint" type="revolute">\r
    <origin xyz="0 0 -0.017558" rpy="0 0 0"/>\r
    <parent link="right_ankle_pitch_link"/>\r
    <child link="right_ankle_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-0.2618" upper="0.2618" effort="35" velocity="30"/>\r
  </joint>\r
\r
  <!-- Torso -->\r
  <link name="waist_yaw_fixed_link">\r
    <inertial>\r
      <origin xyz="0.003964 0 0.018769" rpy="0 0 0"/>\r
      <mass value="0.244"/>\r
      <inertia ixx="9.9587E-05" ixy="-1.833E-06" ixz="-1.2617E-05" iyy="0.00012411" iyz="-1.18E-07" izz="0.00015586"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/waist_yaw_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
  </link>\r
  <joint name="waist_yaw_fixed_joint" type="fixed">\r
    <origin xyz="0.0039635 0 -0.054" rpy="0 0 0"/>\r
    <parent link="torso_link"/>\r
    <child link="waist_yaw_fixed_link"/>\r
  </joint>\r
  <joint name="waist_yaw_joint" type="revolute">\r
    <origin xyz="-0.0039635 0 0.054" rpy="0 0 0"/>\r
    <parent link="pelvis"/>\r
    <child link="torso_link"/>\r
    <axis xyz="0 0 1"/>\r
    <limit lower="-2.618" upper="2.618" effort="88" velocity="32"/>\r
  </joint>\r
  <link name="torso_link">\r
    <inertial>\r
      <origin xyz="0.002601 0.000257 0.153719" rpy="0 0 0"/>\r
      <mass value="8.562"/>\r
      <inertia ixx="0.065674966" ixy="-8.597E-05" ixz="-0.001737252" iyy="0.053535188" iyz="8.6899E-05" izz="0.030808125"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/torso_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/torso_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
\r
  <!-- LOGO -->\r
  <joint name="logo_joint" type="fixed">\r
    <origin xyz="0.0039635 0 -0.054" rpy="0 0 0"/>\r
    <parent link="torso_link"/>\r
    <child link="logo_link"/>\r
  </joint>\r
  <link name="logo_link">\r
    <inertial>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <mass value="0.001"/>\r
      <inertia ixx="1e-7" ixy="0" ixz="0" iyy="1e-7" iyz="0" izz="1e-7"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/logo_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/logo_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
\r
  <!-- Head -->\r
  <link name="head_link">\r
    <inertial>\r
      <origin xyz="0.005267 0.000299 0.449869" rpy="0 0 0"/>\r
      <mass value="1.036"/>\r
      <inertia ixx="0.004085051" ixy="-2.543E-06" ixz="-6.9455E-05" iyy="0.004185212" iyz="-3.726E-06" izz="0.001807911"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/head_link.STL"/>\r
      </geometry>\r
      <material name="dark"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/head_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="head_joint" type="fixed">\r
    <origin xyz="0.0039635 0 -0.054" rpy="0 0 0"/>\r
    <parent link="torso_link"/>\r
    <child link="head_link"/>\r
  </joint>\r
\r
  <!-- Waist Support -->\r
  <link name="waist_support_link">\r
    <inertial>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <mass value="0.001"/>\r
      <inertia ixx="1e-7" ixy="0" ixz="0" iyy="1e-7" iyz="0" izz="1e-7"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/waist_support_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/waist_support_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="waist_support_joint" type="fixed">\r
    <origin xyz="0.0039635 0 -0.054" rpy="0 0 0"/>\r
    <parent link="torso_link"/>\r
    <child link="waist_support_link"/>\r
  </joint>\r
\r
  <!-- IMU -->\r
  <link name="imu_in_torso"></link>\r
  <joint name="imu_in_torso_joint" type="fixed">\r
    <origin xyz="-0.03959 -0.00224 0.13792" rpy="0 0 0"/>\r
    <parent link="torso_link"/>\r
    <child link="imu_in_torso"/>\r
  </joint>\r
\r
  <link name="imu_in_pelvis"></link>\r
  <joint name="imu_in_pelvis_joint" type="fixed">\r
    <origin xyz="0.04525 0 -0.08339" rpy="0 0 0"/>\r
    <parent link="pelvis"/>\r
    <child link="imu_in_pelvis"/>\r
  </joint>\r
\r
  <!-- d435 -->\r
  <link name="d435_link"></link>\r
  <joint name="d435_joint" type="fixed">\r
    <origin xyz="0.0576235 0.01753 0.41987" rpy="0 0.8307767239493009 0"/>\r
    <parent link="torso_link"/>\r
    <child link="d435_link"/>\r
  </joint>\r
\r
  <!-- mid360 -->\r
  <link name="mid360_link"></link>\r
  <joint name="mid360_joint" type="fixed">\r
    <origin xyz="0.0002835 0.00003 0.40618" rpy="0 0.04014257279586953 0"/>\r
    <parent link="torso_link"/>\r
    <child link="mid360_link"/>\r
  </joint>\r
\r
  <!-- Arm -->\r
  <link name="left_shoulder_pitch_link">\r
    <inertial>\r
      <origin xyz="0 0.035892 -0.011628" rpy="0 0 0"/>\r
      <mass value="0.718"/>\r
      <inertia ixx="0.0004291" ixy="-9.2E-06" ixz="6.4E-06" iyy="0.000453" iyz="2.26E-05" izz="0.000423"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_shoulder_pitch_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0.04 -0.01" rpy="0 1.5707963267948966 0"/>\r
      <geometry>\r
        <cylinder radius="0.03" length="0.05"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_shoulder_pitch_joint" type="revolute">\r
    <origin xyz="0.0039563 0.10022 0.23778" rpy="0.27931 5.4949E-05 -0.00019159"/>\r
    <parent link="torso_link"/>\r
    <child link="left_shoulder_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-3.0892" upper="2.6704" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="left_shoulder_roll_link">\r
    <inertial>\r
      <origin xyz="-0.000227 0.00727 -0.063243" rpy="0 0 0"/>\r
      <mass value="0.643"/>\r
      <inertia ixx="0.0006177" ixy="-1E-06" ixz="8.7E-06" iyy="0.0006912" iyz="-5.3E-06" izz="0.0003894"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_shoulder_roll_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="-0.004 0.006 -0.053" rpy="0 0 0"/>\r
      <geometry>\r
        <cylinder radius="0.03" length="0.03"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_shoulder_roll_joint" type="revolute">\r
    <origin xyz="0 0.038 -0.013831" rpy="-0.27925 0 0"/>\r
    <parent link="left_shoulder_pitch_link"/>\r
    <child link="left_shoulder_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-1.5882" upper="2.2515" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="left_shoulder_yaw_link">\r
    <inertial>\r
      <origin xyz="0.010773 -0.002949 -0.072009" rpy="0 0 0"/>\r
      <mass value="0.734"/>\r
      <inertia ixx="0.0009988" ixy="7.9E-06" ixz="0.0001412" iyy="0.0010605" iyz="-2.86E-05" izz="0.0004354"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_shoulder_yaw_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_shoulder_yaw_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_shoulder_yaw_joint" type="revolute">\r
    <origin xyz="0 0.00624 -0.1032" rpy="0 0 0"/>\r
    <parent link="left_shoulder_roll_link"/>\r
    <child link="left_shoulder_yaw_link"/>\r
    <axis xyz="0 0 1"/>\r
    <limit lower="-2.618" upper="2.618" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="left_elbow_link">\r
    <inertial>\r
      <origin xyz="0.064956 0.004454 -0.010062" rpy="0 0 0"/>\r
      <mass value="0.6"/>\r
      <inertia ixx="0.0002891" ixy="6.53E-05" ixz="1.72E-05" iyy="0.0004152" iyz="-5.6E-06" izz="0.0004197"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_elbow_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_elbow_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="left_elbow_joint" type="revolute">\r
    <origin xyz="0.015783 0 -0.080518" rpy="0 0 0"/>\r
    <parent link="left_shoulder_yaw_link"/>\r
    <child link="left_elbow_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-1.0472" upper="2.0944" effort="25" velocity="37"/>\r
  </joint>\r
  <joint name="left_wrist_roll_joint" type="revolute">\r
    <origin xyz="0.100 0.00188791 -0.010" rpy="0 0 0"/>\r
    <axis xyz="1 0 0"/>\r
    <parent link="left_elbow_link"/>\r
    <child link="left_wrist_roll_rubber_hand"/>\r
    <limit effort="25" velocity="37" lower="-1.972222054" upper="1.972222054"/>\r
  </joint>\r
  <link name="left_wrist_roll_rubber_hand">\r
    <inertial>\r
      <origin xyz="0.10794656650 0.00163511945 0.00202244863" rpy="0 0 0"/>\r
      <mass value="0.35692864"/>\r
      <inertia ixx="0.00019613494735" ixy="-0.00000419816908" ixz="-0.00003950860580" iyy="0.00200280358206" iyz="0.00000249774203" izz="0.00194181412808"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_wrist_roll_rubber_hand.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/left_wrist_roll_rubber_hand.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <link name="right_shoulder_pitch_link">\r
    <inertial>\r
      <origin xyz="0 -0.035892 -0.011628" rpy="0 0 0"/>\r
      <mass value="0.718"/>\r
      <inertia ixx="0.0004291" ixy="9.2E-06" ixz="6.4E-06" iyy="0.000453" iyz="-2.26E-05" izz="0.000423"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_shoulder_pitch_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 -0.04 -0.01" rpy="0 1.5707963267948966 0"/>\r
      <geometry>\r
        <cylinder radius="0.03" length="0.05"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_shoulder_pitch_joint" type="revolute">\r
    <origin xyz="0.0039563 -0.10021 0.23778" rpy="-0.27931 5.4949E-05 0.00019159"/>\r
    <parent link="torso_link"/>\r
    <child link="right_shoulder_pitch_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-3.0892" upper="2.6704" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="right_shoulder_roll_link">\r
    <inertial>\r
      <origin xyz="-0.000227 -0.00727 -0.063243" rpy="0 0 0"/>\r
      <mass value="0.643"/>\r
      <inertia ixx="0.0006177" ixy="1E-06" ixz="8.7E-06" iyy="0.0006912" iyz="5.3E-06" izz="0.0003894"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_shoulder_roll_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="-0.004 -0.006 -0.053" rpy="0 0 0"/>\r
      <geometry>\r
        <cylinder radius="0.03" length="0.03"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_shoulder_roll_joint" type="revolute">\r
    <origin xyz="0 -0.038 -0.013831" rpy="0.27925 0 0"/>\r
    <parent link="right_shoulder_pitch_link"/>\r
    <child link="right_shoulder_roll_link"/>\r
    <axis xyz="1 0 0"/>\r
    <limit lower="-2.2515" upper="1.5882" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="right_shoulder_yaw_link">\r
    <inertial>\r
      <origin xyz="0.010773 0.002949 -0.072009" rpy="0 0 0"/>\r
      <mass value="0.734"/>\r
      <inertia ixx="0.0009988" ixy="-7.9E-06" ixz="0.0001412" iyy="0.0010605" iyz="2.86E-05" izz="0.0004354"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_shoulder_yaw_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_shoulder_yaw_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_shoulder_yaw_joint" type="revolute">\r
    <origin xyz="0 -0.00624 -0.1032" rpy="0 0 0"/>\r
    <parent link="right_shoulder_roll_link"/>\r
    <child link="right_shoulder_yaw_link"/>\r
    <axis xyz="0 0 1"/>\r
    <limit lower="-2.618" upper="2.618" effort="25" velocity="37"/>\r
  </joint>\r
  <link name="right_elbow_link">\r
    <inertial>\r
      <origin xyz="0.064956 -0.004454 -0.010062" rpy="0 0 0"/>\r
      <mass value="0.6"/>\r
      <inertia ixx="0.0002891" ixy="-6.53E-05" ixz="1.72E-05" iyy="0.0004152" iyz="5.6E-06" izz="0.0004197"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_elbow_link.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_elbow_link.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
  <joint name="right_elbow_joint" type="revolute">\r
    <origin xyz="0.015783 0 -0.080518" rpy="0 0 0"/>\r
    <parent link="right_shoulder_yaw_link"/>\r
    <child link="right_elbow_link"/>\r
    <axis xyz="0 1 0"/>\r
    <limit lower="-1.0472" upper="2.0944" effort="25" velocity="37"/>\r
  </joint>\r
  <joint name="right_wrist_roll_joint" type="revolute">\r
    <origin xyz="0.100 -0.00188791 -0.010" rpy="0 0 0"/>\r
    <axis xyz="1 0 0"/>\r
    <parent link="right_elbow_link"/>\r
    <child link="right_wrist_roll_rubber_hand"/>\r
    <limit effort="25" velocity="37" lower="-1.972222054" upper="1.972222054"/>\r
  </joint>\r
  <link name="right_wrist_roll_rubber_hand">\r
    <inertial>\r
      <origin xyz="0.10794656650 -0.00163511945 0.00202244863" rpy="0 0 0"/>\r
      <mass value="0.35692864"/>\r
      <inertia ixx="0.00019613494735" ixy="0.00000419816908" ixz="-0.00003950860580" iyy="0.00200280358206" iyz="-0.00000249774203" izz="0.00194181412808"/>\r
    </inertial>\r
    <visual>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_wrist_roll_rubber_hand.STL"/>\r
      </geometry>\r
      <material name="white"/>\r
    </visual>\r
    <collision>\r
      <origin xyz="0 0 0" rpy="0 0 0"/>\r
      <geometry>\r
        <mesh filename="meshes/right_wrist_roll_rubber_hand.STL"/>\r
      </geometry>\r
    </collision>\r
  </link>\r
</robot>`, E = Object.assign({}), D = {};
for (let [e2, t2] of Object.entries(E)) {
  let n2 = e2.split(`/`).pop();
  D[`meshes/${n2}`] = t2;
}
var O = { id: `unitree-g1`, name: `Unitree G1 (humanoid)`, description: `Unitree G1 23-DOF humanoid \u2014 official URDF rendered with the upstream STL meshes. Click Simulate \u25B6 to drop it into gravity.`, difficulty: `advanced`, features: [`robotics`, `physics`, `urdf`, `humanoid`], urdf: { urdfText: T, name: `unitree-g1.urdf`, meshes: D } }, k = `/vcad/v2026.11.12-7ae7e5c/assets/base-efaw4egG.dae`, A = `/vcad/v2026.11.12-7ae7e5c/assets/calf-Dp7HBGfc.dae`, j = `/vcad/v2026.11.12-7ae7e5c/assets/calf_mirror-Cp4PxZP1.dae`, M = `/vcad/v2026.11.12-7ae7e5c/assets/foot-DTvX3cCy.dae`, N = `/vcad/v2026.11.12-7ae7e5c/assets/hip-wKf0018C.dae`, P = `/vcad/v2026.11.12-7ae7e5c/assets/thigh-DuSbuceK.dae`, F = `/vcad/v2026.11.12-7ae7e5c/assets/thigh_mirror-Br2xsJpn.dae`, I = `<?xml version='1.0' encoding='utf-8'?>
<robot name="go2_description">
  <link name="base">
    <inertial>
      <origin xyz="0.021112 0 -0.005366" rpy="0 0 0" />
      <mass value="6.921" />
      <inertia ixx="0.02448" ixy="0.00012166" ixz="0.0014849" iyy="0.098077" iyz="-3.12E-05" izz="0.107" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/base.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_001-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="\u767D\u8272logo_001-effect"><color rgba="1 1 1 1" /></material><material name="\u9ED1\u8272\u8D34\u7EB8_007-effect"><color rgba="0.009018 0.009018 0.009018 1" /></material><material name="\u9ED1\u8272\u91D1\u5C5E_007-effect"><color rgba="0.01341 0.01341 0.01341 1" /></material><material name="\u9ED1\u8272\u5851\u6599_003-effect"><color rgba="0.023455 0.023455 0.023455 1" /></material></visual>
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <box size="0.3762 0.0935 0.114" />
      </geometry>
    </collision>
  </link>
  <link name="Head_upper">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.001" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <cylinder radius="0.05" length="0.09" />
      </geometry>
    </collision>
  </link>
  <joint name="Head_upper_joint" type="fixed" dont_collapse="true">
    <origin xyz="0.285 0 0.01" rpy="0 0 0" />
    <parent link="base" />
    <child link="Head_upper" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="Head_lower">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.001" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <sphere radius="0.047" />
      </geometry>
    </collision>
  </link>
  <joint name="Head_lower_joint" type="fixed" dont_collapse="true">
    <origin xyz="0.008 0 -0.07" rpy="0 0 0" />
    <parent link="Head_upper" />
    <child link="Head_lower" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FL_hip">
    <inertial>
      <origin xyz="-0.0054 0.00194 -0.000105" rpy="0 0 0" />
      <mass value="0.678" />
      <inertia ixx="0.00048" ixy="-3.01E-06" ixz="1.11E-06" iyy="0.000884" iyz="-1.42E-06" izz="0.000596" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/hip.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_001-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="1.5707963267948966 0 0" xyz="0 0.08 0" />
      <geometry>
        <cylinder length="0.04" radius="0.046" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_hip_joint" type="revolute">
    <origin xyz="0.1934 0.0465 0" rpy="0 0 0" />
    <parent link="base" />
    <child link="FL_hip" />
    <axis xyz="1 0 0" />
    <limit lower="-1.0472" upper="1.0472" effort="23.7" velocity="30.1" />
  </joint>
  <link name="FL_hip_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000111842" ixy="0.0" ixz="0.0" iyy="0.000059647" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FL_hip_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0.11215 0.04675 0" />
    <parent link="base" />
    <child link="FL_hip_rotor" />
  </joint>
  <link name="FL_thigh">
    <inertial>
      <origin xyz="-0.00374 -0.0223 -0.0327" rpy="0 0 0" />
      <mass value="1.152" />
      <inertia ixx="0.00584" ixy="8.72E-05" ixz="-0.000289" iyy="0.0058" iyz="0.000808" izz="0.00103" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/thigh.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_003-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material_009-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="0 1.5707963267948966 0" xyz="0 0 -0.1065" />
      <geometry>
        <box size="0.213 0.0245 0.034" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_thigh_joint" type="revolute">
    <origin xyz="0 0.0955 0" rpy="0 0 0" />
    <parent link="FL_hip" />
    <child link="FL_thigh" />
    <axis xyz="0 1 0" />
    <limit lower="-1.5708" upper="3.4907" effort="23.7" velocity="30.1" />
  </joint>
  <link name="FL_thigh_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FL_thigh_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 -0.00015 0" />
    <parent link="FL_hip" />
    <child link="FL_thigh_rotor" />
  </joint>
  <link name="FL_calf">
    <inertial>
      <origin xyz="0.00548 -0.000975 -0.115" rpy="0 0 0" />
      <mass value="0.154" />
      <inertia ixx="0.00108" ixy="3.4E-07" ixz="1.72E-05" iyy="0.0011" iyz="8.28E-06" izz="3.29E-05" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/calf.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_005-effect"><color rgba="0 0 0 1" /></material><material name="\u6DF1\u8272\u6A61\u80F6_005-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material></visual>
    <collision>
      <origin rpy="0 -0.21 0" xyz="0.008 0 -0.06" />
      <geometry>
        <cylinder length="0.12" radius="0.012" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_calf_joint" type="revolute">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="FL_thigh" />
    <child link="FL_calf" />
    <axis xyz="0 1 0" />
    <limit lower="-2.7227" upper="-0.83776" effort="45.43" velocity="15.70" />
  </joint>
  <link name="FL_calflower">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.065" radius="0.011" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_calflower_joint" type="fixed">
    <origin xyz="0.020 0 -0.148" rpy="0 0.05 0" />
    <parent link="FL_calf" />
    <child link="FL_calflower" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FL_calflower1">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.03" radius="0.0155" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_calflower1_joint" type="fixed">
    <origin xyz="-0.01 0 -0.04" rpy="0 0.48 0" />
    <parent link="FL_calflower" />
    <child link="FL_calflower1" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FL_calf_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FL_calf_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 -0.03235 0" />
    <parent link="FL_thigh" />
    <child link="FL_calf_rotor" />
  </joint>
  <link name="FL_foot">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.04" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/foot.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_007-effect"><color rgba="0 0 0 1" /></material></visual>
    <collision>
      <origin rpy="0 0 0" xyz="-0.002 0 0" />
      <geometry>
        <sphere radius="0.022" />
      </geometry>
    </collision>
  </link>
  <joint name="FL_foot_joint" type="fixed" dont_collapse="true">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="FL_calf" />
    <child link="FL_foot" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FR_hip">
    <inertial>
      <origin xyz="-0.0054 -0.00194 -0.000105" rpy="0 0 0" />
      <mass value="0.678" />
      <inertia ixx="0.00048" ixy="3.01E-06" ixz="1.11E-06" iyy="0.000884" iyz="1.42E-06" izz="0.000596" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="3.1415 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/hip.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_001-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="1.5707963267948966 0 0" xyz="0 -0.08 0" />
      <geometry>
        <cylinder length="0.04" radius="0.046" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_hip_joint" type="revolute">
    <origin xyz="0.1934 -0.0465 0" rpy="0 0 0" />
    <parent link="base" />
    <child link="FR_hip" />
    <axis xyz="1 0 0" />
    <limit lower="-1.0472" upper="1.0472" effort="23.7" velocity="30.1" />
  </joint>
  <link name="FR_hip_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000111842" ixy="0.0" ixz="0.0" iyy="0.000059647" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FR_hip_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0.11215 -0.04675 0" />
    <parent link="base" />
    <child link="FR_hip_rotor" />
  </joint>
  <link name="FR_thigh">
    <inertial>
      <origin xyz="-0.00374 0.0223 -0.0327" rpy="0 0 0" />
      <mass value="1.152" />
      <inertia ixx="0.00584" ixy="-8.72E-05" ixz="-0.000289" iyy="0.0058" iyz="-0.000808" izz="0.00103" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/thigh_mirror.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_012-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material_011-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="0 1.5707963267948966 0" xyz="0 0 -0.1065" />
      <geometry>
        <box size="0.213 0.0245 0.034" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_thigh_joint" type="revolute">
    <origin xyz="0 -0.0955 0" rpy="0 0 0" />
    <parent link="FR_hip" />
    <child link="FR_thigh" />
    <axis xyz="0 1 0" />
    <limit lower="-1.5708" upper="3.4907" effort="23.7" velocity="30.1" />
  </joint>
  <link name="FR_thigh_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FR_thigh_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 0.00015 0" />
    <parent link="FR_hip" />
    <child link="FR_thigh_rotor" />
  </joint>
  <link name="FR_calf">
    <inertial>
      <origin xyz="0.00548 0.000975 -0.115" rpy="0 0 0" />
      <mass value="0.154" />
      <inertia ixx="0.00108" ixy="-3.4E-07" ixz="1.72E-05" iyy="0.0011" iyz="-8.28E-06" izz="3.29E-05" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/calf_mirror.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_006-effect"><color rgba="0 0 0 1" /></material><material name="\u6DF1\u8272\u6A61\u80F6_007-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material></visual>
    <collision>
      <origin rpy="0 -0.2 0" xyz="0.01 0 -0.06" />
      <geometry>
        <cylinder length="0.12" radius="0.013" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_calf_joint" type="revolute">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="FR_thigh" />
    <child link="FR_calf" />
    <axis xyz="0 1 0" />
    <limit lower="-2.7227" upper="-0.83776" effort="45.43" velocity="15.70" />
  </joint>
  <link name="FR_calflower">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.065" radius="0.011" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_calflower_joint" type="fixed">
    <origin xyz="0.020 0 -0.148" rpy="0 0.05 0" />
    <parent link="FR_calf" />
    <child link="FR_calflower" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FR_calflower1">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.03" radius="0.0155" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_calflower1_joint" type="fixed">
    <origin xyz="-0.01 0 -0.04" rpy="0 0.48 0" />
    <parent link="FR_calflower" />
    <child link="FR_calflower1" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="FR_calf_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="FR_calf_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 0.03235 0" />
    <parent link="FR_thigh" />
    <child link="FR_calf_rotor" />
  </joint>
  <link name="FR_foot">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.04" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/foot.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_007-effect"><color rgba="0 0 0 1" /></material></visual>
    <collision>
      <origin rpy="0 0 0" xyz="-0.002 0 0" />
      <geometry>
        <sphere radius="0.022" />
      </geometry>
    </collision>
  </link>
  <joint name="FR_foot_joint" type="fixed" dont_collapse="true">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="FR_calf" />
    <child link="FR_foot" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RL_hip">
    <inertial>
      <origin xyz="0.0054 0.00194 -0.000105" rpy="0 0 0" />
      <mass value="0.678" />
      <inertia ixx="0.00048" ixy="3.01E-06" ixz="-1.11E-06" iyy="0.000884" iyz="-1.42E-06" izz="0.000596" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 3.1415 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/hip.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_001-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="1.5707963267948966 0 0" xyz="0 0.08 0" />
      <geometry>
        <cylinder length="0.04" radius="0.046" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_hip_joint" type="revolute">
    <origin xyz="-0.1934 0.0465 0" rpy="0 0 0" />
    <parent link="base" />
    <child link="RL_hip" />
    <axis xyz="1 0 0" />
    <limit lower="-1.0472" upper="1.0472" effort="23.7" velocity="30.1" />
  </joint>
  <link name="RL_hip_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000111842" ixy="0.0" ixz="0.0" iyy="0.000059647" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RL_hip_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="-0.11215 0.04675 0" />
    <parent link="base" />
    <child link="RL_hip_rotor" />
  </joint>
  <link name="RL_thigh">
    <inertial>
      <origin xyz="-0.00374 -0.0223 -0.0327" rpy="0 0 0" />
      <mass value="1.152" />
      <inertia ixx="0.00584" ixy="8.72E-05" ixz="-0.000289" iyy="0.0058" iyz="0.000808" izz="0.00103" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/thigh.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_003-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material_009-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="0 1.5707963267948966 0" xyz="0 0 -0.1065" />
      <geometry>
        <box size="0.213 0.0245 0.034" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_thigh_joint" type="revolute">
    <origin xyz="0 0.0955 0" rpy="0 0 0" />
    <parent link="RL_hip" />
    <child link="RL_thigh" />
    <axis xyz="0 1 0" />
    <limit lower="-0.5236" upper="4.5379" effort="23.7" velocity="30.1" />
  </joint>
  <link name="RL_thigh_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RL_thigh_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 -0.00015 0" />
    <parent link="RL_hip" />
    <child link="RL_thigh_rotor" />
  </joint>
  <link name="RL_calf">
    <inertial>
      <origin xyz="0.00548 -0.000975 -0.115" rpy="0 0 0" />
      <mass value="0.154" />
      <inertia ixx="0.00108" ixy="3.4E-07" ixz="1.72E-05" iyy="0.0011" iyz="8.28E-06" izz="3.29E-05" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/calf.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_005-effect"><color rgba="0 0 0 1" /></material><material name="\u6DF1\u8272\u6A61\u80F6_005-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material></visual>
    <collision>
      <origin rpy="0 -0.2 0" xyz="0.01 0 -0.06" />
      <geometry>
        <cylinder length="0.12" radius="0.013" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_calf_joint" type="revolute">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="RL_thigh" />
    <child link="RL_calf" />
    <axis xyz="0 1 0" />
    <limit lower="-2.7227" upper="-0.83776" effort="45.43" velocity="15.70" />
  </joint>
  <link name="RL_calflower">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.065" radius="0.011" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_calflower_joint" type="fixed">
    <origin xyz="0.020 0 -0.148" rpy="0 0.05 0" />
    <parent link="RL_calf" />
    <child link="RL_calflower" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RL_calflower1">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.03" radius="0.0155" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_calflower1_joint" type="fixed">
    <origin xyz="-0.01 0 -0.04" rpy="0 0.48 0" />
    <parent link="RL_calflower" />
    <child link="RL_calflower1" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RL_calf_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RL_calf_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 -0.03235 0" />
    <parent link="RL_thigh" />
    <child link="RL_calf_rotor" />
  </joint>
  <link name="RL_foot">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.04" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/foot.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_007-effect"><color rgba="0 0 0 1" /></material></visual>
    <collision>
      <origin rpy="0 0 0" xyz="-0.002 0 0" />
      <geometry>
        <sphere radius="0.022" />
      </geometry>
    </collision>
  </link>
  <joint name="RL_foot_joint" type="fixed" dont_collapse="true">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="RL_calf" />
    <child link="RL_foot" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RR_hip">
    <inertial>
      <origin xyz="0.0054 -0.00194 -0.000105" rpy="0 0 0" />
      <mass value="0.678" />
      <inertia ixx="0.00048" ixy="-3.01E-06" ixz="-1.11E-06" iyy="0.000884" iyz="1.42E-06" izz="0.000596" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="3.1415 3.1415 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/hip.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_001-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="1.5707963267948966 0 0" xyz="0 -0.08 0" />
      <geometry>
        <cylinder length="0.04" radius="0.046" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_hip_joint" type="revolute">
    <origin xyz="-0.1934 -0.0465 0" rpy="0 0 0" />
    <parent link="base" />
    <child link="RR_hip" />
    <axis xyz="1 0 0" />
    <limit lower="-1.0472" upper="1.0472" effort="23.7" velocity="30.1" />
  </joint>
  <link name="RR_hip_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000111842" ixy="0.0" ixz="0.0" iyy="0.000059647" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RR_hip_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="-0.11215 -0.04675 0" />
    <parent link="base" />
    <child link="RR_hip_rotor" />
  </joint>
  <link name="RR_thigh">
    <inertial>
      <origin xyz="-0.00374 0.0223 -0.0327" rpy="0 0 0" />
      <mass value="1.152" />
      <inertia ixx="0.00584" ixy="-8.72E-05" ixz="-0.000289" iyy="0.0058" iyz="-0.000808" izz="0.00103" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/thigh_mirror.dae" />
      </geometry>
      <material name="\u6DF1\u8272\u6A61\u80F6_012-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material><material name="Material_011-effect"><color rgba="0.9 0.95 0.95 1" /></material></visual>
    <collision>
      <origin rpy="0 1.5707963267948966 0" xyz="0 0 -0.1065" />
      <geometry>
        <box size="0.213 0.0245 0.034" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_thigh_joint" type="revolute">
    <origin xyz="0 -0.0955 0" rpy="0 0 0" />
    <parent link="RR_hip" />
    <child link="RR_thigh" />
    <axis xyz="0 1 0" />
    <limit lower="-0.5236" upper="4.5379" effort="23.7" velocity="30.1" />
  </joint>
  <link name="RR_thigh_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RR_thigh_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 0.00015 0" />
    <parent link="RR_hip" />
    <child link="RR_thigh_rotor" />
  </joint>
  <link name="RR_calf">
    <inertial>
      <origin xyz="0.00548 0.000975 -0.115" rpy="0 0 0" />
      <mass value="0.154" />
      <inertia ixx="0.00108" ixy="-3.4E-07" ixz="1.72E-05" iyy="0.0011" iyz="-8.28E-06" izz="3.29E-05" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/calf_mirror.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_006-effect"><color rgba="0 0 0 1" /></material><material name="\u6DF1\u8272\u6A61\u80F6_007-effect"><color rgba="0.6717055 0.6924257 0.7742702 1" /></material></visual>
    <collision>
      <origin rpy="0 -0.2 0" xyz="0.01 0 -0.06" />
      <geometry>
        <cylinder length="0.12" radius="0.013" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_calf_joint" type="revolute">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="RR_thigh" />
    <child link="RR_calf" />
    <axis xyz="0 1 0" />
    <limit lower="-2.7227" upper="-0.83776" effort="45.43" velocity="15.70" />
  </joint>
  <link name="RR_calflower">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.065" radius="0.011" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_calflower_joint" type="fixed">
    <origin xyz="0.020 0 -0.148" rpy="0 0.05 0" />
    <parent link="RR_calf" />
    <child link="RR_calflower" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RR_calflower1">
    <collision>
      <origin rpy="0 0 0" xyz="0 0 0" />
      <geometry>
        <cylinder length="0.03" radius="0.0155" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_calflower1_joint" type="fixed">
    <origin xyz="-0.01 0 -0.04" rpy="0 0.48 0" />
    <parent link="RR_calflower" />
    <child link="RR_calflower1" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="RR_calf_rotor">
    <inertial>
      <origin rpy="0 0 0" xyz="0.0 0.0 0.0" />
      <mass value="0.089" />
      <inertia ixx="0.000059647" ixy="0.0" ixz="0.0" iyy="0.000111842" iyz="0.0" izz="0.000059647" />
    </inertial>
  </link>
  <joint name="RR_calf_rotor_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0 0.03235 0" />
    <parent link="RR_thigh" />
    <child link="RR_calf_rotor" />
  </joint>
  <link name="RR_foot">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.04" />
      <inertia ixx="9.6e-06" ixy="0" ixz="0" iyy="9.6e-06" iyz="0" izz="9.6e-06" />
    </inertial>
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="package://go2_description/dae/foot.dae" />
      </geometry>
      <material name="\u9ED1\u8272\u8DB3\u7AEF_007-effect"><color rgba="0 0 0 1" /></material></visual>
    <collision>
      <origin rpy="0 0 0" xyz="-0.002 0 0" />
      <geometry>
        <sphere radius="0.022" />
      </geometry>
    </collision>
  </link>
  <joint name="RR_foot_joint" type="fixed" dont_collapse="true">
    <origin xyz="0 0 -0.213" rpy="0 0 0" />
    <parent link="RR_calf" />
    <child link="RR_foot" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="imu">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0" />
      <inertia ixx="0" ixy="0" ixz="0" iyy="0" iyz="0" izz="0" />
    </inertial>
  </link>
  <joint name="imu_joint" type="fixed">
    <origin xyz="-0.02557 0 0.04232" rpy="0 0 0" />
    <parent link="base" />
    <child link="imu" />
    <axis xyz="0 0 0" />
  </joint>
  <link name="radar">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0" />
      <inertia ixx="0" ixy="0" ixz="0" iyy="0" iyz="0" izz="0" />
    </inertial>
  </link>
  <joint name="radar_joint" type="fixed">
    <origin xyz="0.28945 0 -0.046825" rpy="0 2.8782 0" />
    <parent link="base" />
    <child link="radar" />
    <axis xyz="0 0 0" />
  </joint>
  <joint name="front_camera_joint" type="fixed">
    <origin rpy="0 0 0" xyz="0.32715 -0.00003 0.04297" />
      <parent link="base" />
      <child link="front_camera" />
  </joint>
  <link name="front_camera">
  </link>
</robot>`, L = Object.assign({ "../../../../../examples/meshes/go2/base.dae": k, "../../../../../examples/meshes/go2/calf.dae": A, "../../../../../examples/meshes/go2/calf_mirror.dae": j, "../../../../../examples/meshes/go2/foot.dae": M, "../../../../../examples/meshes/go2/hip.dae": N, "../../../../../examples/meshes/go2/thigh.dae": P, "../../../../../examples/meshes/go2/thigh_mirror.dae": F }), R = {};
for (let [e2, t2] of Object.entries(L)) {
  let n2 = e2.split(`/`).pop();
  R[`package://go2_description/dae/${n2}`] = t2;
}
var z = { id: `unitree-go2`, name: `Unitree Go2 (quadruped)`, description: `Unitree Go2 quadruped \u2014 official URDF rendered with the upstream Collada meshes. Click Simulate \u25B6 to watch it stand under gravity.`, difficulty: `advanced`, features: [`robotics`, `physics`, `urdf`, `quadruped`], urdf: { urdfText: I, name: `unitree-go2.urdf`, meshes: R } }, B = e({ exampleToVcadFile: () => V });
function V(e2) {
  return { kind: `legacy`, version: `0.1`, document: e2.document, parts: e2.parts, consumedParts: e2.consumedParts, nextNodeId: e2.nextNodeId, nextPartNum: e2.nextPartNum };
}
var H = [t, n, r, i, a, o, u, p, S, C, w, O, z];
export {
  H as n,
  B as r,
  V as t
};
