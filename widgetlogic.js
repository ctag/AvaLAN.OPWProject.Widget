
// Global Variables
var dolval;
var tensval;
var onesval;
var doldiv;
var tensdiv;
var onesdiv;

var images = [
    `<img id="0" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #003300;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #003300;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #003300;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #003300;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #003300;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #003300;" />
        </svg>
    </img>`,
    `<img id="1" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #003300;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #003300;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #003300;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #003300;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="2" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #003300;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #00ff00;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #003300;" />    
        </svg>
    </img>`,
    `<img id="3" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #003300;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" /> 
        </svg>
    </img>`,
    `<img id="4" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #00ff00;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #003300;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #003300;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="5" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #00ff00;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #003300;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="6" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #00ff00;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #003300;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #00ff00;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="7" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #003300;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #003300;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #003300;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="8" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #00ff00;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #00ff00;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`,
    `<img id="9" name="digitalnumber">
        <svg width="200" height="400">
            <polygon points="40,80 60,60 80,80 80,160 60,180 40,160" style="fill: #00ff00;" />
            <polygon points="63,57 83,37 147,37 167,57 147,77 83,77" style="fill: #00ff00;" />
            <polygon points="150,80 170,60 190,80 190,160 170,180 150,160" style="fill: #00ff00;" />
            <polygon points="63,183 83,163 147,163 167,183 147,204 83,204" style="fill: #00ff00;" />
            <polygon points="40,206 60,187 80,207 80,287  60,307 40,287" style="fill: #003300;" />
            <polygon points="63,310 83,290 147,290 167,310 147,330 83,330" style="fill: #00ff00;"/>
            <polygon points="150,206 169,187 190,207 190,287  170,307 150,287" style="fill: #00ff00;" />
        </svg>
    </img>`
]

function init()
{
    // Collect elements for global variables, 
    // this saves time by only doing it once on page load.
    dolval = document.getElementById("dol");
    tensval = document.getElementById("tens");
    onesval = document.getElementById("ones");
    doldiv = document.getElementById("dollar");
    tensdiv = document.getElementById("centtens");
    onesdiv = document.getElementById("centones");
    
    // Push initial values to page.
    dolval.value = 1;
    tensval.value = 2;
    onesval.value = 3;
    doldiv.innerHTML = doldiv.innerHTML + images[dolval.value];
    tensdiv.innerHTML = tensdiv.innerHTML + images[tensval.value];
    onesdiv.innerHTML = onesdiv.innerHTML + images[onesval.value];
}

function initdigits()
{
    // Shouldn't be needed, but I'll leave it here.
}
