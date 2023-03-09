

// //pine-tree
// let pineTree= document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

 
//reders imges on page 
function newImage(url, left, bottom){
let images = document.createElement('img')
images.src = url
images.style.position = 'fixed'
images.style.left = left + 'px'
images.style.bottom = bottom + 'px'
document.body.append(images)

return images
}

//renders objects on page 
function newItem(url, left, bottom){
     let images = newImage(url, left, bottom)
    // image.src = url;
    // image.style.position = 'fixed';
    // image.style.left = left + 'px';
    // image.style.bottom = bottom + 'px';
    // document.body.append(image);
    images.addEventListener('dblclick', function() {
        images.remove()
    })
}



 //bonus
function background(url, left, bottom, width, height){
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            newImage(url, left + w*100, bottom + h*100);
        } 
    }
}

let horizon = window.innerHeight / 1.75
let heightofSky = window.innerHeight - horizon
let heightofGrass = horizon

//recalling bonus background function
background('assets/sky.png', 0, horizon, window.innerWidth/100, heightofSky/100)
background('assets/grass.png', 0, 0, window.innerWidth/100, heightofGrass/100)

 //recalling image function
newImage('assets/green-character.gif', 100, 200);
newImage('assets/pine-tree.png', 450, 250)
newImage('assets/pillar.png', 350, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/crate.png', 150, 200 )
newImage('assets/well.png', 500, 521)

// recalling item function
newItem('assets/sword.png', 500, 480)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

