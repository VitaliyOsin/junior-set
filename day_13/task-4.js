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

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие