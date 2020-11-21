var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    //xhr.readyState === 4: server'ın bize verdiği cevap hazır
    //xhr.status === 200; gelen response başarılı
    if (xhr.readyState === 4 ){

        if(xhr.status ===200){
            console.log(xhr.responseText);
        }
        else if (xhr.status ===404){
            console.log("Kaynak Bulunamadı");
        }
    }
}

//Server'dan bilgi beklerken GET, server'a bilgi yüklerken POST
//Server'dan gelen bilgileri msg.txt'ye koy
//true ise asenkron, false ise asenkron değil.

//server'dan bilgi gelirken, müşteriye loading kısmı gösterilirken kullanılabilir
xhr.onprogress = function(){
    console.log('on processing');
}

xhr.open('GET','msg.txt',true);
xhr.send();

console.log('hello');
