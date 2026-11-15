(() => {
  const symbols = ["🐯", "💎", "👑", "⭐", "🪙"];
  const balanceEl = document.getElementById("balance");
  const openButton = document.getElementById("openGame");
  const closeButton = document.getElementById("closeGame");
  const gamePanel = document.getElementById("gamePanel");
  const spinButton = document.getElementById("spinButton");
  const resultMessage = document.getElementById("resultMessage");
  const historyList = document.getElementById("historyList");
  let balance = 1000;
  let rounds = 0;

  const format = value => value.toLocaleString("pt-BR");
  const updateBalance = () => { balanceEl.textContent = format(balance); };

  openButton.addEventListener("click", () => {
    gamePanel.classList.remove("hidden");
    gamePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  closeButton.addEventListener("click", () => {
    gamePanel.classList.add("hidden");
    document.getElementById("jogos").scrollIntoView({ behavior: "smooth" });
  });

  function addHistory(message) {
    const empty = historyList.querySelector(".empty-history");
    if (empty) empty.remove();
    const item = document.createElement("li");
    item.textContent = message;
    historyList.prepend(item);
    while (historyList.children.length > 5) historyList.lastElementChild.remove();
  }

  spinButton.addEventListener("click", () => {
    if (balance < 10) {
      resultMessage.textContent = "Seus créditos de demonstração acabaram. Reinicie a página para testar novamente.";
      return;
    }
    balance -= 10;
    rounds += 1;
    updateBalance();
    spinButton.disabled = true;
    resultMessage.textContent = "Girando os símbolos…";
    const result = Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    let ticks = 0;
    const animation = setInterval(() => {
      result.forEach((_, i) => {
        document.getElementById("reel" + i).textContent = symbols[Math.floor(Math.random() * symbols.length)];
      });
      ticks += 1;
      if (ticks >= 8) {
        clearInterval(animation);
        result.forEach((symbol, i) => { document.getElementById("reel" + i).textContent = symbol; });
        const allMatch = result.every(symbol => symbol === result[0]);
        const pair = !allMatch && (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]);
        let message = "Rodada concluída. Obrigado por testar!";
        if (allMatch) {
          balance += 50;
          message = "Combinação tripla! +50 créditos fictícios.";
        } else if (pair) {
          balance += 20;
          message = "Dois símbolos iguais! +20 créditos fictícios.";
        } else {
          message = "Boa tentativa! Esta rodada não teve combinação.";
        }
        updateBalance();
        resultMessage.textContent = message;
        addHistory("Rodada " + rounds + " · " + result.join("  ") + " · " + message);
        spinButton.disabled = false;
      }
    }, 90);
  });
})();