const app = new PIXI.Application();
await app.init({
    resizeTo : window,
    backgroundColor:0x121212
})
document.body.appendChild(app.canvas)

const gokuImagen = await PIXI.Assets.load('./json/goku.png')


PIXI.Assets.add({
    alias :'goku',
    src:'./json/goku.json',
    data:{
        texture:gokuImagen
    }

})
const animacionGoku = await PIXI.Assets.load('goku')

const goku=new PIXI.AnimatedSprite(animacionGoku.animations.goku)
goku.animationSpeed=0.06
goku.play();

app.stage.addChild(goku)