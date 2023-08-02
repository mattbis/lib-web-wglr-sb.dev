```js
const $T = {}
$T.F_FLT=  .0             /// a flty is false
$T.F_INT=   0             /// a inty is false
$T.F_BOL=  !1             /// a bool has to be false
$T.F_OBJ=  {}             /// a object is empty and false
$T.F_STR=  ''             /// a string is empty false
$T.F_ARR=  []             /// an empty array and is false
$T.FN_ARR_ARR= [[]]      /// they array is array and is false

$T.F_MAP=  new Map()      /// a map that is empty and false
$T.F_SET=  new Set()      /// a set that is empty and false
$T.F_WS=   new WeakSet()  /// a weak set that is empty and false
$T.F_WM=   new WeakMap()  /// a weak map that is empty and false
$T.F_FN=   function() {return !1} /// them in the funciton returns the not one which is teh falses

$T.T_FLT=  .1             /// a flty is true
$T.T_INT=   1             /// a inty is true
$T.T_BOL=  !0             /// a bool has to be true
$T.T_OBJ=  {1:!0}         /// an object is not false
$T.T_STR=  '1'            /// thy string is not false
$T.T_ARR=  [.1]           /// thy string is flty_ and not empty and therefore true
$T.T_FN=   function() {return !0} /// they function is returning the not zeros whichis the true```
