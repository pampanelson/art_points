
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = (fragCoord*2.-iResolution.xy)/iResolution.y;
    fragColor = vec4(0);
    
    // movements =======
    //float t = 2.*iTime + 3.141592/12.*(5.+1.*stepping(sin(iTime)));
    //vec2 p = vec2(cos(t),sin(t));
    //p *= cos(iTime + 3.141592*cos(iTime/8.));
    //vec2 p = vec2(.8*sin(iTime),.8*cos(iTime));
    
    // colors changing by time ======================
    //vec3 col = cos(vec3(0,1,-1)*3.141592*2./3.+3.141925*(iTime/2.)) * 0.5 + 0.5;
    
    
    // neo color happend here ==========
    vec3 col = vec3(1.,0.,0.);
    vec2 p = vec2(-1.5,0.); // TODO ===== find position and radius 2019/05/04
    fragColor += vec4(0.025/length(uv-p)*col,1.0);
    
    //fragColor.xyz = pow(fragColor.xyz,vec3(3.));
    fragColor.w = 1.0;
}