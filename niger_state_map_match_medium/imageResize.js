 const resizeImage = {
   AgaieLGA:      document.getElementById('Agaie'),
   AgwaraLGA:      document.getElementById('Agwara'),
   BidaLGA:      document.getElementById('Bida'),
   BorguLGA:      document.getElementById('Borgu'),
   BossoLGA:      document.getElementById('Bosso'),
   ChanchagaLGA:  document.getElementById('Chanchaga'),
   EdatiLGA:      document.getElementById('Edati'),
   GbakoLGA:      document.getElementById('Gbako'),
   GuraraLGA:      document.getElementById('Gurara'),
   KatchaLGA:      document.getElementById('Katcha'),
   KontagoraLGA:      document.getElementById('Kontagora'),
   LapaiLGA:      document.getElementById('Lapai'),
   LavunLGA:      document.getElementById('Lavun'),
   MagamaLGA:      document.getElementById('Magama'),
   MarigaLGA:      document.getElementById('Mariga'),
   MasheguLGA:      document.getElementById('Mashegu'),
   MokwaLGA:      document.getElementById('Mokwa'),
   MunyaLGA:      document.getElementById('Munya'),
   PaikoroLGA:      document.getElementById('Paikoro'),
   RafiLGA:      document.getElementById('Rafi'),
   RijauLGA:      document.getElementById('Rijau'),
   ShiroroLGA:      document.getElementById('Shiroro'),
   SulejaLGA:      document.getElementById('Suleja'),
   TafaLGA:      document.getElementById('Tafa'),
   WushishiLGA:      document.getElementById('Wushishi'),
    
}
console.log(resizeImage.WushishiLGA)

const images = {
   Agaie: new Image(),
   Agwara: new Image(),
   Bida: new Image(),
   Borgu: new Image(),
   Bosso: new Image(),
   Chanchaga: new Image(),
   Edati: new Image(),
   Gbako:  new Image(),
   Gurara: new Image(),
   Katcha: new Image(),
   Kontagora: new Image(),
   Lapai: new Image(),
   Lavun:  new Image(),
   Magama: new Image(),
   Mariga: new Image(),
   Mashegu: new Image(),
   Mokwa:  new Image(),
   Munya: new Image(),
   Paikoro: new Image(),
   Rafi:  new Image(),
   Rijau: new Image(),
   Shiroro: new Image(),
   Suleja:  new Image(),
   Tafa:  new Image(),
   Wushishi:   new Image(),
};



// the images are preloaded, so they appear immediately when dragged.
images.Agaie.src = "./resized-images/agaie_lga.png";
images.Agwara.src = "./resized-images/agwara_lga.png";
images.Bida.src = "./resized-images/bida_lga.png";
images.Borgu.src = "./resized-images/borgu_lga.png";
images.Bosso.src = "./resized-images/bosso_lga.png";
images.Chanchaga.src = "./resized-images/chanchaga_lga.png";
images.Edati.src = "./resized-images/edati_lga.png";
images.Gbako.src = "./resized-images/gbako_lga.png";
images.Gurara.src =  "./resized-images/gurara_lga.png";
images.Katcha.src = "./resized-images/katcha_lga.png";
images.Kontagora.src =  "./resized-images/kontagora_lga.png";
images.Lapai.src = "./resized-images/lapai_lga.png";
images.Lavun.src = "./resized-images/lavun_lga.png";
images.Magama.src = "./resized-images/magama_lga.png";
images.Mariga.src = "./resized-images/mariga_lga.png";
images.Mashegu.src =  "./resized-images/mashegu_lga.png";
images.Mokwa.src =  "./resized-images/mokwa_lga.png";
images.Munya.src =  "./resized-images/munya_lga.png";
images.Paikoro.src = "./resized-images/paikoro_lga.png";
images.Rafi.src = "./resized-images/rafi_lga.png";
images.Rijau.src =  "./resized-images/rijau_lga.png";
images.Shiroro.src = "./resized-images/shiroro_lga.png";
images.Suleja.src = "./resized-images/suleja_lga.png";
images.Tafa.src = "./resized-images/tafa_lga.png";
images.Wushishi.src =  "./resized-images/wushishi_lga.png";



resizeImage.AgaieLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Agaie, 20, 30);
});

resizeImage.AgwaraLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Agwara, 35, 35);
});

resizeImage.BidaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Bida, 45, 40)
});

resizeImage.BorguLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Borgu, 90, 100)
});

resizeImage.BossoLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Bosso, 33, 35)
});

resizeImage.ChanchagaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Chanchaga, 10, 4);
})

resizeImage.EdatiLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Edati, 40, 20);
})

resizeImage.GbakoLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Gbako, 50, 50);
})

resizeImage.GuraraLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Gurara, 50, 30);
})

resizeImage.KatchaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Katcha, 25, 30);
})

resizeImage.KontagoraLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Kontagora, 60, 35);
})

resizeImage.LapaiLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Lapai, 53, 46);
})

resizeImage.LavunLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Lavun, 60, 60);
})

resizeImage.MagamaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Magama, 58, 44);
})

resizeImage.MarigaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Mariga, 48, 45);
})

resizeImage.MasheguLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Mashegu, 80, 82);
})

resizeImage.MokwaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Mokwa, 57, 52);
})

resizeImage.MunyaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Munya, 40, 50);
})

resizeImage.PaikoroLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Paikoro, 60, 50);
})

resizeImage.RafiLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Rafi, 60, 50);
})

resizeImage.RijauLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Rijau, 47, 40);
})

resizeImage.ShiroroLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Shiroro, 70, 64);
})

// to be revisited
resizeImage.SulejaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Suleja, 10, 11);
})
// to be revisited
resizeImage.TafaLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Tafa, 10, 10);
})

resizeImage.WushishiLGA.addEventListener('dragstart',(e)=>{
   e.dataTransfer.setDragImage(images.Wushishi, 60, 30);
})
