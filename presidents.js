/*
 
Author: Cliff Hewitt
Info:   https://www.270towin.com/historical-presidential-elections/

18-Jul-2024  Inception
16-Jan-2025  Look and feel redesign.  Add next president.
09-Feb-2025  Handle table keys Enter, ArrowDomn, ArrowUp

*/

const MAIN_TBL = "#mainTable";
const INFO_TBL = "#infoTable";
const HIGHLIGHT = "highlight";
const MEDIA = "media";

function init() {
    initTable();
    initHandlers();
}

function initHandlers() {
    const $doc = $(document);

    $doc.click(event => {
        click(event);
    });

    $doc.keydown(event => {
        keydown(event);
    });
}

function keydown(event) {
    const $highlight = $(MAIN_TBL + " ." + HIGHLIGHT);
    let index = $highlight.length > 0 ? $highlight.closest("tr")[0].rowIndex - 1 : -1;

    if ("Enter" === event.key && index >= 0) {
        openWiki($highlight);
    }
    else if ("ArrowDown" === event.key) {
        index++;
        if (index >= presidents.length) {
            index = 0;
        }
        highlight(index);
    }
    else if ("ArrowUp" === event.key) {
        index--;
        if (index < 0) {
            index = presidents.length - 1;
        }
        highlight(index);
    }
}

function highlight(index) {
    const $rows = $(MAIN_TBL + " tbody tr");
    const $td = $($rows[index]).find("td:last-child");
    hover($td);
}

function click(event) {
    const $target = $(event.target);

    if ($target.hasClass(HIGHLIGHT)) {
        openWiki($target);
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

function openWiki($target) {
    const name = $target.text();
    const url = "https://en.wikipedia.org/wiki/" + name.replaceAll(' ','_');
    window.open(url, "_blank");
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

    $(MAIN_TBL + ' tbody tr td:last-child').hover(
        function() {
            hover($(this));
        }
    );

    $(MAIN_TBL + " thead").hover(
        function() {
            clearHover();
        }
    );
}

function hover($this) {
    if (document.hasFocus()) {
        $("." + HIGHLIGHT).removeClass(HIGHLIGHT);
        $this.addClass(HIGHLIGHT);
        showPresident(Number($this.parent().find("td:first-child").text()) - 1);

        $("#focusHelper").focus(); // Redirect focus away from the scrollbar
        $this[0].scrollIntoView({ behavior: "smooth", block: "nearest" }); // scroll to make visible

        if ($this.parent()[0].rowIndex <= 1) {  // Make sure header shows when 1st row selected
            $(MAIN_TBL + " thead")[0].scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }
}

function clearHover() {
    if (document.hasFocus()) {
        $("." + HIGHLIGHT).removeClass(HIGHLIGHT);
        $(INFO_TBL).empty();
        $("#infoText").empty();
        $("#images").empty();
        document.title = "Presidents";
    }
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
