document.getElementById('amountOfProposition').innerText = $('.active .get-amount').text();

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function replenish() {
    alert($('.select__head').text());
    alert($('.active .replenish-amount').text());
}

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().html($(this).html());
        $(this).parent().prev().prev().val($(this).html());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

var tariff = document.getElementsByClassName("tariff");
for (var i = 0; i < tariff.length; i++) {
    tariff[i].addEventListener("click", (e) => {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    e.currentTarget.className += " active";
    document.getElementById('amountOfProposition').innerText = $('.active .get-amount').text();
  });
}

// timer initialize 

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = new Date(Date.parse(new Date()) + 6 * 1000);
        initializeClock('countdown', deadline);
      }
  
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2) + ':';
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2) + ':';
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 5 * 210000);
  initializeClock("countdown", deadline);