function dragElement(koreanalphabetElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    koreanalphabetElement.onpointerdown = pointerDrag;

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
        koreanalphabetElement.style.top = (koreanalphabetElement.offsetTop - pos2) + 'px';
        koreanalphabetElement.style.left = (koreanalphabetElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('alphabet1'));
dragElement(document.getElementById('alphabet2'));
dragElement(document.getElementById('alphabet3'));
dragElement(document.getElementById('alphabet4'));
dragElement(document.getElementById('alphabet5'));
dragElement(document.getElementById('alphabet6'));
dragElement(document.getElementById('alphabet7'));
dragElement(document.getElementById('alphabet8'));
dragElement(document.getElementById('alphabet9'));
dragElement(document.getElementById('alphabet10'));
dragElement(document.getElementById('alphabet11'));
dragElement(document.getElementById('alphabet12'));
dragElement(document.getElementById('alphabet13'));
dragElement(document.getElementById('alphabet14'));
dragElement(document.getElementById('alphabet15'));
dragElement(document.getElementById('alphabet16'));
dragElement(document.getElementById('alphabet17'));
dragElement(document.getElementById('alphabet18'));
dragElement(document.getElementById('alphabet19'));
dragElement(document.getElementById('alphabet20'));
dragElement(document.getElementById('alphabet21'));
dragElement(document.getElementById('alphabet22'));
dragElement(document.getElementById('alphabet23'));
dragElement(document.getElementById('alphabet24'));