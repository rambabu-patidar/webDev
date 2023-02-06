const main = document.querySelector("main");
        const hexCode = document.querySelector(".hex");
        const rgbCode = document.querySelector(".rgb");
        const hslCode = document.querySelector(".hsl");
        const changeBtn = document.querySelector("button");
        let hexForm = "";
        let hslForm = "";

        // initial color codes
        rgbCode.textContent = "rgb(240, 255, 255)";
        hexCode.textContent = "#f0ffff";
        hslCode.textContent= "hsl(180, 100%, 97%)";
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1));
        }



        function toHex(n) {
            let hex = n.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        function toHSL(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            const l = Math.max(r, g, b);
            const s = l - Math.min(r, g, b);
            const h = s
                ? l === r
                    ? (g - b) / s
                    : l === g
                        ? 2 + (b - r) / s
                        : 4 + (r - g) / s
                : 0;
                
            return `hsl(${Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h)}, ${Math.round(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0))}% ,${Math.round((100 * (2 * l - s)) / 2)}%)`
        }

        function randomColor() {
            const r = random(0, 255);
            const g = random(0, 255);
            const b = random(0, 255);
            hslForm = toHSL(r, g, b);
            hexForm = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
            return `rgb(${r},${g},${b})`;
        }

        changeBtn.onclick = () => {
            const color = randomColor();

            main.style.backgroundColor = `${color}`;

            rgbCode.textContent = color;
            hexCode.textContent = hexForm;
            hslCode.textContent = hslForm;
        }