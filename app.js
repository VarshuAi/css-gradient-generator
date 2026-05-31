
            const c1 = document.getElementById('grad-c1');
            const c2 = document.getElementById('grad-c2');
            const ang = document.getElementById('grad-angle');
            const box = document.getElementById('grad-canvas');
            const code = document.getElementById('grad-css');

            function apply() {
                const css = `linear-gradient(${ang.value}deg, ${c1.value}, ${c2.value})`;
                box.style.background = css;
                code.value = `background: ${css};`;
            }
            [c1, c2, ang].forEach(el => el.addEventListener('input', apply));
            apply();
        