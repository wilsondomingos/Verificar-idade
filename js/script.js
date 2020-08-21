function verificar(){
   var data=new Date()
   var ano=data.getFullYear()
   var fano=document.getElementById('txtano')
   var res=document.querySelector('div#res')

   if(fano.value <= 0){
       window.alert('ERRO! ano da pessoa não pode ser zero ou abaixo de zero')
   }else if(fano.value > ano ){
       window.alert(' ERRO! O ano da pessoa não pode ser maior que o ano actual')
   }else{

    var fsex=document.getElementsByName('radsex')
    var idade= ano - Number(fano.value)
    var genero=''
    var img=document.createElement('img')
    img.setAttribute('id','foto')

    if(fsex[0].checked){
        genero='Homem'

        if(idade>=0 && idade<=14){
         img.setAttribute('src','./img/cria_mas.png')
         //criaca
        }else if(idade >=15 && idade <=26){
            img.setAttribute('src','./img/Adol_Mas.png')
          //adolescente
       
        }else if(idade <=59){
            img.setAttribute('src','./img/adul_mas.png')
            // adulto
        }else{
            img.setAttribute('src','./img/idoso_mac.png')
            //idoso
        }

        

    }else if(fsex[1].checked){
       genero='Mulher'


       if(idade>=0 && idade<=14){
        img.setAttribute('src','./img/cria_Fem.png')
        //criaca
       }else if(idade >=15 && idade <=26){
        img.setAttribute('src','./img/Adol_Fem.png')
         //adolescente
     
       }else if(idade <=59){
        img.setAttribute('src','./img/adul_Fem.png')
           // adulto
       }else{
        img.setAttribute('src','./img/idoso_Fem.png')
         
   }
}
   res.style.textAlign='center'
   res.style.color='blue'
   res.innerHTML=`Detectamos ${genero} com ${idade} anos de idade`
   res.appendChild(img)


}
}