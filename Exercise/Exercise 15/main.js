let Peaple = [
    {name:"Alice", age:25, city:"Wonderland"},
    {name:"Bob", age:30, city:"Builderland"},
    {name:"Charlie", age:35, city:"chocalate Factory"}
]
console.log("Properties and Value of each person")
for (const index in Peaple){
    console.log("--------");
    for (const key in Peaple[index]){
        console.log(key + ":" + Peaple[index][key])
    }

}