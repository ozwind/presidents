let currentPrez = 0;
const prezStore = 'prezStore';

function init() {
    $("#next").click(function () {
        next();
    });
    $("#previous").click(function () {
        previous();
    });

    $(document).keydown(function (event) {
        if (document.activeElement != $('#select')[0]) {
            if (event.which == 37) {
                previous();
            } else if (event.which == 39) {
                next();
            }
        }
    });

    $('#links a').click(function(event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr('href');
        window.open(url, '_blank');
    });

    currentPrez = Number(localStorage.getItem(prezStore));
    
    initPicklist();
}

function show() {
    var prez = presidents[currentPrez];
    var txt =  prez.name + " (#" + (currentPrez + 1) + ")";
    localStorage.setItem(prezStore, currentPrez);
    document.title = txt;
    $('#title').text(txt);
    var select = $('#select');
    select.val(prez.name);
    $('#term').text(prez.years);
    $('#age').text(prez.age);
    $('#party').text(prez.party);
    $('#info').text(prez.info ? prez.info : '');
    $('#spouse').text(prez.spouse ? prez.spouse : '');
    var $wiki = $('#wiki');
    $wiki.attr('href', 'https://en.wikipedia.org/wiki/' + prez.name.replaceAll(' ','_'));
    var $media = $('#media');
    $media.removeAttr('href');
    if (prez.media) {
        $media.show();
        $media.attr('href', prez.media);
    }
    else {
        $media.hide();
    }
    displayPhoto(prez);
}

function displayPhoto(prez) {
    var photo = $('#photo');
    photo.removeAttr('src');

    if (prez.photo) {
        setTimeout(function() {
            photo.attr('src', prez.photo);
        }, 0);
    }
}

function next() {
    currentPrez++;
    if (currentPrez >= presidents.length) {
        currentPrez = 0;
    }
    show();
}

function previous() {
    currentPrez--;
    if (currentPrez < 0) {
        currentPrez = presidents.length - 1;
    }
    show();
}

function initPicklist() {
    var self = this;
    var select = $('#select');

    for (var i = 0; i < presidents.length; i++) {
        var name = presidents[i].name;
        var option = document.createElement('option');
        option.setAttribute('value', name);
        option.appendChild(document.createTextNode(name));
        select.append(option);
    }

    select.change(function (event) {
        setPrez(event.target.value);
        show();
    });
}

function setPrez(name) {
    if (name) {
        for (var i = 0; i < presidents.length; i++) {
            if (presidents[i].name.includes(name)) {
                currentPrez = i;
                break;
            }
        }
    }
}
