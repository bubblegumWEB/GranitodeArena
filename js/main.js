
const menuresponsive = document.getElementById("menuresponsive");
const menusticky = document.querySelector(".header__menu");

menuresponsive.addEventListener("click", () => {
   menusticky.classList.toggle("activo");
})



// VIDEO

const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top - 100;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 5);
			if (window.innerWidth > 1900) {
        video.currentTime = video.duration * percentScrolled / 2.5;
     } else {
      video.currentTime = video.duration * percentScrolled / 1.25;
     }
			
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");
