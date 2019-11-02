// These are to track changes in radio buttons for reactions from js
// Using onchange does not work logically on it's own.
initprimaryc = '0';
initmeds = '0';
initsurg = '0';

function enabledisable(id) {
    object = document.getElementById(id);
    object.toggleAttribute("disabled");
}

function enabledisableinputs(divid, clickedobj, val) {

    if (divid === "prevcare"){
        if(val !== initprimaryc){
           internalfunction();
           initprimaryc = val;
        }
        else{
            // initprimaryc = clickedobj.value;
        }
    }
    else if(divid === "med"){
        if(val !== initmeds){
            internalfunction();
            initmeds = val;
        }
        else{
            // initmeds = clickedobj.value;
        }
    }
    else if(divid === "surg"){
        if(val !== initsurg){
            internalfunction();
            initsurg = val;
        }
        else{
            // initsurg = clickedobj.value;
        }
    }
    else{
        window.alert("Unexpected type in function call enabledisableinputs.")
    }

    function internalfunction() {
        object = document.getElementById(divid);
        divinputs = object.getElementsByTagName('input');

        divlabels = object.getElementsByTagName('label');

        for (let ele of divlabels) {
            ele.toggleAttribute('hidden')
        }

        for (let ele of divinputs) {
            ele.toggleAttribute('disabled')
        }
    }

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
