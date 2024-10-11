// Soru 1 //

// Basit İndirim Hesaplama:Bir ürünün fiyatını ve indirim yüzdesini kullanıcıdan alarak, 
// indirimli fiyatı hesaplayan bir program yazın.Örn: 100 TL olan bir ürüne %20 indirim 
// yapıldığında ne kadar ödenmesi gerektiğini hesaplayıp alert ile gösterin.


// let urunFiyati = prompt("Ürünün fiyatını girin (TL)");
// let indirimYuzdesi = prompt("İndirim yüzdesini girin (%)");


// let indirimMiktari = (urunFiyati * indirimYuzdesi) / 100;


// let indirimliFiyat = urunFiyati - indirimMiktari;


// alert("İndirimli fiyat: " + indirimliFiyat + " TL");

// ***************************************

// Soru 2 //

// Vize ve Final Notu ile Ortalama:
// Kullanıcıdan vize ve final notunu alarak dönem  ortalamasını hesaplayan
// bir program yazın (vize %40, final %60 etkili olsun).
// Eğer not 50’den büyükse "Geçtiniz", 50'den küçükse ve 40’tan büyükse 
// "Şartlı geçtiniz", 40’tan küçükse "Kaldınız" mesajını verin.


// let vizeNotu = prompt("vize notunu giriniz");
// let finalNotu = prompt("final notunu giriniz");
// let vizeFinalOrt = (Number(Math.floor((vizeNotu * 0.4) + (finalNotu * 0.6))));

// if (vizeFinalOrt > 50 ){
//     alert( "notunuz: " + vizeFinalOrt + " geçtiniz.");
// }else if (vizeFinalOrt < 50 && vizeFinalOrt > 40 ) {
//     alert( "notunuz: " + vizeFinalOrt + " şartlı geçtiniz.");
// }else if (vizeFinalOrt < 40) {
//     alert( "notunuz: " + vizeFinalOrt + " kaldınız :(");
// }
// ***************************************
// soru 3 

// Haftanın Günü:
// ​​​​​​​​​​Kullanıcıdan bir sayı alın ve o sayıya karşılık gelen günü 
// yazdırın (1 = Pazartesi, 7 = Pazar). Switch case araştırabilirsiniz.

// let weekDays = prompt("haftanın günlerini 1 den 7 ye kadar olacak şekilde tuşlayınız.");
// switch (weekDays) {
// case "1":
//     alert("pazartesi");
//     break;

//     case "2":
//     alert("salı");
//     break;

// case "3":
//     alert("çarşamba");
//     break;

// case "4":
//     alert("perşembe");
//     break;

// case "5":
//     alert("cuma");
//     break;

// case "6":
//     alert("cumartesi");
//     break;

// case "7":
//     alert("pazar");
//     break;

// }


// ***************************************

// soru 4 


// Büyük Sayıyı Bulma:
// Kullanıcıdan üç sayı alarak, bu sayılardan en büyüğünü bulan bir program yazın.

// let sayi1 = prompt("1.sayıyı giriniz.");
// let sayi2 = prompt("2.sayıyı giriniz.");
// let sayi3 = prompt("3.sayıyı giriniz.");


// if ((sayi1 > sayi2) && (sayi1 > sayi3)) {
// alert("en büyük sayı: " + sayi1);
// }else if (sayi2 > sayi1 && sayi2 > sayi3) {
//     alert("en büyük sayı : " + sayi2);
// }else 
// alert("en büyük sayı: " + sayi3);

//*********************************************

// soru 5

// Saniyeyi Saate Çevirme:
// Kullanıcıdan bir saniye değeri alıp bunu saat, dakika ve saniye cinsine 
// çevirin (Örn: 3661 saniye = 1 saat, 1 dakika, 1 saniye).​​​​​​


// let kullaniciCevap = prompt("saniye giriniz");
// let saat = kullaniciCevap / 3600;
// let kalanSaniye = kullaniciCevap % 3600;
// let kalanDakika = kalanSaniye / 60;
// let saniye = kalanSaniye % 60;
// console.log("saat: " + Math.floor(saat)  + " " + "dakika: " + Math.floor(kalanDakika) + " "  + "saniye: "  + Math.floor (saniye));


//***************************************** 

// soru 6 

// Güncel Yaş Hesaplama:
// Kullanıcıya önce yıl, sonra ay, sonra gün sorarak tam yaşını gün, ay ve yıl
// cinsinden hesaplayan bir program yazın.


// let dogumYili = Number(prompt("Doğum yılınızı sayı olarak giriniz: "));
// let dogumAyi = Number(prompt("Doğum ayınızı sayı olarak giriniz: "));
// let dogumGunu = Number(prompt("Doğum gününüzü sayı olarak giriniz: "));
// let bugun = new Date();
// let gun = bugun.getDate();
// let ay = bugun.getMonth();
// let yil = bugun.getFullYear();
// let kullaniciYasi = yil - dogumYili;
// let kullaniciAyi = ay - dogumAyi;
// let kullaniciGun = gun - dogumGunu;

// if (ay < dogumAyi) {
//   kullaniciYasi -= 1;
//   kullaniciAyi += 12;
//   console.log(kullaniciYasi + ' ' + kullaniciAyi + ' ' + kullaniciGun);
// }
// if(gun < dogumGunu){
//   kullaniciAyi -= 1;
//   kullaniciGun += new Date(yil, ay, 0).getDate();
//   console.log("yaşın: " + kullaniciYasi + ' ' + "geçen ay: " + kullaniciAyi + ' ' + "geçen gün: " +  kullaniciGun);
// }

// *********************************************

// soru 7
// Saatlik Ücret Hesaplama:Kullanıcıdan çalıştığı saat sayısını ve saat 
// başı ücretini alarak toplam kazancını hesaplayın.

// let calısmaSaati = Number(prompt("günde ne kadar saat çalışıyorsun?"));
// let saatlikUcret = Number(prompt("saatlik ücretini söyler misin?"));

// alert( "günlük ücret: " + saatlikUcret * calısmaSaati);

//***********************************

// soru 8 

// Aylık Taksit Hesaplama:
// Kullanıcıdan kredi miktarını ve taksit sayısını alarak aylık taksiti hesaplayın.
// v2 toplam faiz oranını da sorup aylık faizli taksiti hesaplayın.

// let krediMiktari = Number(prompt("istediğiniz kredi miktarını giriniz."));
// let taksitSayisi = Number(prompt("taksit sayısını giriniz."));

// alert("aylık taksitiniz: " +  krediMiktari / taksitSayisi + " TL");

// let krediMiktari = Number(prompt("istediğiniz kredi miktarını giriniz."));
// let taksitSayisi = Number(prompt("taksit sayısını giriniz."));
// let faizOranı = Number(prompt("faiz oranını giriniz. "));

// alert(Number(((krediMiktari * (faizOranı / 100)) + krediMiktari)) / taksitSayisi);

// *************************************

// soru 9 
// Kullanıcı Adı ve Şifre Kontrolü:
// Kullanıcıdan hem kullanıcı adını hem de şifresini alın.
// Eğer kullanıcı adı "admin" ve şifre "1234" ise “Giriş başarılı” mesajı verin,
//  aksi halde “Kullanıcı adı veya şifre hatalı” deyin.

// let kullaniciAdi = prompt ("kullanıcı adını giriniz");
// let sifre = prompt("sifreyi giriniz.");

// if (kullaniciAdi == "admin" && sifre == "1234") {
//  alert("Giriş başarılı")
// }else {
//     alert("Kullanıcı adı veya şifre hatalı");
// }

//************************************ 

// // soru 10

//  Net Kar Hesaplama:
//  Satış bedelini ve maliyet (0 girilebilir) girerek; kdv dahil toplam ve 
// net kar bilgilerini gösterin.  kdv %20, gelir vergisi %25 olarak hesaplanmalıdır. Eğer 100 TL satış yaparsanız
//  bu tutarın %25'i gelir vergisi olarak hesaplanır.
// // 100 TL'lik satış bedelini toplam satış bedeli için kdv dahil
//  120 TL olarak hesaplarız. Eğer maliyet olduysa (satış bedeli - maliyet) + kdv olacak.

// let satisBedeli = Number(prompt("satış bedelini giriniz."));
// let maliyet = Number(prompt("maliyeti giriniz"));
// let kdv = (satisBedeli * 0.2);
// let toplamSatisBedeli = (satisBedeli + kdv);
// let kar = (satisBedeli - maliyet);
// let netKar = kar - (satisBedeli * 0.25);
// console.log ('kdv dahil toplam: ' + toplamSatisBedeli + ' ' + 'NET KAR: ' + netKar);




