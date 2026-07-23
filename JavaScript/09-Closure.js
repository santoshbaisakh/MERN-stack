function Outer(){
    let outerVar = "Say Hello"
    function Inner(){
        console.log(outerVar)
    }
    return Inner;
}
const closure = Outer()
closure();
closure();

//  Step:-1 ->>

//  A variable "outerVar" is created inside Outer().
//  Normally, the variable is disappeared once the function is closed.

//  Step:-2 ->>

//  Inner() is defined inside Outer() function.
//  It uses outerVar from their parent scope.