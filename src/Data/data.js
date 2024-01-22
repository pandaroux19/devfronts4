let t = [{id:"0",name:"toto"},
        {id:"1",name: "marie"},
        {id:"2",name: "jean"}]

export {t}


export function addTask(task){
    t.push({id:`${t.length}`,name:`${task}`})
    console.log(t)
}