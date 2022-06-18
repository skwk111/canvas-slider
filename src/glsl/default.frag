precision highp float;
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
varying vec2 vUv;

//テクスチャの取得
uniform sampler2D texture;
uniform sampler2D texture1;

#define TAU 6.28318530718
#define MAX_ITER 5

#define INIT_WEIGHT_TIME 1.0
#define MAX_DIRECTION_TIME 3.0

vec3 hsv(float hue) {
    return clamp(abs(fract(hue + vec3(0, 2, 1) / 3.) * 6. - 3.) - 1., 0., 0.6) * mouse.x * mouse.y;
}

float op(float pos_x, float t, float num) {
    return smoothstep(-0.3, 0.5, cos(num + pos_x + t));
}

float full_op(float x, float t, float num, float edge0, float edge1) {
    return smoothstep(edge0, edge1, cos(num + x + t));
}

void main(void) {
    float t = time * .55;
    vec2 uv = vUv;

    // vec2 p = mod(uv * TAU, TAU) - 250.0;
    // vec2 i = vec2(p);
    // float c = 1.0;
    // float inten = .005;

    // for(int n = 0; n < MAX_ITER; n++) {
    //     float t = t * (1.0 - (3.5 / float(n + 1)));
    //     i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    //     c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
    // }
    // c /= float(MAX_ITER);
    // c = 1.17 - pow(c, 1.4);
    // vec3 colour = vec3(pow(abs(c), 8.0));
    // colour = clamp(colour + hsv(t), 0.0, 1.0);

    // colour += (texture2D(texture, vUv).rgb / 3.0);

    vec3 colour = vec3(0);
    vec3 tex = texture2D(texture, vUv).rgb * op(uv.x, t, 0.0);
    vec3 tex1 = texture2D(texture1, vUv).rgb * op(uv.x, t, 3.2);
    // float m = 1.0;
    // if(time >= INIT_WEIGHT_TIME)
    //     m = (cos((time * 2.0 - (INIT_WEIGHT_TIME * 2.0)) / MAX_DIRECTION_TIME) + 1.0) / 2.0;

    // float op = 1.0;
    // if(uv.x >= m) {
    //     if((uv.x - m) < 1.0)
    //         op = 0.3 - (uv.x - m);
    //     else
    //         op = 0.0;
    // }

    colour += tex;

    colour += tex1;

    gl_FragColor = vec4(colour, 1.0);

    // 変更後にnpm run buildを実行
}