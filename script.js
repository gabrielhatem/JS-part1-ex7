function myFunction() {
    var ShoeSize = parseInt(document.getElementById("shoeSize").value);
    var YearOfBirth = parseInt(document.getElementById("yearOfBirth").value);
    if(String(ShoeSize) == "NaN" || String(YearOfBirth) == "NaN")
    {
        alert("Merci de remplir les champs avec que des nombres.")
        return
     }
    var Total = (((ShoeSize * 2 + 5) * 50) - YearOfBirth) + 1766;
    alert(Total);
}