import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  
  data = "İstiklal Marşı 1. Kıtası**"+
"Korkma! Sönmez bu şafaklarda yüzen al sancak,\n"+
"Sönmeden yurdumun üstünde tüten en son ocak.\n"+
"O benim milletimin yıldızıdır, parlayacak;\n"+
"O benimdir, o benim milletimindir ancak.\n--"+
"İstiklal Marşı 2. Kıtası**"+
"Çatma, kurban olayım, çehreni ey nazlı hilal!\n"+
"Kahraman ırkıma bir gül; ne bu şiddet, bu celal?\n"+
"Sana olmaz dökülen kanlarımız sonra helal...\n"+
"Hakkıdır, Hakk'a tapan milletimin istiklâl.\n--"+
"İstiklal Marşı 3. Kıtası**"+
"Ben ezelden beridir hür yaşadım, hür yaşarım,\n"+
"Hangi çılgın bana zincir vuracakmış? Şaşarım.\n"+
"Kükremiş sel gibiyim, bendimi çiğner, aşarım,\n"+
"Yırtarım dağları, enginlere sığmam, taşarım.\n--"+
"İstiklal Marşı 4. Kıtası**"+
"Garbın afakını sarmışsa çelik zırhlı duvar,\n"+
"Benim iman dolu göğsüm gibi serhaddim var.\n"+
"Ulusun, korkma! Nasıl böyle bir imanı boğar,\n"+
'“Medeniyet” dediğin tek dişi kalmış canavar?\n--'+
"İstiklal Marşı 5. Kıtası**"+
"Arkadaş! Yurduma alçakları uğratma sakın,\n"+
"Siper et gövdeni, dursun bu hayâsızca akın.\n"+
"Doğacaktır sana vadettiği günler Hakk'ın,\n"+
"Kim bilir, belki yarın belki yarından da yakın.\n--"+
"İstiklal Marşı 6. Kıtası**"+
'Bastığın yerleri “toprak” diyerek geçme, tanı,\n'+
"Düşün altındaki binlerce kefensiz yatanı.\n"+
"Sen şehit oğlusun, incitme, yazıktır atanı,\n"+
"Verme, dünyaları alsan da bu cennet vatanı.\n--"+
"İstiklal Marşı 7. Kıtası**"+
"Kim bu cennet vatanın uğruna olmaz ki feda?\n"+
"Şüheda fışkıracak, toprağı sıksan şüheda.\n"+
"Canı, cananı, bütün varımı alsın da Hüda,\n"+
"Etmesin tek vatanımdan beni dünyada cüda.\n--"+
"İstiklal Marşı 8. Kıtası**"+
"Ruhumun senden İlahî, şudur ancak emeli:\n"+
"Değmesin mabedimin göğsüne namahrem eli.\n"+
"Bu ezanlar, ki şehadetleri dinin temeli,\n"+
"Ebedî, yurdumun üstünde benim inlemeli.\n--"+
"İstiklal Marşı 9. Kıtası**"+
"O zaman vecd ile bin secde eder, varsa taşım,\n"+
"Her cerihamdan, İlahî, boşanıp kanlı yaşım,\n"+
"Fışkırır ruhumücerret gibi yerden naaşım,\n"+
"O zaman yükselerek arşa değer belki başım.\n--"+
"İstiklal Marşı 10. Kıtası**"+
"Dalgalan sen de şafaklar gibi ey şanlı hilal!\n"+
"Olsun artık dökülen kanlarımın hepsi helal.\n"+
"Ebediyen sana yok, ırkıma yok izmihlal.\n"+
"Hakkıdır, hür yaşamış bayrağımın hürriyet;\n"+
"Hakkıdır, Hakk'a tapan milletimin istiklâl.\n";
  
  Tumveri: Veri[] = [];
  
  public constructor(){
  this.olustur();
   console.log(this.Tumveri);
  }
  
  //testMessage = 'Bu bir test verisidir';
  get testMessage(){
  return 'Bu bir test verisidir';
  }
  get resim(){ 
  let veri:number = Math.floor(Math.random()*10)+4
  veri = veri*100
  console.log(veri)
  let veri2:number = Math.floor(Math.random()*8)+7
  veri2 = veri2*100
  console.log(veri)
  
  return "https://picsum.photos/"+veri2.toString()+"/"+veri.toString()}
  
  olustur():void{
   this.data.split("--").forEach(
   (veri)=>{
    this.Tumveri.push(new Veri({title:veri.split("**")[0],data:veri.split("**")[1]}));
   });
  }
}

export class Veri{
 title:string|null = null;
 public get Title(){ return this.title;}
 public set Title(value:string|null){ this.title = value;} 
 data:string|null = null;
 public get Data(){ return this.data;}
 public set Data(val:string|null){ this.data = val;} 
 
 /*public constructor(title:any,data:any){
 this.title = title.toString();
 this.data = data.toString();
 }*/
 public constructor(params: Partial<Veri>){
 	Object.assign(this,params);
 }
 
 
} 
/*
İstiklal Marşı 1. Kıtası**
Korkma! Sönmez bu şafaklarda yüzen al sancak,\n
Sönmeden yurdumun üstünde tüten en son ocak.
O benim milletimin yıldızıdır, parlayacak;
O benimdir, o benim milletimindir ancak.--
İstiklal Marşı 2. Kıtası**
Çatma, kurban olayım, çehreni ey nazlı hilal!
Kahraman ırkıma bir gül; ne bu şiddet, bu celal?
Sana olmaz dökülen kanlarımız sonra helal...
Hakkıdır, Hakk'a tapan milletimin istiklâl.--
İstiklal Marşı 3. Kıtası**
Ben ezelden beridir hür yaşadım, hür yaşarım,
Hangi çılgın bana zincir vuracakmış? Şaşarım.
Kükremiş sel gibiyim, bendimi çiğner, aşarım,
Yırtarım dağları, enginlere sığmam, taşarım.--
İstiklal Marşı 4. Kıtası**
Garbın afakını sarmışsa çelik zırhlı duvar,
Benim iman dolu göğsüm gibi serhaddim var.
Ulusun, korkma! Nasıl böyle bir imanı boğar,
“Medeniyet” dediğin tek dişi kalmış canavar?--
İstiklal Marşı 5. Kıtası**
Arkadaş! Yurduma alçakları uğratma sakın,
Siper et gövdeni, dursun bu hayâsızca akın.
Doğacaktır sana vadettiği günler Hakk'ın,
Kim bilir, belki yarın belki yarından da yakın.--
İstiklal Marşı 6. Kıtası**
Bastığın yerleri “toprak” diyerek geçme, tanı,
Düşün altındaki binlerce kefensiz yatanı.
Sen şehit oğlusun, incitme, yazıktır atanı,
Verme, dünyaları alsan da bu cennet vatanı.--
İstiklal Marşı 7. Kıtası**
Kim bu cennet vatanın uğruna olmaz ki feda?
Şüheda fışkıracak, toprağı sıksan şüheda.
Canı, cananı, bütün varımı alsın da Hüda,
Etmesin tek vatanımdan beni dünyada cüda.--
İstiklal Marşı 8. Kıtası**
Ruhumun senden İlahî, şudur ancak emeli:
Değmesin mabedimin göğsüne namahrem eli.
Bu ezanlar, ki şehadetleri dinin temeli,
Ebedî, yurdumun üstünde benim inlemeli.--
İstiklal Marşı 9. Kıtası**
O zaman vecd ile bin secde eder, varsa taşım,
Her cerihamdan, İlahî, boşanıp kanlı yaşım,
Fışkırır ruhumücerret gibi yerden naaşım,
O zaman yükselerek arşa değer belki başım.--
İstiklal Marşı 10. Kıtası**
Dalgalan sen de şafaklar gibi ey şanlı hilal!
Olsun artık dökülen kanlarımın hepsi helal.
Ebediyen sana yok, ırkıma yok izmihlal.
Hakkıdır, hür yaşamış bayrağımın hürriyet;
Hakkıdır, Hakk'a tapan milletimin istiklâl.--
*/
