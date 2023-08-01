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
```
