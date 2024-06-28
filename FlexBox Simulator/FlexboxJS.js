function setGap() {
    let gapValue = document.getElementById("gap").value;
    let flexContainer = document.querySelector(".flex-container");
    flexContainer.style.gap = `${gapValue}px`;
    console.log(`Gap: ${flexContainer.style.gap}`);
}

function setFlexDirection(direction) {
    let flexContainer = document.querySelector(".flex-container");
    if (direction === 1) {
        flexContainer.style.flexDirection = "row";
    } else if (direction === 2) {
        flexContainer.style.flexDirection = "column";
    }
    console.log(`Flex-Direction: ${flexContainer.style.flexDirection}`);
}


function justifyContent(justifyType) {
    let flexContainer = document.querySelector(".flex-container");
    const justifyOptions = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
    flexContainer.style.justifyContent = justifyOptions[justifyType - 1];
    console.log(`Justify-Content: ${flexContainer.style.justifyContent}`);
}


function alignItems(alignType) {
    let flexContainer = document.querySelector(".flex-container");
    const alignOptions = ["start", "center", "end"];
    flexContainer.style.alignItems = alignOptions[alignType - 1];
    console.log(`Align-Items: ${flexContainer.style.alignItems}`);
}

function setFlexGrow(box, value) {
    let flexBox = document.getElementById(`flex${box}`);
    flexBox.style.flexGrow = value;
    console.log(`Flex-Grow of Box ${box}: ${flexBox.style.flexGrow}`);
}


function resetFlexGrow() {
    ["A", "B", "C"].forEach(box => {
        document.getElementById(`flex${box}`).style.flexGrow = '0';
    });
    console.log("Flex-Grow reset for all boxes.");
}


function resetFlexbox() {
    let flexContainer = document.querySelector(".flex-container");
    flexContainer.style.gap = '0';
    document.getElementById("gap").value = '0';
    flexContainer.style.flexDirection = "row";
    flexContainer.style.justifyContent = "start";
    flexContainer.style.alignItems = "start";

    resetFlexGrow();
    ["grow1", "grow2", "grow3"].forEach(id => {
        document.getElementById(id).value = '0';
    });

    console.log("Flexbox reset to default settings.");
}


document.getElementById("gap").addEventListener("input", setGap);
document.getElementById("resetflexbox").addEventListener("click", resetFlexbox);
document.getElementById("justifycenter").addEventListener("click", () => justifyContent(2));
document.getElementById("justifyend").addEventListener("click", () => justifyContent(3));
document.getElementById("justifybetween").addEventListener("click", () => justifyContent(4));
document.getElementById("justfiyaround").addEventListener("click", () => justifyContent(5));
document.getElementById("justifyevenly").addEventListener("click", () => justifyContent(6));
document.getElementById("alignstart").addEventListener("click", () => alignItems(1));
document.getElementById("aligncenter").addEventListener("click", () => alignItems(2));
document.getElementById("alignend").addEventListener("click", () => alignItems(3));
document.getElementById("resetgrow").addEventListener("click", resetFlexGrow);
document.getElementById("growall").addEventListener("click", () => {
    setFlexGrow('A', document.getElementById("grow1").value);
    setFlexGrow('B', document.getElementById("grow2").value);
    setFlexGrow('C', document.getElementById("grow3").value);
});
document.getElementById("growb1").addEventListener("click", () => setFlexGrow('A', document.getElementById("grow1").value));
document.getElementById("growb2").addEventListener("click", () => setFlexGrow('B', document.getElementById("grow2").value));
document.getElementById("growb3").addEventListener("click", () => setFlexGrow('C', document.getElementById("grow3").value));
