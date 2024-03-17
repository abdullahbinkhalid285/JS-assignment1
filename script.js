document.getElementById("alert").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert(" My name is Abdullah bin Khalid"  )

    
}
document.getElementById("alertnumber").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    alert(
        17
    )

    
}
document.getElementById("camelcase").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let html=("myNameIsAbdullahBinKhalid")
    document.getElementById("output").innerHTML = html
    
}



document.getElementById("variable").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let html=("<ul><li>Variable must be unique.</li><li>Variable not be a reserved keyword.</li><li>Variable can containe upper case letter.</li><li>Variable can contain specail symbols</li></ul>")
    document.getElementById("output").innerHTML = html
    
}

document.getElementById("add").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 10
    let b = 5 
    let c = a + b
    document.getElementById("output").innerHTML = c
    let html = ("let a = 5<br>let b =  10  <br>let c = a + b")
    document.getElementById("input").innerHTML = html

}
document.getElementById("subtract").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 10
    let b = 5 
    let c = a - b
    document.getElementById("output").innerHTML = c
    let html = ("let a = 5<br>let b =  10  <br>let c = a - b")
    document.getElementById("input").innerHTML = html

}
document.getElementById("multiplication").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 10
    let b = 5 
    let c = a*b
    document.getElementById("output").innerHTML = c
    let html = ("let a = 5<br>let b =  10  <br>let c = a*b")
    document.getElementById("input").innerHTML = html

}
document.getElementById("division").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let a = 10
    let b = 5 
    let c = a/b
    document.getElementById("output").innerHTML = c
    let html = ("let a = 5<br>let b =  10  <br>let c = a/b")
    document.getElementById("input").innerHTML = html

}
document.getElementById("dmas").onclick = function(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    let c = 36
    document.getElementById("output").innerHTML = c
    let html = ("3*4/2+6**2-(2*3)")
    document.getElementById("input").innerHTML = html

}

document.getElementById("clear-output").onclick = function(){
    document.getElementById("output").innerHTML = ""
}
document.getElementById("clear-input").onclick = function(){
    document.getElementById("input").innerHTML = ""
}

