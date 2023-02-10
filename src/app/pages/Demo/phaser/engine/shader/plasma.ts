export const plasma_shader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 fragCoord;

#define iTime time
#define iResolution resolution

#define PI 3.14159265358979

// Convert HSL colorspace to RGB. http://en.wikipedia.org/wiki/HSL_and_HSV
vec3 HSLtoRGB(in vec3 c)
{
	vec3 rgb = clamp(abs(mod(c.x+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);
	return c.z+c.y*(rgb-0.5)*(1.-abs(2.*c.z-1.));
}

vec3 HSL2RGB_CubicSmooth(in vec3 c)
{
    vec3 rgb = clamp(abs(mod(c.x+vec3(0.,4.,2.),6.)-3.)-1.,0.,1.);
    rgb = rgb*rgb*(3.0-2.0*rgb); // iq's cubic smoothing.
    return c.z+ c.y*(rgb-0.5)*(1.-abs(2.*c.z-1.));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = (-1.+2.*fragCoord.xy/iResolution.xy)*vec2(iResolution.x/iResolution.y,1.);
	float fAngle = iTime*0.4;
	float h = atan(uv.x,uv.y) - fAngle;
	float x = length(uv);
	float a = -(0.6+0.2*sin(iTime*3.1+sin((iTime*0.8+h*2.0)*3.0))*sin(iTime+h));
	float b = -(0.8+0.3*sin(iTime*1.7+sin((iTime+h*4.0))));
	float c = 1.25+sin((iTime+sin((iTime+h)*3.0))*1.3)*0.15;
	float l = a*x*x + b*x + c;
	vec3 hsl_standard = HSLtoRGB(vec3(h*3./PI,1.,l));
	vec3 hsl_cubic = HSL2RGB_CubicSmooth(vec3(h*3.0/PI,1.,l));
	fragColor = vec4(hsl_cubic,1.0);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
    gl_FragColor.a = 0.0;
}
`;
export const flame_shader = `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;

varying vec2 fragCoord;

#define iTime time
#define iResolution resolution

float noise(vec3 p) //Thx to Las^Mercury
{
	vec3 i = floor(p);
	vec4 a = dot(i, vec3(1., 57., 21.)) + vec4(0., 57., 21., 78.);
	vec3 f = cos((p-i)*acos(-1.))*(-.5)+.5;
	a = mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)), f.x);
	a.xy = mix(a.xz, a.yw, f.y);
	return mix(a.x, a.y, f.z);
}

float sphere(vec3 p, vec4 spr)
{
	return length(spr.xyz-p) - spr.w;
}

float flame(vec3 p)
{
	float d = sphere(p*vec3(1.,.5,1.), vec4(.0,-1.,.0,1.));
	return d + (noise(p+vec3(.0,iTime*2.,.0)) + noise(p*3.)*.5)*.25*(p.y) ;
}

float scene(vec3 p)
{
	return min(100.-length(p) , abs(flame(p)) );
}

vec4 raymarch(vec3 org, vec3 dir)
{
	float d = 0.0, glow = 0.0, eps = 0.02;
	vec3  p = org;
	bool glowed = false;
	
	for(int i=0; i<64; i++)
	{
		d = scene(p) + eps;
		p += d * dir;
		if( d>eps )
		{
			if(flame(p) < .0)
				glowed=true;
			if(glowed)
       			glow = float(i)/64.;
		}
	}
	return vec4(p,glow);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 v = -1.0 + 2.0 * fragCoord.xy / iResolution.xy;
	v.x *= iResolution.x/iResolution.y;
	
	vec3 org = vec3(0., -2., 4.);
	vec3 dir = normalize(vec3(v.x*1.6, -v.y, -1.5));
	
	vec4 p = raymarch(org, dir);
	float glow = p.w;
	
	vec4 col = mix(vec4(1.,.5,.1,1.), vec4(0.1,.5,1.,1.), p.y*.02+.4);
	
	fragColor = mix(vec4(0.), col, pow(glow*2.,4.));
	//fragColor = mix(vec4(1.), mix(vec4(1.,.5,.1,1.),vec4(0.1,.5,1.,1.),p.y*.02+.4), pow(glow*2.,4.));

}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
    gl_FragColor.a = 0.0;
}
`;
