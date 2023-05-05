const loadBtns = document.querySelectorAll(".btn-load");
const tabsService = document.querySelector(".our-service > .tabs");
const tabsOurWork = document.querySelector(".our-work > .tabs");
const bntPrevious = document.querySelector(".btn-previous");
const btnNext = document.querySelector(".btn-next");
const carouselInner = document.querySelector(".roundabout ul");
const carouselItems = carouselInner.querySelectorAll("li");
const photoFeedback = document.querySelector(".roundabout-photo ul");

let count = { counter: 0 };
let currentIndex = 0;

tabsService.addEventListener("click", tabsChanger);
tabsOurWork.addEventListener("click", tabsFilter);
loadBtns[0].addEventListener("click", loadMore);
loadBtns[1].addEventListener('click', shuffle);
btnNext.addEventListener("click", nextSlide);
bntPrevious.addEventListener("click", previousSlide);
photoFeedback.addEventListener("click", feedbackChanger);

photoFeedback.querySelector("li").click();
tabsService.querySelector("li").click();

function tabsChanger(event) {
  const tabsContent = document.querySelectorAll(".tabs-content li");
  const tabsTitle = tabsService.querySelectorAll("li");
  tabsTitle.forEach((element, index) => {
    element.classList.remove("active");
    tabsContent[index].classList.remove("active");
  });
  event.target.classList.add("active");
  tabsTitle.forEach((element, index) => {
    if (element.classList.contains("active")) {
      tabsContent[index].classList.add("active");
    }
  });
}

// function tabsChangerByData(event){
// 	const tabsContent = document.querySelectorAll('.tabs-content li')
// 	const tabsTitle = tabs.querySelectorAll('li')

// 	tabsTitle.forEach((element) => {
// 		element.classList.remove('active')
// 	});
// 	event.target.classList.add('active')
// 	tabsContent.forEach((element) =>{
// 		element.classList.remove('active')
// 	})
// 	document.getElementById(event.target.dataset.id).classList.add('active')

// }

function loadMore(event) {
  const loadIndicator = document.querySelector(".loading-indicator");
  loadIndicator.style.display = "inline-block";
  loadBtns[0].style.display = "none";
  setTimeout(() => {
    //      const htmlText = imageList
    //        .split(",")
    //        .map((imgsrc) => {
    //          return `<li class="our-work-galary__item">
    //  	<div class="our-work-galary__item-wrapper">
    //  		<div class="img-wrapper">
    //  			<img src="${imgsrc}">
    //  		</div>
    //  		<div class="our-work-galary__item-describe">
    //  			<div>
    //  				<img src="./img/our_works/icons/link.svg">
    //  				<img src="./img/our_works/icons/Square.svg">
    //  			</div>
    //  			<h3>creative design</h3>
    //  			<p>Web Design</p>
    //  		</div>
    //  	</div>
    //  </li>`;
    //        })
    //        .join("");
    const imageListAll = [
      { src: "./img/our_works/gd/1.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/2.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/3.jpg", imgid: "graphicDesign" },
      {
        src: "./img/our_works/landing page/landing-page1.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page2.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page3.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page4.jpg",
        imgid: "landingPages",
      },
      { src: "./img/our_works/gd/4.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/5.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/6.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/7.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/8.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/9.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/10.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/11.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/12.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/13.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/14.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/15.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/16.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/17.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/18.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/19.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/20.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/21.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/22.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/23.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/24.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/25.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/26.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/27.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/28.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/29.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/30.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/31.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/32.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/33.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/34.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/35.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/gd/36.jpg", imgid: "graphicDesign" },
      { src: "./img/our_works/wordpress/wordpress1.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress2.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress3.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress4.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress5.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress6.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress7.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress8.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress9.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress10.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress11.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress12.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress13.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress14.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress15.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress16.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress17.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress18.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress19.jpg", imgid: "wordpress" },
      { src: "./img/our_works/wordpress/wordpress20.jpg", imgid: "wordpress" },
      { src: "./img/our_works/web design/web-design1.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design2.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design3.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design4.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design5.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design6.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design7.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design8.jpg", imgid: "webDesign" },
      { src: "./img/our_works/web design/web-design9.jpg", imgid: "webDesign" },
      {
        src: "./img/our_works/web design/web-design10.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design11.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design12.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design13.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design14.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design15.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design16.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design17.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design18.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design19.jpg",
        imgid: "webDesign",
      },
      {
        src: "./img/our_works/web design/web-design20.jpg",
        imgid: "webDesign",
      },

      {
        src: "./img/our_works/landing page/landing-page5.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page6.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page7.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page8.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page9.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page10.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page11.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page12.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page13.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page14.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page15.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page16.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page17.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page18.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page19.jpg",
        imgid: "landingPages",
      },
      {
        src: "./img/our_works/landing page/landing-page20.jpg",
        imgid: "landingPages",
      },
    ];

    function filterImage(element) {
      let array = imageListAll.filter((elem) => {
        return elem.imgid == element.imgid;
      });
      if (!count[element.imgid]) {
        return true;
      } else if (array.indexOf(element) >= count[element.imgid]) {
        console.log(count[element.imgid], array.indexOf(element));
        return true;
      }
      return false;
    }

    const activeTabData = document.querySelector(".our-work .tabs .active")
      .dataset.tabid;

    const imageList =
      activeTabData == "all"
        ? imageListAll.filter(filterImage)
        : imageListAll.filter((elem) => {
            return elem.imgid == activeTabData;
          });
    console.log(imageList);
    if (!count[activeTabData]) {
      count[activeTabData] = 0;
    }

    if (count[activeTabData] + 12 < imageList.length) {
      const endPoint =
        count[activeTabData] + 12 < imageList.length
          ? count[activeTabData] + 12
          : imageList.length;

      let htmlText = "";
      for (let i = count[activeTabData]; i < endPoint; i++) {
        if (!count[imageList[i].imgid]) {
          count[imageList[i].imgid] = 1;
        } else {
          count[imageList[i].imgid]++;
        }

        const imgId = imageList[i].imgid;
        const imgSrc = imageList[i].src;
        htmlText += `<li data-imgid=${imgId} class="our-work-galary__item">
			<div class="our-work-galary__item-wrapper">
				<div class="img-wrapper">
					<img src="${imgSrc}">
				</div>
				<div class="our-work-galary__item-describe">
					<div>
					<a href="#"><img src="./img/our_works/icons/link.svg"></a>
					<a href="#"><img src="./img/our_works/icons/Square.svg"></a>
					</div>
					<h3>creative design</h3>
					<p>Web Design</p>
				</div>
			</div>
		</li>`;
      }
      const addUl = document.querySelector(".our-work-galary");
      addUl.insertAdjacentHTML("beforeend", htmlText);
    }
    count.counter++;
    if (count.counter == 2) {
      loadBtns[0].style.display = "none";
    } else {
      loadBtns[0].style.display = "inline-block";
    }
    loadIndicator.style.display = "none";
  }, 2000);
}

function tabsFilter(event) {
  const ourWorkItems = tabsOurWork.querySelectorAll("li");

  const ourGaleryItems = document.querySelectorAll(".our-work-galary li");

  const target = event.target;

  ourWorkItems.forEach((element) => {
    element.classList.remove("active");
  });
  target.classList.add("active");

  ourGaleryItems.forEach((element) => {
    if (
      element.dataset.imgid !== target.dataset.tabid &&
      target.dataset.tabid !== "all"
    ) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % (carouselItems.length - 3);
  carouselInner.style.transform = `translateX(-${
    (currentIndex * 100) / carouselItems.length
  }%)`;
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length - 3) % (carouselItems.length - 3);
  carouselInner.style.transform = `translateX(-${
    (currentIndex * 100) / carouselItems.length
  }%)`;
}

function feedbackChanger(event) {
  const targetData = event.target.closest("li").dataset.name;
  const feedbackList = document.querySelectorAll(".users-feedback li");
  feedbackList.forEach((item) => {
    item.style.display = "none";
  });

  document.querySelector(`#${targetData}`).style.display = "flex";
}

function shuffle() {
  
  const imgList = document.querySelectorAll(".best-galery-items img");
  
  for (let i = 0; i < imgList.length; i++){
	const randomIndex = Math.floor(Math.random() * imgList.length);
	const temp = imgList[i].src;
	imgList[i].src = imgList[randomIndex].src;
	imgList[randomIndex].src = temp;
  }
  console.log(imgList)
}
