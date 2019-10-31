function enabledisable(id) {
    object = document.getElementById(id);
    object.toggleAttribute("disabled");
}

function autofill(divid1, divid2){
    div1 = document.getElementById(divid1);
    div2 = document.getElementById(divid2);

    div1inputs = div1.getElementsByTagName('input');
    div2inputs = div2.getElementsByTagName('input');

    var index = 0;
    for(let ele of div1inputs){
        var item = div2inputs.item(index);
        item.value = ele.value;
        index++;
    }

}
