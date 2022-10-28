

function clamp(input, min, max) 
{
    if (input < min)
        return min;

    if (input > max)
        return max;

    return input;
}

function clampMin(input, min) 
{
    if (input < min)
        return min;

    return input;
}

function clampMax(input, max) 
{
    if (input > max)
        return max;

    return input;
}

function PageHeight() 
{
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    return height;
}

function highlightFor(id, color, seconds) 
{
    var element = document.getElementById(id);
    var origcolor = element.style.backgroundColor;
    element.style.backgroundColor = color;
    var t = setTimeout(function () {
        element.style.backgroundColor = origcolor;
    }, (seconds * 1000));
}

function scroll_To(id) {
    try {
        document.getElementById(`${id}`).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        highlightFor(id, "#D6BAD0", 1);
    }
    catch { }
}

function DeleteConfirmation(GET_url, CustomText = "Are you sure you want to delete this record?") {
    var del = confirm(CustomText);
    if (del == true) {
        window.location.href = GET_url;
    }
    return del;
}


var _Utils = function ()
{
    this.findChildById = function (element, childID, isSearchInnerDescendant) // isSearchInnerDescendant <= true for search in inner childern 
    {
        var retElement = null;
        var lstChildren = isSearchInnerDescendant ? Utils.getAllDescendant(element) : element.childNodes;

        for (var i = 0; i < lstChildren.length; i++)
        {
            if (lstChildren[i].id == childID)
            {
                retElement = lstChildren[i];
                break;
            }
        }

        return retElement;
    }

    this.getAllDescendant = function (element, lstChildrenNodes)
    {
        lstChildrenNodes = lstChildrenNodes ? lstChildrenNodes : [];

        var lstChildren = element.childNodes;

        for (var i = 0; i < lstChildren.length; i++) 
        {
            if (lstChildren[i].nodeType == 1) // 1 is 'ELEMENT_NODE'
            {
                lstChildrenNodes.push(lstChildren[i]);
                lstChildrenNodes = Utils.getAllDescendant(lstChildren[i], lstChildrenNodes);
            }
        }

        return lstChildrenNodes;
    }        
}
var Utils = new _Utils;

// function getPos(ele){
//     var x=0;
//     var y=0;
//     while(true){
//         x += ele.offsetLeft;
//         y += ele.offsetTop;
//         if(ele.offsetParent === null){
//             break;
//         }
//         ele = ele.offsetParent;
//     }
//     return [x, y];
// }

class Draggable 
{
    constructor(element, dragHandle, destination) 
    {
        this.element = element;
        this.dragBar = dragHandle;
        this.dest = destination;

        if(!this.element || !this.dragBar)
            return;

        this.destRect = this.dest.getBoundingClientRect();
        console.log(this.destRect);
        this.elemLocation = this.dragBar.getBoundingClientRect();
        this.left = this.elemLocation.left;
        this.pageHeight = PageHeight();
        this.active = false;
        this.currentX;
        this.currentY;
        this.initialX;
        this.initialY;
        this.xOffset = 0;
        this.yOffset = 0;
        this.snapBack = true;
        // this.startPos = getPos(element);

        this.dragBar.addEventListener("mousedown",  (e) =>
        {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
    
            this.active = true;
            this.element.style.zIndex = '1000';
            // this.element.style.position = 'fixed';
        }, false);

        window.addEventListener("mouseup", (e) =>
        {
            if(!this.active)
                return;

            if(e.clientX >= this.destRect.x && e.clientX - this.destRect.x <= this.destRect.width &&
               e.clientY >= this.destRect.y && e.clientY - this.destRect.y <= this.destRect.height)
            {
                this.element.style.display = 'none';
            }
            else if(this.snapBack)
            {
                this.element.style.transform = "none";//"translate3d(" + this.startPos[0] + "px, " + this.startPos[1] + "px, 0)";
                
                this.active = false;
                this.element.style.zIndex = '100';
                this.xOffset = 0;
                this.yOffset = 0;
                // this.element.style.position = 'static';
            return;
            }

            this.initialX = this.currentX;
            this.initialY = this.currentY;
    
            this.active = false;
            this.element.style.zIndex = '100';
            // this.element.style.position = 'static';

            
        }, false);


        // add mouse move to the whole page 
        // so that even if the mouse goes off the control it still drags
        window.addEventListener("mousemove", (e) =>
        {
            if (!this.active) 
                return;
            
            e.preventDefault();

            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;

            // this.element.style.transform = "translate3d(" + clamp(this.currentX, -this.left, 0) + "px, " + clamp(this.currentY, 0, this.pageHeight) + "px, 0)";
            this.element.style.transform = "translate3d(" + this.currentX + "px, " + this.currentY + "px, 0)";
            
        }, false);
    }
}

function init_draggables( )
{
    var destinations = document.getElementsByClassName("drag_destination");
    for(var htm of document.getElementsByClassName("draggable"))
    {
        new Draggable(htm, Utils.findChildById(htm, "dragBar", true), destinations[0]);
    }
}


