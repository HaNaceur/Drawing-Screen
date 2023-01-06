const container = document.querySelector('.container');
const sizeE1=document.querySelector('.size');
// const sizeE2=document.querySelector('.sizePx');
let size=sizeE1.value;
// let sizePx=sizeE2.value;
const color =document.querySelector('.color');
const reset = document.querySelector('.btn');

let draw = false;

function grid(size){
		container.style.setProperty('--size', size);
    for(let i=0; i< size * size; i++) {
			const div = document.createElement('div');
			div.classList.add('pixel');
			
			div.addEventListener('mouseover', function(){
				if(!draw) return;
				div.style.backgroundColor = color.value
			})
			div.addEventListener('mousedown', function(){
				div.style.backgroundColor = color.value
			})
			container.append(div);
	}
}

window.addEventListener("mousedown", function(){
	draw = true;
})
window.addEventListener("mouseup", function(){
	draw = false;
})

/*function pxSize(sizePx){
		container.style.setProperty('--sizePx', sizePx);
    for(let i=0; i< size * size; i++) {
			const div = document.createElement('div');
			div.classList.add('pixel');
			container.append(div);
	}
}*/



reset.addEventListener('click', function(){
	container.innerHTML = ''
	grid(size)
});

sizeE1.addEventListener('keyup', function(){
	size = sizeE1.value;
});

// sizeE2.addEventListener('keyup', function(){
// 	sizePx = sizeE2.value;
// });


grid(size);
