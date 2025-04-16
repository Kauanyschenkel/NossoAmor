const inicio = new Date("2025-03-03T00:00:00");

function atualizarContador() {
  const agora = new Date();
    const diff = agora - inicio;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutos = Math.floor((diff / (1000 * 60)) % 60);
            const segundos = Math.floor((diff / 1000) % 60);

              document.getElementById('timer').textContent =
                  `Estamos juntos há: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
                  }

                  setInterval(atualizarContador, 1000);
                  atualizarContador();