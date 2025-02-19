 // Countdown Timer
        function startCountdown() {
            const newYear = new Date("January 1, 2025 00:00:00").getTime();
            const timer = setInterval(function () {
                const now = new Date().getTime();
                const timeLeft = newYear - now;

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML = `
                    ${days}d ${hours}h ${minutes}m ${seconds}s
                `;

                if (timeLeft < 0) {
                    clearInterval(timer);
                    document.getElementById("countdown").innerHTML = " Happy New Year";
                }
            }, 1000);
        }
        startCountdown();
        // Audio Control
        const audio = document.getElementById("audio");
        const playButton = document.getElementById("playButton");

        playButton.addEventListener("click", () => {
            audio.play()
                .then(() => {
                    console.log("Audio is playing.");
                    playButton.style.display = "none"; // Hide button after interaction
                })
                .catch((error) => {
                    console.error("Error playing audio:", error);
                });
        });

        // Fireworks Animation
        const canvas = document.getElementById("fireworks");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ["#ff4500", "#ffd700", "#00ffcc", "#ff69b4", "#00bfff", "#f39c12"];

        function createParticle(x, y) {
            const particle = {
                x: x,
                y: y,
                size: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                speedX: Math.random() * 4 - 2,
                speedY: Math.random() * 4 - 2,
                life: Math.random() * 60 + 40
            };
            particles.push(particle);
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;
                p.life--;

                if (p.life <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            for (let i = 0; i < 5; i++) {
                createParticle(Math.random() * canvas.width, Math.random() * canvas.height);
            }

            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Diya Hover Effect
       /* const diya = document.getElementById("diya");

        document.addEventListener("mousemove", (event) => {
            diya.style.left = event.pageX - 25 + "px";  // Adjusting position so the diya is centered over cursor
            diya.style.top = event.pageY - 25 + "px";   // Adjusting position so the diya is centered over cursor
            diya.style.display = "block";  // Make the diya visible
        });*/

        // Hide diya when mouse leaves the page
        document.addEventListener("mouseleave", () => {
            diya.style.display = "none";  // Hide the diya when mouse leaves the page
        });