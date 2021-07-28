class Dictionary{
    constructor(name){
        this.name = name;
        this.words = {};
    }

    add(word,discription){
        if(word in this.words){
            alert('Такое слово в словаре уже есть.');
        }else{
            this.words[word] = {word,discription};
        }
    }

    remove(key){
        delete this.words[key];
    }

    get(key){
        return `${key} - ${this.words[key].discription}`;
    }

    showAllWords(){
        for(let v in this.words){
            console.log(`${v} - ${this.words[v].discription}`);
        }
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name);
    }

    add(word,discription){
        if(word in this.words){
            alert('Такое слово в словаре уже есть.');
        }else{
            this.words[word] = {
                word,
                discription,
                isDifficult: true
            };
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();
 
// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.