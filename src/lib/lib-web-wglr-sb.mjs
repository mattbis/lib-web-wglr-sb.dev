//export class WGLRSB {
export default class G { /* WGLR_SB */
    static VERSION= '1.0.0'
    static AUTHORS= []

    // allow with iterator ... * [Symbol.iterator](isInstance=this instanceof WGLR2)

    // runtime flags
    f= {
        has_run: void 0
    }

    l= {} // gl layer

    width= $T.F_INT
    height=  $T.F_INT
    
    v= {
        program:    $T.F_OBJ,
        programs:   $T.F_OBJ,
        dom_aspect: $T.F_INT,
        gl_aspect: $T.F_INT,
    }

    options= {
        //[Symbol('gl.dom.precision')]: 6
    }

    // static noop_sync= () => (++WGLRSB['value']['noop_sync'], void 0)

    constructor() {}

    // @void
    set_flags= (flagPairs=[
        'has_oes_element_index_uint', 
        'oes_element_index_unit' 
        // 0 enable oes_element_index_unit extension
    ]) => flagPairs['reduce']((acu,c,i,a) => ((0===2%i) && (this.f[c]=a[i+1]), []),void 0)

    init({
        width= $T.F_INT,
        height= $T.F_INT,
        rootElement= void 0,
        bgColour= void 0,
    }) {
        const cvs= G['get_element']('canvas')
        cvs['width']= w || Math['min'](G['win']['innerWidth'], G['win']['innerHeight'])
        cvs['height']= h || Number(cvs['width'])
        this.width= Number(cvs['width'])
        this.height= Number(cvs['height'])
    }

    /* STATICS */

    static get_element() {}
    
}
