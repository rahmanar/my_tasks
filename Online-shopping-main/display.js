function verifyNum(){
  var num = document.getElementById("number").value;  
  var name = document.getElementById("name").value;  
  if(name=="abdul" && num == "12345" || name=="deepan" && num == "1234" || name=="viki" && num == "123") {  
    window.location="display.html";
    return false;  
 }   else {  
  alert("number is correct");  
}  
}


document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
var valueCount

var price = document.getElementById("price_panner").innerText;
function priceTotal() {
    var total = valueCount * price;
    document.getElementById("price_panner").innerText = total
}

document.querySelector(".plus-btn").addEventListener("click", function () {
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount;
    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled")
        document.querySelector(".minus-btn").classList.remove("disabled")
    }
    priceTotal()
})

document.querySelector(".minus-btn").addEventListener("click", function () {
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount;
    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
    priceTotal()
})


      var count = 0
        function cart1(){
        var b = "PANNER MASALA :";
        count ++;
        
        var amount = document.getElementById("price_panner").innerText;
        var billamount = Number(count)*Number(amount);
        var append = document.getElementById("append").innerHTML = b+ "Quantity : "+count+ " Amount :"+billamount+"Rs";
     }

      var countB = 0
      function cart2(){

        var c = "CHICKEN PIZZA : ";
        countB ++;
        var amount1 = document.getElementById("price_pizza").innerText;
        var billamount1 = Number(countB)*Number(amount1);
        var append1 = document.getElementById("append1").innerHTML = c+"Quantity : "+countB+ " Amount :"+billamount1+"Rs";
        
      }

      var countC = 0
      function cart3(){

        var d = "ICE CAKE : ";
        countC ++;
        var amount2 = document.getElementById("price_cake").innerText;
        var billamount2 = "welcome"; //Number(countC)*Number(amount2);
        var append2 = document.getElementById("append2").innerHTML = d+"Quantity : "+countC+ " Amount :"+billamount2+"Rs";
        
      }

      var countD = 0
      function cart4(){

        var f = "MUTTON BIRIYANI : ";
        countD ++;
        var amount3 = document.getElementById("price_biriyani").innerText;
        var billamount3 = Number(countD)*Number(amount3);
        var append3 = document.getElementById("append3").innerHTML = f+"Quantity : "+countD+ " Amount :"+billamount3+"Rs";
        
      }
     

      function amountTotal () {
        

         alert(append1.value);
        
      }

      function myFunction() {
        var myobj = document.getElementById("append");
        myobj.remove();
      }

      function myFunction1() {
        var myobj = document.getElementById("append1");
        myobj.remove();
      }

      function myFunction2() {
        var myobj = document.getElementById("append2");
        myobj.remove();
      }

      function myFunction3() {
        var myobj = document.getElementById("append3");
        myobj.remove();
      }


      // function cart() {
//     let b = document.createElement("div");
//     b.style.width = "250px";
//     b.style.height = "40px";
//     b.style.border = "3px solid black";
//     b.innerText = "Welcome"


//     b.innerHTML = document.getElementById("append").appendChild(b)
// }

// function stored() {
//     var stored = "Bonjour";
//     var display = document.getElementById("display").innerHTML = stored;
//   }

//     var count = 0;
//   function cart() {
//     var h = document.getElementById("append");
    
//     count ++;
//     h.insertAdjacentHTML("afterbegin", "<h2>WELCOME</h2>"+count);
//   }

//   var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };

  

