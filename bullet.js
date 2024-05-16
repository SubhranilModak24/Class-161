AFRAME.registerComponent('bullets',{
    init:function(){
        this.shoot_bullet()
    },
    shoot_bullet:function(){
        window.addEventListener('keydown',(e)=>{
            if (e.key === 'z'){
                 var bullet = document.createElement('a-entity')
                 bullet.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:0.1
                 })
                 bullet.setAttribute('material','color','black')
                 var cam = document.querySelector('#camera')
                 var pos = cam.getAttribute('position')
                 bullet.setAttribute('position',{
                    x : pos.x,
                    y : pos.y-2,
                    z : pos.z
                 })
                 var camera = document.querySelector('#camera').object3D
                 console.log('camera')
                 var direction = new THREE.Vector3()
                 camera.getWorldDirection(direction)
                 bullet.setAttribute('velocity',direction.multiplyScalar(-10))
                 cam.appendChild(bullet)
                 
            }
        })
    }
})