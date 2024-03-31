import * as Clay from "openbim-clay";
import * as OBC from "openbim-components";

import * as THREE from 'three';
import { IFC4X3 as IFC } from "web-ifc";


const faces = new Clay.Faces();

faces.addPoints([
    // Cube coordinates

    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 1],
    [0, 0, 1],

    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],

    // Face with holes coordinates

    [2, 0, 2],
    [3, 0, 2],
    [3, 0, 3],
    [2, 0, 3],

    [2.2, 0, 2.2],
    [2.4, 0, 2.2],
    [2.4, 0, 2.4],
    [2.2, 0, 2.4],

    [2.6, 0, 2.6],
    [2.8, 0, 2.6],
    [2.8, 0, 2.8],
    [2.6, 0, 2.8],
]);

  faces.add(
    [8, 9, 10, 11],
    [
      [12, 13, 14, 15],
      [16, 17, 18, 19],
    ],
  );

faces.add([0, 1, 2, 3]);
faces.add([4, 5, 6, 7]);
faces.add([0, 4, 5, 1]);
faces.add([2, 6, 7, 3]);
faces.add([3, 7, 4, 0]);
faces.add([1, 5, 6, 2]);

// Create a face with 2 holes

faces.add(
    [8, 9, 10, 11],
    [
        [12, 13, 14, 15],
        [16, 17, 18, 19],
    ]);


new OBC.Opening(ifcAPI, modelID);

const model = new OBC.Model();
