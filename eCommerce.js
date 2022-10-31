var id = [], nameP = [], price = [], avaliable = []
var idnumber = 1
var counter = 0
var arraySupId = [], arraySupName = [], arraySupPrice = [], arraySupAvaliable
var keep = true
var counterArraySup = 0

function ProductRegistraiton(){
    id[counter] = prompt("Digite o id do produto para registrar")
    nameP[counter] = prompt("Digite o nome do produto para registrar")
    price[counter] = prompt("Digite o preço do produto para registrar")
    avaliable = prompt("Digite a avaliação do produto para registrar")
    counter++
}

function SearchID() {
    var searchID = prompt("Qual id voce quer buscar ?")
    console.log(id[searchID], nameP[searchID], price[searchID], avaliable[searchID])
}

function SearchName(){
    var searchName = prompt("Qual nome voce deseja buscar ?")
    for(var i = 0; i < nameP.length; i++){
    if(searchName == nameP[i])
    console.log("O produto", nameP[i], "tem a ID ", id[i])
}
}

function OrderProduct(){
var counterId = id.length - 1
for(var i = 0; i < id.length; i ++){
    smallNumber = id[i]
    for(var i2 = 0  ; i2 <id.length ; i2++){
        if(smallNumber < id[i2]){
            smallNumber = id[i2]
        }
    }
    for (var i3 = 0; i3 < id.length ; i3++){
        if(smallNumber == id[i3]){
        arraySupId[counterId] = id[i3]
        arraySupName[counterId] = id[i3]
        arraySupPrice[counterId] = id[i3]
        arraySupAvaliable[counterId] = id[i3]


        id[i3] = 0
        counterId--
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
OrderProduct()

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
        if(bigPrice == price[i3]){
        arraySupId[counterId] = parseInt(id[i3])
        arraySupName[counterId] = nameP[i3]
        arraySupPrice[counterId] = parseInt(price[i3])
        arraySupAvaliable[counterId] = avaliable[i3]
        counterArraySup++
        price[i3] = 0
        }
    }    
}
for(var i = 0 ; i < arraySupId ; i++) {
    console.log(arraySupId[i], "--", arraySupName[i], "--", arraySupPrice[i], "--", arraySupAvaliable[i])
}

id = arraySupId
nameP = arraySupName
price =  arraySupPrice
avaliable = arraySupAvaliable
}
OrderPrice()
