import React, {useEffect, useContext} from "react";
import * as THREE from 'three';

import ItemContext from "../../context/ItemContext";
import { loadModel } from "./helpers";

import './Design.css';

function Design() {

    const {item} = useContext(ItemContext);

    console.log("Design Item Context:", item);

    useEffect(() => {
        let container = document.getElementById('appDesign');
        let itemMesh  = new THREE.Object3D();
        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer();
        let light = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
        let camera = new THREE.PerspectiveCamera( 
            75, 
            container.offsetWidth / container.offsetHeight, 
            .01, 
            1000 
        );
        
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.3;
        renderer.shadowMap.enabled = true;
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    
        container.appendChild(renderer.domElement);

        
        //const loadedModel = loadModel()
        const model = loadModel(item, itemMesh);
        console.log("Loaded Model:", model);
        scene.add(model);

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

        
        

    }, [item]);

    return (
        <div id="appDesign">

        </div>
    );
}

export default Design;