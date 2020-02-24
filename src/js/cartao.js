var cartoes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Mastercard: /^5[1-5][0-9]{14}/,
    Amex: /^3[47][0-9]{13}/,
    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}/
};

    function testarCC(nr, cartoes) {
        for (var cartao in cartoes) if (nr.match(cartoes[cartao])) return cartao;
        return false;
    }

var valido = '5544555566667777';
var invalido = '1234567890';

[valido, invalido].forEach(function(teste){
   console.log(testarCC(teste, cartoes)); 
});