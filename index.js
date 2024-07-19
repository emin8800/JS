// 1. 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.


// let a = 0;
// let b = 1;

// for(i=0; i<10; i++){
//     a+=i
//     b*=i
// }
// console.log(a,b)


// 2. 1-dən100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın

// let a = 0
// let b = 1
// for(i=0; i<100; i++){
//     if(i%2==0){
//         a+=i
//         b*=i
//     }
// }
// console.log(a)


//3. 3 rəqəmli ədədlərin ədədi ortasını tapın

// let a = 0
// let b = 0

// for(i=100; i<=999; i++){
//     if(i>=100 && i<=999){
//         a+=i
//         b++
//     }
// }
// c =a/b
// console.log(c)

//4. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın

// for(i=100; i<=999; i++){
//     if(i%7==0 && i%8==0){
//         console.log(i)
//     }
// }
    
// 5. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın

// let a = 0
// for(i=100; i<=999; i++){
//     if(i%7==0 && i%8==0){
//         a+=i
       
//     }
// }
// console.log(a)


// 6. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın

// let a = 0

// for(i=100; i<=999; i++){
//     if(i%7==0 && i%8==0){
//         a+=i
//         break
//     }
// }
// console.log(a)

// 7. 3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

// let a = 0
// for (i=999; i=>100; i--){
//     if(i%7==0 && i%8==0){
//         a=i
//         break
//     }
// }
// console.log(a)

////////////////////////////////////////////////////////////////////////////

// 8. 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın

// let count = 0;

// for(let eded=1; eded<100; eded++){
//     count=0;
//     for(let j=1; j<=eded; j++) {
//         if(eded%j==0)
//             count++;
//     }
//     if(count==2){
//         console.log(eded, "eded Sadedir");
//     }
//     else if(count>2){
//         console.log(eded, "eded Murekkebdir");
//     }

//     else{
//         console.log(eded, "Eded Ne Murekkeb Nede Sadedir");
//     }

// }
///////////////////////////////////////////////////////////////////////////



// 9. Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın

// let a = 10
// let b = 20
// let c = 8
// const d = Math.min(a,b,c)
// console.log(d)

// 10. İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana
//     cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

// let num_1 = +prompt("eded daxil edin: ")

// if(num_1%2==0){
//     console.log("Bu eded cutdur")
// }
// else{
//     console.log("Bu eded tekdir")
// }

// 11. İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli
// tətbiq edib nəticəni ekrana çıxarın.

// let num_1 = +prompt("eded daxil edin 1: ")
// let num_2 = +prompt("eded daxil edin 2: ")
// let operatorlar = prompt("+,-,*,/")

// switch(operatorlar){
//     case "+":
//     r=num_1+num_2
//     console.log(r)
//     break
    
//     case "-":
//     r=num_1-num_2
//     console.log(r)
//     break

//     case "/":
//     r = num_1/num_2
//     console.log(r)
//     break

//     case "*":
//     r= num_1*num_2
//     console.log(r)
// }

// 12. Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

// let number = +prompt("Eded daxil edin")

// for(let i=100; i<1000; i++){
    
//     if(i%number==0){
//         console.log(i)
//     }

// }

// 13. Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.

// let number = +prompt("Eded daxil edin")

// let liste = [];
// for(let i=0; i<number; i++){
//     if(number%i==0){
//         liste.push(i)
//     }
// }
// console.log(liste)


// 14. 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)

// for(i=1; i<6;i++){
// console.log(i,12-i)
//   }



// 15. İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, =&gt; x=6, y=5)

// let x = 5;
// let y = 6;

// console.log("Əvəzinə dəyişmədən əvvəl:");
// console.log("x =", x);
// console.log("y =", y);

// let temp = x;
// x = y;
// y = temp;

// console.log("Dəyişdikdən sonra:");
// console.log("x =", x);
// console.log("y =", y);


// 16. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın.

// let a = +prompt("eded daxil edin")

// if(a%1==0){
//     console.log("eded tamdir")
// }
// else{
//     console.log("eded tam deyil")
// }


// 17. number dəyişənində iki rəqəmli ədəd saxlanılır. Bu ədədin
// - beşinci dərəcə qüvvətə qaldırılmış vəziyyətini (tapın);
// - 3-ə bölünmədən qalan qalığını (tapın);

// let number = 20

// let quvvet = Math.pow(number, 5);
// let qaliq = number % 3;

// console.log(`${number}-in beşinci dərəcə qüvvəti:`, quvvet);
// console.log(`${number}-in 3-ə bölünmədən qalan qalığı:`, qaliq);

// 18.Daxil edilen temperatura esasen havanin isti, cox isti, soyuq, cox soyuq oldugunu gosterin.

// 0>;cox soyuq
// 0-15 derece  soyuq; 15-30 derece isti; 30<  cox isti Əgər heç biri deyilse alerte versin ki temperatur yanlışdır.


// let temperatur = +prompt("Derece qeyd edin")

// if(temperatur<0){
//     console.log("Cox soyuq")
// }
// else if(temperatur<=15){
//     console.log("soyuq")
// }
// else if(temperatur<=30){
//     console.log("isti")
// }
// else if(temperatur<=50){
//     console.log("Cox isti")
// }
// else{
//     alert("yanliq tempurator")
// }

// 19.Daxil edilen rəqəmə görə həftənin günlərini çıxardan program yazın (switch ile yazın.) Meselen: 1 =>; bazarertesi, 3=>; cersenbe (heftenin 7 gunu ucun)

// let gunler = +prompt("Gun daxil edin: ")

// switch(gunler){
//     case 1:
//     console.log("Bazar ertesi")
//     break
    
//     case 2:
//     console.log("çərşənbə axşamı")
//     break

//     case 3:
//     console.log("çərşənbə")
//     break

//     case 4:
//     console.log("cümə axşamı")
//     break

//     case 5:
//     console.log("cümə")
//     break

//     case 6:
//     console.log("şənbə")
//     break

//     case 7:
//     console.log("Bazar")

// }

//20. Daxil edilen ayların sıra nömresinə əsasən hansı fəsil olduğunu tapın. Meselen : 5 (may ayı 5-cidir) output: Yaz fesli alertə çıxarın.
// let gunler = +prompt("Ay rəqəmi daxil edin: ");

// switch (gunler) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Qış");
//         break;

//     case 3:
//     case 4:
//     case 5:
//         console.log("Yaz");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yay");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Payız");
//         break;

//     default:
//         console.log("Düzgün ay rəqəmi daxil edin (1-12 arası)");
// }
