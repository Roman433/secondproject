import $ from 'jquery'

var users = [{
        "name": "The Legend of Zelda: Ocarina of Time",
        "date": "November 23, 1998",
        "desc": "As a young boy, Link is tricked by Ganondorf, the King of the Gerudo Thieves. The evil human uses Link to gain access to the Sacred Realm, where he places his tainted hands on Triforce and transforms the beautiful Hyrulean landscape into a barren wasteland. Link is determined to fix the problems he helped to create, so with the help of Rauru he travels through time gathering the powers of the Seven Sages.",
        "image": "https://static.metacritic.com/images/products/games/2/70c7a7d5ef1a36a69018111cc1478f30-98.jpg",
        "link": "https://facebook.com",
        "video": "https://mt-rv-v1.gamespot.com/vr/2019/05/27/zeldaocarina_gp_wii_030507m2_2000_1000.mp4",
        "mustPlay": true
    },
    {
        "name": "Tony Hawk's Pro Skater 2",
        "date": "September 20, 2000",
        "desc": "As most major publishers' development efforts shift to any number of next-generation platforms, Tony Hawk 2 will likely stand as one of the last truly fantastic games to be released on the PlayStation.",
        "image": "https://static.metacritic.com/images/products/games/9/eebb2509d46dbd97c612f634270d37dd-98.jpg",
        "link": "https://facebook.com",
        "video": "https://mt-rv-v1.gamespot.com/vr/2020/05/12/Trailer_TonyHawksProSkater_20200512_4000.mp4",
        "mustPlay": true
    },
    {
        "name": "Grand Theft Auto IV",
        "date": "April 29, 2008",
        "desc": "Metacritic's 2008 PS3 Game of the Year; Also known as GTA IV What does the American Dream mean today? For Niko Belic, fresh off the boat from Europe. It's the hope he can escape his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of opportunity. As they slip into debt and are dragged into a criminal underworld by a series of shysters, thieves and sociopaths, they discover that the reality is very different from the dream in a city that worships money and status, and is heaven for those who have them an a living nightmare for those who don't. Rockstar Games",
        "image": "https://static.metacritic.com/images/products/games/2/d08ab1308780df8de1d75badb951c60a-98.jpg",
        "link": "https://facebook.com",
        "video": "https://mt-rv-v1.gamespot.com/vr/2019/05/27/gta4_multi_ot_032807_2000_1000.mp4",
        "mustPlay": true
    }
];

$(document).ready(function () {
    $.each(users, function (index, value) {
        $(".user-" + index + " p.name").html(value.name);
        $(".user-" + index + " p.date").html(value.date);
        $(".user-" + index + " p.desc").html(value.desc);
        $(".user-" + index + " img.ava").attr("src", value.image);
        $(".user-" + index + " a").attr("href", value.link);
        $("#exampleModal" + index + " .modal-title").html(value.name);
        $("#exampleModal" + index + " .modal-body img").attr("src", value.image);
        $("#exampleModal" + index + " .modal-body small").html(value.date);
        $("#exampleModal" + index + " .modal-body p").html(value.desc);
        $("#exampleModal" + index + " .modal-body video").attr("src", value.video);

        if (value.mustPlay === true) {
            $(".user-" + index + " .mp").show();
        } else {
            $(".user-" + index + " .mp").hide();
        }
    });

    var but = 0;
    $('button').each(function () {
        $('.main-but button.first').on('click', function () {
            but = 1;
            if (but === 1) {
                $(".main-blocks .first").show();
                $(".main-blocks .second").hide();
                $(".main-blocks .third").hide();
                console.log(true);
            } else {
                console.log(false);
            }
        });
        $('.main-but button.second').on('click', function () {
            but = 2;
            if (but === 2) {
                $(".main-blocks .second").show();
                $(".main-blocks .first").hide();
                $(".main-blocks .third").hide();
                console.log("but = " + but);
            } else {
                console.log("but не ровняется 2");
            }
        });
        $('.main-but button.third').on('click', function () {
            but = 3;
            if (but === 3) {
                $(".main-blocks .third").show();
                $(".main-blocks .first").hide();
                $(".main-blocks .second").hide();
                console.log("but = " + but);
            } else {
                console.log("but не ровняется 2");
            }
        });
    });

    var arr = [];
    var obj = null;
  

    $('.sub').on('click', function() {
        obj = $('.todo input').val();
        if(obj != "" && obj.length >= 5) {
            arr.push(obj);
            $('.todo input').val("");
            console.log(arr);
            console.log(arr.length);
            $('.out ol').append("<li class=' spisi flex justify-between items-center' >" + obj + '<i class="fas fa-times"></i>' + "</li>")
            $('.out ol li').on('click', function() {
                $(this).addClass('active');
            });
            $('.out ol li i').on('click', function() {
                $(this).parent().remove();
            });
        } else {
            console.log("Нельзя");
        }
       
    });
});