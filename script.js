var loader = document.getElementById("loader");
        var blacker = document.getElementById("container");
        var body = document.getElementsByTagName("body");
        function onloadFunction() {
            loader.style.animation = "none";
            blacker.style.display = "none";
        };

        var bar = document.getElementById('bar');
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                bar.style.position = "fixed";
                bar.style.boxShadow = "-1px 3px 16px 1px black";
                bar.style.border = "none";
            }
            else{
                bar.style.position = "";
                bar.style.boxShadow = "";
                bar.style.border = "";
            }

        });

        function resize() {
            var w = document.documentElement.clientWidth;

            var h1 = w * 1329 / 1999;
            var i1 = document.getElementById('jungleImg');
            i1.style.transform = "scale(" + (w / 1999) + ")";
            i1.style.left = w / 2 - 999.5;
            i1.style.top = h1 / 2 - 1329 / 2;

            var h2 = w * 1412 / 2000;
            var i2 = document.getElementById('roadImg');
            i2.style.transform = "scale(" + (w / 2000) + ")";
            i2.style.left = w / 2 - 1000;
            i2.style.top = h2 / 2 - 1412 / 2;

            var h3 = w * 1412 / 1916;
            var i3 = document.getElementById('IntrumentsGenImg');
            i3.style.transform = "scale(" + (w / 1916) + ")";
            i3.style.left = w / 2 - 1916 / 2;
            i3.style.top = h3 / 2 - 1412 / 2;
        }
        resize();
        window.addEventListener('resize', resize, true);

        var gameBtn = document.getElementsByClassName("game");
        for (var x = 0; x < gameBtn.length; x++) {
            gameBtn[x].addEventListener("click", function () {
                console.log(this);
                document.getElementById(this.getAttribute("jumpTo")).scrollIntoView({
                    behavior: "smooth"
                });
            });
        }

        var items = document.getElementsByTagName('area');
        var aud = document.getElementsByTagName('audio')[0];
        var audsrc = document.getElementById('audsrc');
        for (var x = 0; x < items.length; x++) {
            items[x].addEventListener("click", function () {
                aud.src = "audio/" + this.getAttribute("title") + ".mp3";
                aud.play();
            });
        }