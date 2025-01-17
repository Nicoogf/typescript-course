// Type Assertion
let chanel : any = "Nicolas"

let chanelSrt = <string> chanel ;
let ChannelStrDos = chanel as string ; 
let main = "main"

const myCanvas =  document.getElementById("main") as HTMLCanvasElement ;
const myCanvasDos = document.getElementById("main") as null ;

const myCanvasTres = <HTMLCanvasElement> document.getElementById(main)