  ...
  </main>

  <!-- Floating cursor hearts -->
  <script>
    document.addEventListener("mousemove", function(e) {
      const heart = document.createElement("div");
      heart.innerText = "💕"; // or 🎈
      heart.style.position = "fixed";
      heart.style.left = e.pageX + "px";
      heart.style.top = e.pageY + "px";
      heart.style.pointerEvents = "none";
      heart.style.fontSize = "18px";
      heart.style.opacity = "0.8";
      heart.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transition = "all 1s ease";
        heart.style.opacity = "0";
        heart.style.top = e.pageY - 30 + "px";
      }, 10);

      setTimeout(() => heart.remove(), 1000);
    });
  </script>
</body>
</html>
