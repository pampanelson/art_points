float DistLine(vec3 ro,vec3 rd,vec3 p){
    return length(cross(p-ro,rd))/length(rd);
}

float DrawPoint(vec3 ro,vec3 rd,vec3 p){
    float d = DistLine(ro,rd,p);
    d = smoothstep(.06,.05,d);
    return d;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    uv -= .5;
    uv.x *= iResolution.x/iResolution.y;

    vec3 camera = vec3(0.,0.,-5.);

    vec3 lookat = vec3(0.5);

    float zoom = 2.;
    vec3 worldUp = vec3(0.,1.,0.);
    vec3 f = normalize(lookat - camera);
    vec3 r = cross(worldUp,f);
    vec3 u = cross(f,r);

    vec3 center = camera + f*zoom;
    vec3 intersection = center + uv.x * r + uv.y * u;

    vec3 rd = intersection - camera;

    float col = 0.;
    col += DrawPoint(camera,rd,vec3(0.,0.,0.));
    col += DrawPoint(camera,rd,vec3(0.,0.,1.));
    col += DrawPoint(camera,rd,vec3(0.,1.,0.));
    col += DrawPoint(camera,rd,vec3(0.,1.,1.));
    col += DrawPoint(camera,rd,vec3(1.,0.,0.));
    col += DrawPoint(camera,rd,vec3(1.,0.,1.));
    col += DrawPoint(camera,rd,vec3(1.,1.,0.));
    col += DrawPoint(camera,rd,vec3(1.,1.,1.));

    // Output to screen
    fragColor = vec4(vec3(col),1.0);
}