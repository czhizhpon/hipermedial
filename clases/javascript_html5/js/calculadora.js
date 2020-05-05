function print_value(n){
    
    var resul_elem = document.getElementById("label_result");
    
    if(n == "C"){
        resul_elem.textContent = 0;
    } else if(resul_elem.textContent == 0){
        resul_elem.textContent = n;
    }else{
        resul_elem.textContent = resul_elem.textContent + n;
    }
    
}

function calc_result(){
    var resul_elem = document.getElementById("label_result");
    resul_elem.textContent = eval(resul_elem.textContent);
}