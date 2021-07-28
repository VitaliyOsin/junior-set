const showSuccessMessage = message => console.log(message);
const showErrorMessage = message => console.error(message);

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    if(text.includes(errorSymbol)){
        for(let i=0; i<text.length; i += 1){      
            text[i] === errorSymbol && errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
        }
    }else{
        successCallback('В данном тексте нет запрещенных символов');
    }
    
};

const text = 'Привет! Как дела! Давно мы с тобою не виделись.';

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
