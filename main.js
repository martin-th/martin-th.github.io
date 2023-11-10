/*var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewriter');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('datatype');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
};
*/
var TxtType=function(t,i,e){this.toRotate=i,this.el=t,this.loopNum=0,this.period=parseInt(e,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,i=this.toRotate[t];this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){e.tick()},s)},window.onload=function(){for(var t=document.getElementsByClassName("typewriter"),i=0;i<t.length;i++){var e=t[i].getAttribute("datatype"),s=t[i].getAttribute("data-period");e&&new TxtType(t[i],JSON.parse(e),s)}var h=document.createElement("style");h.type="text/css",h.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #000}",document.body.appendChild(h)};