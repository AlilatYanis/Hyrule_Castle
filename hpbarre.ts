export default function hpbarre(hp: number, max: number): {pv: string, no: string} {
    let hp10 = hp/10;
    let max10 = max/10;
    let pv:string = '';
    for (let i: number = 0; i < hp10 ; i += 1) {
        pv =`${pv}❤️​`;
    }
    let no:string ='';
    for(let j: number = 0 ; j <max10 - hp10; j += 1 ){
        no =`${no}​🖤​​`;
    }
    return {pv, no};
    
}