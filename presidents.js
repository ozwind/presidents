/*
 
Author: Cliff Hewitt
Info:   https://www.270towin.com/historical-presidential-elections/

18-Jul-2024  Inception
15-Jan-2025  Look and feel redesign

*/

const MAIN_TBL = "#mainTable";
const INFO_TBL = "#infoTable";
const HIGHLIGHT = "highlight";
const MEDIA = "media";

function init() {
    initTable();

    $(document).click(event => {
        click(event);
    });
}

function click(event) {
    const $target = $(event.target);

    if ($target.hasClass(HIGHLIGHT)) {
        const name = $target.text();
        const url = "https://en.wikipedia.org/wiki/" + name.replaceAll(' ','_');
        window.open(url, "_blank");
    }
    else if ($target.hasClass(MEDIA)) {
        let url;
        const name = $("." + HIGHLIGHT).text();
        const president = presidents.find(d => d.name === name);
        if (president && president.media) {
            window.open(president.media, "_blank");
        }
    }
}

function initTable() {
    const $mainTbl = $(MAIN_TBL);
    const $table = $("<table>");
    const $thead = $("<thead>");
    const $tbody = $("<tbody>");
    const $headerRow = $("<tr>");

    $headerRow.append($("<th>").text(""));
    $headerRow.append($("<th>").text("President"));
    $thead.append($headerRow);
    $table.append($thead);

    for (let i = 0; i < presidents.length; i++) {
        const president = presidents[i];
        const $row = $("<tr>");
        const $name = $("<td>");
        $row.append($("<td>").text(i + 1));
        $name.text(president.name);
        $name.attr("title", "Click for more info");
        $row.append($name);
        $tbody.append($row);

        if (president.media) {
            $name.css("color", "yellow");
        }
    };

    $table.append($tbody);
    $mainTbl.append($table);

    $('tbody tr td:last-child').hover(
        function() {
            hover($(this));
        }
    );
}

function hover($this) {
    $("." + HIGHLIGHT).removeClass(HIGHLIGHT);
    $this.addClass(HIGHLIGHT);
    showPresident(Number($this.parent().find("td:first-child").text()) - 1);
}

function showPresident(index) {
    const president = presidents[index];
    const $infoTbl = $(INFO_TBL);
    const $infoTxt = $("#infoText");
    const $images = $("#images");
    const $table = $("<table>");
    const $thead = $("<thead>");
    const $tbody = $("<tbody>");
    const $headerRow = $("<tr>");
    const headers = ["Term", "Age", "Alive", "Party", ""];
    const media = $("<div class='media'>");
    if (president.media) {
        media.html("&#x266B;");
        media.attr("title", "Click for media play");
    }
    const columns = [president.years, president.age, president.alive || "", president.party, media];

    headers.forEach(header => {
        $headerRow.append($("<th>").text(header));
    });
    $thead.append($headerRow);
    $table.append($thead);
    const $row = $("<tr>");

    for (let i = 0; i < columns.length; i++) {
        $row.append($("<td>").html(columns[i]));
    }

    let info = president.info;
    if (president.spouse) {
        info += "<br><br>" + president.spouse;
    }

    $tbody.append($row);
    $table.append($tbody);
    $infoTbl.empty();
    $images.empty();
    $infoTbl.append($table);
    $infoTxt.html(info);

    const $portrait = $("<div id='portrait'>");
    const $maps = $("<div id='maps'>");
    let $img = $("<img>").attr("src", president.photo);
    $portrait.append($img);
    $images.append($portrait);
    $images.append($maps);

    if (president.maps) {
        president.maps.forEach(map => {
            $img = $("<img>").attr("src", map);
            $maps.append($img);
        });
    }

    document.title = president.name + " (#" + (index + 1) + ")";
}
