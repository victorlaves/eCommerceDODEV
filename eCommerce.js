var id = [], nameP = [], price = [], avaliable = []
var idnumber = 1
var counter = 0
var arraySupId = [], arraySupName = [], arraySupPrice = [], arraySupAvaliable
var keep = true
var counterArraySup = 0


id[0] = 2, id[1] = parseInt(30), id[2] = 3, id[3] = 1, id[4] = 4
nameP[0] = "mouse5", nameP[1] = "mouse4", nameP[2] = "mouse3", nameP[3] = "mouse2", nameP[4] = "mouse1",  
price[0] = 50, price[1] = 40, price[2] = 30, price[3] = 20, price[4] = 10
avaliable[0] = 5, avaliable[1] = 5, avaliable[2] = 4, avaliable[3] = 3, avaliable[4] = 2


function ProductRegistraiton(){
    id[counter] = idnumber
    nameP[counter] = prompt("Digite o nome do produto para registrar")
    price[counter] = parseInt(prompt("Digite o preço do produto para registrar"))
    avaliable[counter] = parseInt(prompt("Digite a avaliação do produto para registrar"))
    counter++
    idnumber++;
}

function SearchID() {
    var search = parseInt(prompt("Qual id voce quer buscar ?"));
    for(var i = 0; i < id.length; i++){
        if(search == id[i]){
    console.log(id[i], nameP[i], price[i], avaliable[i])
        }
    }
}

function SearchName(){
    var searchName = prompt("Qual nome voce deseja buscar ?")
    for(var i = 0; i < nameP.length; i++){
    if(searchName == nameP[i])
    console.log("O produto", nameP[i], "tem a ID ", id[i])
}
}

function OrderProduct(){
arraySupId = [] 
arraySupName = [] 
arraySupPrice = [] 
arraySupAvaliable = [] 
counterArraySup = id.length - 1
var smallNumber = 0
for(var i = 0; i < id.length; i ++){
    smallNumber = id[i]
    for(var i2 = 0  ; i2 <id.length ; i2++){ 
        if(smallNumber < id[i2]){ 
            smallNumber = id[i2] 
        }
    }
    for (var i3 = 0; i3 < id.length ; i3++){ 
        if(smallNumber == id[i3] && smallNumber != 0){ 
        arraySupId[counterArraySup] = parseInt(id[i3]) 
        arraySupName[counterArraySup] = nameP[i3] 
        arraySupPrice[counterArraySup] = parseInt(price[i3]) 
        arraySupAvaliable[counterArraySup] = parseInt(avaliable[i3]) 


        id[i3] = 0 
        counterArraySup-- 
        }
    }
}
for ( var i = 0 ; i < arraySupId.length ; i++){ 
console.log(arraySupId[i], "--", arraySupName[i], "--", arraySupPrice[i], "--", arraySupAvaliable[i])
} 
id = arraySupId
nameP = arraySupName 
price = arraySupPrice 
avaliable = arraySupAvaliable  

return id, nameP, price, avaliable 
}
 

function OrderPrice(){ 
    arraySupId = [] 
    arraySupName = [] 
    arraySupPrice = [] 
    arraySupAvaliable = [] 
    counterArraySup = 0 
    
    var bigPrice = 0 
    for (var i = 0; i < id.length; i ++) { 
        bigPrice = price[i] 
    for(var i2 = 0; i2 < id.length; i2 ++){ 
        if(bigPrice < price[i2]){ 
            bigPrice = price[i2]
        }
    }
    for (var i3 = 0; i3 < id.length ; i3++){
        if(bigPrice == price[i3] && bigPrice != 0){
        arraySupId[counterArraySup] = parseInt(id[i3])
        arraySupName[counterArraySup] = nameP[i3]
        arraySupPrice[counterArraySup] = parseInt(price[i3])
        arraySupAvaliable[counterArraySup] = avaliable[i3]
        counterArraySup++
        price[i3] = 0
        }
    }    
}
for(var i = 0 ; i < arraySupId.length ; i++) {
    console.log(arraySupId[i], "--", arraySupName[i], "--", arraySupPrice[i], "--", arraySupAvaliable[i])
}

id = arraySupId
nameP = arraySupName
price =  arraySupPrice
avaliable = arraySupAvaliable
}


function OrderAvaliable(){
    arraySupId = []
    arraySupName = []
    arraySupPrice = []
    arraySupAvaliable = []
    counterArraySup = 0
    
    var bigAvaliable = 0
    for (var i = 0; i < id.length; i ++) {
        bigAvaliable = avaliable[i]
    for(var i2 = 0; i2 < id.length; i2 ++){
        if(bigAvaliable < avaliable[i2]){
            bigAvaliable = parseInt(avaliable[i2])
        }
    }
    var counter2 = 0
    for (var i3 = 0; i3 < id.length ; i3++){
        if(bigAvaliable == avaliable[i3] && counter2==0){
        arraySupId[counterArraySup] = parseInt(id[i3])
        arraySupName[counterArraySup] = nameP[i3]
        arraySupPrice[counterArraySup] = parseInt(price[i3])
        arraySupAvaliable[counterArraySup] = avaliable[i3]
        counterArraySup++
        counter2++
        avaliable[i3] = 0
        }
    }    
}
for(var contador = 0 ; contador < arraySupId.length ; contador++) {
    console.log(arraySupId[contador], "--", arraySupName[contador], "--", arraySupPrice[contador], "--", arraySupAvaliable[contador])
}

id = arraySupId
nameP = arraySupName
price =  arraySupPrice
avaliable = arraySupAvaliable
}


function RefreshPrice(){
var search = parseInt(prompt("Digite o ID do produto para atualizar"))
for(var i = 0; i < id.length; i ++){
if(search == id[i]){
    price[i] = parseInt(prompt("Digite o preço"))
    console.log("Preço atualizado")
}
}
}


function DeleteP(){
    arraySupId = []
    arraySupName = []
    arraySupPrice = []
    arraySupAvaliable = []
    counterArraySup = 0

    var search = parseInt(prompt("Digite o ID do Produto que deseja excluir"))
    for( var i = 0; i < id.length; i++){
        if(search == id[i] && i < id.length - 1){
            arraySupId[counterArraySup] = parseInt(id[i + 1])
            arraySupName[counterArraySup] = nameP[i + 1]
            arraySupPrice[counterArraySup] = parseInt(price[i + 1])
            arraySupAvaliable[counterArraySup] = parseInt(price[i + 1])

            counterArraySup++
            i++
    }
    else if (search == id[i] && i == id.length - 1){
        
    }
    else {
        arraySupId[counterArraySup] = parseInt(id[i])
        arraySupName[counterArraySup] = nameP[i]
        arraySupPrice[counterArraySup] = parseInt(price[i])
        arraySupAvaliable[counterArraySup] = parseInt(price[i])
        counterArraySup++
    }
}
console.log("Produto deletado")
id = arraySupId
nameP = arraySupName
price =  arraySupPrice
avaliable = arraySupAvaliable
}

function Options(){
    console.log("eCommerce Victor Laves")
    var option = parseInt(prompt("Digite 1 - Cadastrar produto === 2 - Procurar por ID === 3 - Procurar por nome === 4 - Ordenar por ID === 5 - Ordenar por preço === 6 - Procurar por avaliação === 7 - Atualizar Preço === 8 - Deletar Produto === 9 - Encerrar programa"))
    if(option == 1){
    ProductRegistraiton()}
    else if(option == 2){
    SearchID()}
    else if(option == 3){
    SearchName()}
    else if(option == 4){
    OrderProduct()}
    else if(option == 5){
    OrderPrice()}
    else if(option == 6){
    OrderAvaliable()}
    else if(option == 7){
    RefreshPrice()}
    else if(option == 8){
    DeleteP()}
    else if(option == 9){
        keep = false
    }

    return keep    
}
while(keep) {
    Options()
}