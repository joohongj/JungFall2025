function dragElement(campSiteDecoElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    campSiteDecoElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        campSiteDecoElement.style.top = (campSiteDecoElement.offsetTop - pos2) + 'px';
        campSiteDecoElement.style.left = (campSiteDecoElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('tools'));
dragElement(document.getElementById('tools1'));
dragElement(document.getElementById('tools2'));
dragElement(document.getElementById('tools3'));
dragElement(document.getElementById('tools4'));
dragElement(document.getElementById('tools5'));
dragElement(document.getElementById('tools6'));
dragElement(document.getElementById('tools7'));
dragElement(document.getElementById('tools8'));
dragElement(document.getElementById('tools9'));
dragElement(document.getElementById('tools10'));
dragElement(document.getElementById('tools11'));
dragElement(document.getElementById('tools12'));
dragElement(document.getElementById('tools13'));
