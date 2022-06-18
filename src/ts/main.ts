import * as THREE from "three";

import def_vert from "../glsl/default.vert";
import def_frag from "../glsl/default.frag";

let mouse = new THREE.Vector2(0, 0);

class Stage {
    canvas: any;
    canvas_width: number = 0;
    canvas_height: number = 0;
    scene: THREE.Scene = new THREE.Scene;
    camera: THREE.OrthographicCamera = new THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer;
    geometry = null;
    material = null;
    mesh = null;

    isInitialized = false;
    isFullScreenCanvas: boolean = false;

    resolution: THREE.Vector2 = new THREE.Vector2;

    cameraParam = {
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: 0,
        far: -1
    };

    renderParam = {
        width: 0,
        height: 0
    }

    constructor(isFullScreenCanvas: boolean = false) {
        this.isFullScreenCanvas = isFullScreenCanvas;
    }



    init(canvas_id: string) {
        this._setRender(canvas_id);
        this._setCamera();
        this.canvas.addEventListener('mousemove', this.mouseMove, true);

        this.isInitialized = true;
    }

    _setRender(canvas_id: string) {
        this.canvas = document.getElementById(canvas_id) as HTMLInputElement;
        this.canvas_width = this.canvas.width;
        this.canvas_height = this.canvas.height;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas
        });

        if (this.isFullScreenCanvas) {
            this.renderParam = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        } else {
            this.renderParam = {
                width: this.canvas_width,
                height: this.canvas_height
            };
        }

        this.renderer.setSize(this.renderParam.width, this.renderParam.height);
    }

    _setCamera() {

        if (!this.isInitialized) {
            this.camera = new THREE.OrthographicCamera(
                this.cameraParam.left,
                this.cameraParam.right,
                this.cameraParam.top,
                this.cameraParam.bottom,
                this.cameraParam.near,
                this.cameraParam.far
            );
        }

        let windowWidth = this.canvas_width;
        let windowHeight = this.canvas_height;

        if (this.isFullScreenCanvas) {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
        }

        this.renderer.setSize(windowWidth, windowHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // this.camera.aspect = windowWidth / windowHeight;

        this.camera.updateProjectionMatrix();

        this.resolution = new THREE.Vector2(windowWidth, windowHeight);
    }

    _render() {
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        this._setCamera();
    }

    onRaf() {
        this._render();
    }

    getResolution() {
        return this.resolution;
    }

    mouseMove(e: any) {
        mouse = new THREE.Vector2(e.offsetX / window.innerWidth, e.offsetY / window.innerHeight);
    }

    _getCanvas(){
        return this.canvas;
    }
}

class Mesh {
    geometryParm = {};

    materialParam = { useWireframe: false };



    uniforms = {
        time: { type: "f", value: 1.0 },
        mouse: { type: "v2", value: new THREE.Vector2(0, 0) },
        resolution: { type: "v2", value: new THREE.Vector2(0, 1) },

        //テクスチャ
        texture: { type: 't', value: null },
        texture1: { type: 't', value: null }
    };

    stage: Stage = new Stage;

    mesh: THREE.Mesh = new THREE.Mesh;

    windowWidth = 0;
    windowHeight = 0;

    windowWidthHalf = 0;
    windowHeightHalf = 0;
    startTime = new Date().getTime();

    constructor(stage: Stage) {
        this.stage = stage;
    }

    init() {
        this._setMesh();
    }

    _setMesh() {
        let parentClass: Mesh = this;

        const geometry = new THREE.PlaneBufferGeometry(2, 2);
        const material = new THREE.RawShaderMaterial({
            vertexShader: def_vert,
            fragmentShader: def_frag,
            uniforms: parentClass.uniforms
        });

        const texture = new THREE.TextureLoader().load('./img/dummy1.png');
        const texture1 = new THREE.TextureLoader().load('./img/dummy2.png');

        material.uniforms.texture.value = texture;
        material.uniforms.texture1.value = texture1;

        parentClass.mesh = new THREE.Mesh(geometry, material);

        parentClass.stage.scene.add(parentClass.mesh);
    }

    _render() {
        this.uniforms.time.value = (new Date().getTime() - this.startTime) * 0.001;
    }

    onRaf() {
        this._render();
    }
}

((isFullScreenCanvas = false) => {
    const stage = new Stage(isFullScreenCanvas);
    stage.init("myCanvas");
    const mesh = new Mesh(stage);
    mesh.init();

    window.addEventListener("resize", () => {
        stage.onResize();
        mesh.uniforms.resolution.value = stage.getResolution();
    });

    const _raf = () => {
        window.requestAnimationFrame(() => {
            stage.onRaf();
            mesh.onRaf();
            mesh.uniforms.mouse.value = mouse;
            _raf();
        });
    };

    _raf();
})();