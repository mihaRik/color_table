let colors = new XMLHttpRequest();
colors.open("GET", "color.json", true);
colors.onload = function () {
    let obj = JSON.parse(colors.responseText);
    for (var arr in obj) {
        let colorObj = obj[arr];
        for (var i = 0; i < colorObj.length; i++) {
            let row = "<tr>";
            let td = "";
            for (let prop in colorObj[i]) {
                if (prop == "code") {
                    for (let codeProp in colorObj[i][prop]) {
                        td += "<td>" + colorObj[i][prop][codeProp] + "</td>"
                    }
                } else {
                    td += "<td>" + colorObj[i][prop] + "</td>"
                }
            }
            td += '<td style=background:' + colorObj[i].color +';></td>'
            row = row + td + "</tr>";
            $("#tableBody").append(row)
        }
    }
}
colors.send()