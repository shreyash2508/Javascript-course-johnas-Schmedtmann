const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreKoalas>scoreDolphins) {
     console.log('Koalas win the trophy 🏆');
} else if (scoreKoalas<scoreDolphins) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas===scoreDolphins) {
    console.log('Both win the trophy 🏆');