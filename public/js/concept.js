window.onload = function() {
    window.fabricCanvas = new fabric.Canvas('main');
}

function dragStart(event) {
    event.dataTransfer.setData('Image', event.target.src);
}

function dragOver(event) {
    event.preventDefault()
}

function handleDrop(event) {
    var imgUrl = event.dataTransfer.getData('Image');

    fabric.Image.fromURL(imgUrl, function(img) {
        img.set({
            left: event.layerX,
            top: event.layerY,
            width: 128,
            height: 128
        });

        fabricCanvas.add(img);
    });
}

function bringForward() {
    var activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.bringForward(activeObject);
    }
}

function bringToTop() {
    var activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.bringToFront(activeObject);
    }
}

function sendBackward() {
    var activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.sendBackwards(activeObject);
    }
}

function sendToBottom() {
    var activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.sendToBack(activeObject);
    }
}

function deleteSelected() {
    var activeObject = fabricCanvas.getActiveObject(),
        activeGroup = fabricCanvas.getActiveGroup();
    if (activeGroup) {
      var objectsInGroup = activeGroup.getObjects();
      fabricCanvas.discardActiveGroup();
      objectsInGroup.forEach(function(object) {
        fabricCanvas.remove(object);
      });
    }
    else if (activeObject) {
      fabricCanvas.remove(activeObject);
    }
}
