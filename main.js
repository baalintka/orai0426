import Szemely from "./szemely.js";
$(function(){
    const szuloElem=$(".tarolo")
    console.log("hello");
    const szemely1= new Szemely("Béla",1965,szuloElem);
    console.log(szemely1.nev);
    console.log(szemely1);
    const szemely2= new Szemely("Kende",2003,szuloElem);
    console.log(szemely2.nev);
    console.log(szemely2);
    const szemely3= new Szemely("Béla",2023,szuloElem);
    console.log(szemely3.nev);
    console.log(szemely3);
    szemely3.nev="Benedek";
    console.log(szemely3.nev);
    
})