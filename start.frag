const float PI = 3.1415926535;

float DistLine(vec3 ro,vec3 rd,vec3 p){
    return length(cross(p-ro,rd))/length(rd);
}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0.5 to 0.5)
    vec2 uv = fragCoord/iResolution.xy;
    uv -= .5;
    uv.x *= iResolution.x/iResolution.y;

    float col;// black write by vec3(float)

    // Time varying pixel color
    // vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    // float d = length(uv);
    // float r = 0.3;
    // float col;


    // circle =======================
    // col = smoothstep(r-0.001,r,d);
    // col = smoothstep(r,r-0.001,d);


    // rectangle= ====================
    // col = smoothstep(-.001,.001,uv.x+0.2);
    // col -= smoothstep(-.001,.001,uv.x-.2);
    // col *= smoothstep(-.001,.001,uv.y-.2);


    // polar cordinate =======================
    // vec2 st = vec2(atan(uv.x,uv.y),length(uv));


    // col = st.x; // -Pi to Pi
    // col = st.x/PI * .5;// -0.5 to 0.5
    // col += 0.5; // 0 to 1;



    // col = st.y; // 0 to 1



    // 3d and camera ====================
    vec3 ro = vec3(0.,0.,-10.);
    vec3 rd = vec3(uv.x,uv.y,-9.) - ro;

    float t = iTime;
    vec3 p = vec3(sin(t),0.,1.+cos(t));

    float d = DistLine(ro,rd,p);
    d = smoothstep(.1,.09,d);

    col = d;

    // Output to screen
    fragColor = vec4(vec3(col),1.0);
}

