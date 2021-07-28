const investigation1 = {
    'James': ['Jacob','Bill','Lucas'],
    'Johnny': ['David','Kyle','Lucas'],
    'Peter': ['Lucy','Bill']
}
const investigation2 = {
    'Brad': [],
    'Megan': ['Ben','Kevin'],
    'Finn': []
}

const getKiller = (suspectInfo, deadPeople) => {
    let suspected;
    for(const sus in suspectInfo){
        const res = deadPeople.reduce((t,a) => t && suspectInfo[sus].includes(a), true);
        if(res) suspected = sus;
    }
    console.log(suspected)
    return suspected;
}

getKiller(investigation1, ['Lucas','Bill']);
getKiller(investigation2, ['Ben']);