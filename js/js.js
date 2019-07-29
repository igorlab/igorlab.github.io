$(document).ready(function () {
    console.log("lets try...");

    $(".LSmenu").on("click", function () {

        $(".LSmenu").each(function () {
            $(this).removeClass("actDescription");
        });
        $(this).addClass("actDescription");

        const idService = $(this).attr('data-id');

        $(".triangle-down").each(function () {
            if ($(this).attr('data-id') === idService) {
                $(this).addClass("actDescriptionTr");
            } else $(this).removeClass("actDescriptionTr");
        });

        $(".descriptionWrapper > div").each(function () {
            if ($(this).attr('data-id') === idService) {
                $(this).show();
            } else $(this).hide();
        });

    });


    $(".linksDesign div").on("click", function () {
        $(".linksDesign div").each(function () {
            $(this).removeClass("linksDesignActive");
        });
        $(this).addClass("linksDesignActive");

        const idLinksDesign = $(this).attr('data-id');

        $(".designShow > img").each(function () {
            if (!$(this).hasClass('imgHidden')) {
                if (idLinksDesign == '0') $(this).show();
                else {
                    if ($(this).attr('data-id') === idLinksDesign) {
                        $(this).show();
                    } else $(this).hide();
                }
            }
        });
    });

    $(".amazing button").on("click", function () {
        $('.imitation').css('display', 'flex');
        timerIdDownloadImg = setTimeout(downloadImg, 2000);
    });

// carousel

    $(".divSlider span.next").on("click", function () {
        carousel('backward');
    });

   $(".divSlider span.prev").on("click", function () {
        carousel('forward');
    });

    $('.AboutTheHam .divSlider img').on("click", function () {
        $('.AboutTheHam .divSlider img.activeImg').removeClass("activeImg");
        $(this).addClass("activeImg");
        const idOfActive = $(this).attr('data-id');
        updateInfo(idOfActive);
    });

    const container = $('#masonry'); // https://masonry.desandro.com/options.html
    const masonry = new Masonry(container, {
        columnWidth: 370,
        itemSelector: '.item',
        gutter: 10,
        horizontalOrder: true
    });

});

function carousel(direction) {
    const imgPerson = $('.AboutTheHam .divSlider img.activeImg');
    const imgPersonActive = Number.parseInt(imgPerson.attr('data-id'));
    const imgAboutPersons = $('.AboutTheHam .divSlider img');
    let showNextImg;
    if (direction === 'backward') {
        if (imgPersonActive === 1) {
            showNextImg = 4;
        } else {
            showNextImg = imgPersonActive - 1;
        }
    } else if (direction === 'forward') {
        if (imgPersonActive === 4) {
            showNextImg = 1;
        } else {
            showNextImg = imgPersonActive + 1;
        }
    }
    imgPerson.removeClass("activeImg");
    imgAboutPersons.eq(showNextImg - 1).addClass("activeImg");

    updateInfo(showNextImg);
}

function updateInfo(dataId) {
    //https://igorlab.github.io/img/person2.png

    const NewImg = $('.AboutTheHam .divSlider img.activeImg').attr('src');
    console.log('NewImg = ', NewImg);
    $('.AboutTheHam .bigPerson').css('background-image', `url("/${NewImg}")`);

    const newH3 = $('.AboutTheHam .divSlider .imgPersonInfo>h2.description').eq(dataId - 1).text();
    $('.AboutTheHam h3').text(newH3);

    const newH4 = $('.AboutTheHam .divSlider .imgPersonInfo>h2.personName').eq(dataId - 1).text();
    $('.AboutTheHam h4').text(newH4);

    const newH5 = $('.AboutTheHam .divSlider .imgPersonInfo>h2.personJob').eq(dataId - 1).text();
    $('.AboutTheHam h5').text(newH5);
}


let timerIdDownloadImg;
let showedImgTimes = 0;

function downloadImg() {

    showedImgTimes++;

    clearTimeout(timerIdDownloadImg);
    $('.imitation').css('display', 'none');
    $(".designShow .imgHidden").each(function (index) {
        if (index < 6) {
            console.log("index = ", index);
            $(this).removeClass("imgHidden");
        }
        if (showedImgTimes > 1) {
            $(".amazing button").hide();
        }
    });
}