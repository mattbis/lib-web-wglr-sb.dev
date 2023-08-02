here is a bit of what I did before :

js```
wooooooooooooooahh what is this?

  static m(
    op=void 0,
    aVec2=void 0,
    bVec2=void 0,
    target=void 0,
    // ignore
    type=
      (WGLR2['Vec22']['bin'][op])
        ? 'bin'
        : (WGLR2['Vec22']['una'][op])
        ? 'una'
        : void 0,
    //_inv=invariant(type===void 0,'incorrect op'),
    // retVal=[Math[op](aVec2[0]),Math[op](aVec2[1])]]
    // retVal=[Math[op](aVec2[1],aVec2[0])
    method=Math[op],
    // not quite right yet, almost - mind coding this one
    res1=[method(...(aVec2!==void 0 && bVec2!==void 0)
      ? [aVec2[0], bVec2[0]]
      : [aVec2[0]]
    )]||void 0,
    res2=[method(...(aVec2!==void 0 && bVec2!==void 0)
      ? [aVec2[1], bVec2[1]]
      : [aVec2[1]]
    )]||void 0,
    spreadBol=!0
  ) {return !1===spreadBol 
    ?[res1, res2] 
    :[...res1,...res2]}

  constructor(il/*indices length*/, vl/*vert length*/) {
    this.indices=  il,new Uint16Array(il) ?? $T.F_INT
    this.vertices= vl,new Uint16Array(vl) ?? $T.F_INT
  }

#structure_divisor=() => {}
  #smooth_intersect=() => void 0
  #circular_join=() => void 0
  #free_join=() =>  void 0


  #make_strip_segment= () => {}
  #make_triangular_segment=() => {}
  
  // for a structure create the triangle or the differing types of things i forgot about
  #make_faces_geometry=() => {
    // take the geometry and turn into a type of face for the line... basically.. probably... 
    // for each 3 forwards, do the others or whatever
  }

  // whack in more stuff i nconverted before etc

  /// instead of fromValues, uses WGLR2.fr3 ( like fround but 3 )
  static angle=(
    aVec3=void 0,
    bVec3=void 0,
    normA=WGLR2['Vec33']['norm'](WGLR2['fr3'](aVec3)),
    normB=WGLR2['Vec33']['norm'](WGLR2['fr3'](aVec3)),
    cos=WGLR2['Vec33']['dot'](normA, normB)
  ) => cos>1.0 
    ?0 
    :Math['acos'](cos)

    based on the uber class


      // product    
  static dot=(aVec3=void 0,bVec3=void 0) => aVec3[0]*bVec3[0] + aVec3[1]*bVec3[1] + aVec3[2]*bVec3[2]

   static add=(
    aVec3=void 0,
    bVec3=void 0,
    target=void 0,
    retVal=[aVec3[0]+bVec3[0], aVec3[1]+bVec3[1], aVec3[2]+aVec3[2]]
  ) => target&&(target[0]=retVal[0],target[1]=retVal[1],target[2]=retVal[2], target) || retVal

    static transform_mat_quad=(
    aVec3=void 0,
    qVec3=void 0,// dunno why call it q, need more maths for meself
    target=void 0,// output reference
    retVal=void 0, // transient return
    qx=qVec3[0], qy=qVec3[1], qz=qVec3[2], qw=qVec3[3],
    x=aVec3[0], y=aVec3[1], z=aVec3[2], 
    uvx=qy*z - qz*y,
    uvy=qz*x - qx*z, 
    uvz=qx*y - qy*x,
    w2=qw * 2
  ) => (
    (uvx *= w2,uvy *= w2,uvz *= w2),
    (target[0]=retVal[0],target[1]=retVal[1],target[2]=retVal[2],target)
  )
```

// we totally are not doing the above but it was fun to try that style... this time just using the depths of regl.. and


/* region VEC22*/
WGLR2['Vec22']= class Vec22 {
  msg= 'Vec22: '
  x=void 0 /// set directly as a property
  y=void 0 /// set directly as a property
  value=void 0 /// has no type unless constructed

  set_property(
    x=void 0,
    y=void 0,
    i=$T.F_INT
  ) {
    invariant(void 0===x && void 0===y && void 0===i,'invalid parameters')
    this[i,`x${i}`||'x']=x
    this[i,`y${i}`||'y']=y
    return void 0
  }

just how i was thinking avbout it before


static rot=(
    angle=void 0, 
    x=void 0, y=void 0,
    target=void 0,
    // ignore
    useRads=!0,
    TO_RAD= useRads ?Math.PI/180 :void 0,
    cosR=Math['cos'](angle * (useRads ?1 :TO_RAD)), 
    sinY=Math['cos'](angle * (useRads ?1 :TO_RAD)),
    retVal=[x*cosR - y*sinY, x*sinY + y*cosR]
  ) => target&&(target[0]=retVal[0],target[1]=retVal[1], target) || retVal

/*region FIFI*/
/// using num you build bound interface to chosen size
WGLR2['fifi']= class fifi {/// float interface float interface
  /*region PF*/
  /// temporary lazy testing
  static pf_map=(f=$T.F_FLT) => WGLR2['pf'](f)
  
  /// precisely fast
  static pf=(
    flt= $T.F_FLT,
    precision= 5,
    fact= Math.pow(10,precision),
    retVal= Math.round(flt*fact
  )) => retVal/fact
  /*endregion PF*/

  /* region CONSTANTS*/
  EPSILON= 0.000001
  /* endregion CONSTANTS*/
  
  /* region ANGULAR*/
  static rad_to_deg= (rad=$T.F_FLT) => rad*180 / Math.PI /// radians to degrees
  static deg_to_rad= (deg=$T.F_FLT) => deg*Math.PI / 180 /// degrees to radians


it appears i was intent on rewriting the entire stack in my madness.... into classy class class... hehehe
