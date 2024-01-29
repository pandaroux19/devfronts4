let t = [{id:"0",name:"toto", barre:false},
        {id:"1",name: "marie", barre:false},
        {id:"2",name: "jean", barre:false}]

export {t}


export function addTask(task){
    t.push({id:`${t.length}`,name:`${task}`})
    console.log(t)
}