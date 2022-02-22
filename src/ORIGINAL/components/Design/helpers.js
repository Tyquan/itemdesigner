import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Helper functions

export const loadModel = (items, itemMesh) => {
    console.log("LOAD MODEL ITEM:", items);
    let loader = new GLTFLoader();
    let model = {};
    loader.load(`./models/${items.itemName}.gltf`, (response) => {
        console.log("Response", response);
        itemMesh = response.scene.children[4]; // returned file from te models
        itemMesh.traverse(n => {
            n.castShadow = true;
            n.receiveShadow = true;
            if (n.material.map) {
                n.material.map.anisotropy = 16;
            }
        });
        itemMesh.material.color.set(items._currentValue.itemColor);
        console.log("ItemMesh", itemMesh);
        model = itemMesh;
        
    });
    return model;
};

/*


*/