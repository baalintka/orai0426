class Szemely {
    #szulNev;
    constructor(nev,szulDatum,szuloElem){
        this.nev=nev;
        this.szulDatum=szulDatum;
        this.#szulNev=nev;
        szuloElem.append(`
        <div class="szemely">
        <h3>${this.#szulNev}</h3>
        <p>${this.kor()}<p>
        `)
        this.#szemelyELEM=$(".szemely:last-child");
        this.#szemelyELEM.on("click",function(){

            console.log(this)
        })
        this.#szemelyELEM.on("click",()=>{

            console.log(this)
        })

    }
    getSzuletesinev(){
        return this.#szulNev;

    }
    eetSzuletesinev(ujnev){
        return this.#szulNev=ujnev;

    }
    kor(){

        const d = new Date();
        let year = d.getFullYear();
        let aktualisKor=year-this.szulDatum;
        return aktualisKor;
    }

}
export default Szemely;