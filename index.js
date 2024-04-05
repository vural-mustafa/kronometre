//readline komutu ice aktarildi
const readline=require('readline');

//Kullanici icin gerekli olan standart giris cikis islemi tamamlandi.
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//Kronometreyi baslatmak icin gerekli olan degisken tanimlandi.
let startTime;

// Baslatma Fonksiyonu

function startTimer(){
    startTime=new Date().getTime();
    console.log('Kronomete baslatildi.');
}

//Durdurma Fonksiyonu

function stopTimer(){
    if(!startTime){
        console.log('Kronometre baslatilmadi');
    }
    const endTime=new Date().getTime();
    const elapsedTime= (endTime-startTime)/1000;
    console.log('Grecen Sure:',elapsedTime,'saniye');
}

// Start,stop fonksiyonlarını calistirmak ve cikis islemleri yabildi.
r1.on('line',(input)=>{
    if(input=='start'){
        startTimer();
    }else if(input=='stop'){
        stopTimer();
    }else if(input=='exit'){
        r1.close();
    }else{
        console.log('Yanlis islem.start,stop ya da exit yazin');
    }
});

console.log('Kronometreyi baslatmak icin "start" durdurmak icin "stop" cikmak icin "exit" yazin');

