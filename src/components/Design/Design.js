import React, {useEffect, useState} from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import './Design.css';

function Design() {

    const shirtColor = useState("");

    useEffect(() => {
        let container = document.getElementById('appDesign');
        let obj  = new THREE.Object3D();
        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer();
        let light = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
        let camera = new THREE.PerspectiveCamera( 75, container.offsetWidth / container.offsetHeight, .01, 1000 );
        
        //rendershirt(shirtColor, obj, renderer, scene, camera, light, container);

    }, [shirtColor]);

    function loadItem(){

    }


    

    return (
        <div id="appDesign">
        </div>
    );
}

export default Design;





/*
    function rendershirt(shirtColor, obj, renderer, scene, camera, light, container) {
    
        //Add Renderer
        
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.3;
        renderer.shadowMap.enabled = true;
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    
        container.appendChild(renderer.domElement);
        console.log("Shirt Color from render shirt:", shirtColor);
        loadTshirt(obj, shirtColor, scene);
        scene.background = new THREE.Color(0xA9A9A9);
        light.position.set( 0, 1, 0 ); //default; light shining from top
        
        scene.add(light);
        scene.add(new THREE.AxesHelper(500));
        
        camera.position.set(0, 25, 50);
        
        function render() {
            scene.remove();
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        render();
    }

    function loadTshirt(obj, shirtColor, scene) {
        let loader = new GLTFLoader();
        loader.load('./modelss/test2/tshirtFinal.gltf', (gltf) => {
            obj = gltf.scene.children[4]; // Actual Mesh
            obj.traverse(n => {
                if (n.isMesh) {
                    n.castShadow = true;
                    n.receiveShadow = true;
                    
                    if (n.material.map) n.material.map.anisotropy = 16;
                }
            });
            console.log("Shirt Color from loadTshirt:", shirtColor);
            obj.material.color.set(shirtColor);
            
            //obj.material.color.b = shirtColor.b;
            //obj.material.color.g = shirtColor.g;
            //obj.material.color.r = shirtColor.r;
            
            //localStorage.setItem('eezyDesign', JSON.stringify(obj));
            scene.add(obj);
            console.log("GTLF Loaded:", obj)
            
        }, undefined, (error) => {
            console.log(error);
        });
    }
    */