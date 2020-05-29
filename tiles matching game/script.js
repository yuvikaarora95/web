const cards = document.querySelectorAll('.card');
//cards represent array for all divs
let flippedCard = false;
let first, second;
let lock = false;

function flipCard() {
	if(lock) return;
	if(this === first) return;
	this.classList.add('flip');

	if (!flippedCard) {
		flippedCard = true;
		first = this;
	} else {
		flippedCard = false;
		second = this;

		let firstc = first.dataset.name;
		let secondc= second.dataset.name;
		
		if ( firstc === secondc) {
			//console.log('done');
			first.removeEventListener('click', flipCard);
			second.removeEventListener('click', flipCard);
		} 
		//console.log('executed');
		else{
			lock =true;
			setTimeout(() => {
				first.classList.remove('flip');
			second.classList.remove('flip');
			lock = false;
		},1000)
			
		}
}
}
cards.forEach(mcard => mcard.addEventListener('click', flipCard));