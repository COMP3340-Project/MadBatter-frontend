window.onload = function(){
gentable();
}
function gentable(){
var prods=10; //get how many products are in the category
var htmlTxt="<table>\n";
var tempP=0;
var rows;
if(prods%3==0) rows=prods/3;
else rows= Math.floor(prods/3)+1;
console.log(prods);

for(var i=0; i<rows; i++){
    htmlTxt+="<tr>\n";
    for(var j=0; j<3 && j<prods; j++){
        if(tempP<prods){
            htmlTxt+="<td>\n";
            htmlTxt+="<div class='card'>\n";
                htmlTxt+="<img src='../img1.png'>\n"; // Needs to get the tempP th product image in the category
                htmlTxt+="<div class='container'\n>";
                    htmlTxt+="<p>Product Name <button id='"+i+"-btn'>Order Now</button</p>"; // Needs to get the tempP th product name in the category
                htmlTxt+="</div>\n</div>\n</td>";
            tempP++;
        }
    }
    htmlTxt+="</tr>";
}
htmlTxt+="</table>";
document.getElementById("table").innerHTML=htmlTxt;
console.log(htmlTxt);
}