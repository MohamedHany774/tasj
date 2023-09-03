const monsterProgress = document.getElementById('monster-progress');
    const humanProgress = document.getElementById('human-progress');
    const monsterProgressText = document.getElementById('monster-progress-text');
    const humanProgressText = document.getElementById('human-progress-text');
    const attackBtn = document.getElementById('attack-btn');
    const strongAttackBtn = document.getElementById('strong-attack-btn');
    const healBtn = document.getElementById('heal-btn');
    let strongAttackUsed = false;
    let healUses = 2;

    attackBtn.addEventListener('click', () => {
      const humanDecrease = Math.floor(Math.random() * 30) + 10;
      const monsterDecrease = Math.floor(Math.random() * 20) + 1;

      let newHumanValue = parseFloat(humanProgress.style.width) - humanDecrease;
      newHumanValue = Math.max(newHumanValue, 0);

      let newMonsterValue = parseFloat(monsterProgress.style.width) - monsterDecrease;
      newMonsterValue = Math.max(newMonsterValue, 0);

      humanProgress.style.width = newHumanValue + '%';
      monsterProgress.style.width = newMonsterValue + '%';

      humanProgressText.textContent = newHumanValue.toFixed(2) + '%';
      monsterProgressText.textContent = newMonsterValue.toFixed(2) + '%';
    });

    strongAttackBtn.addEventListener('click', () => {
      if (!strongAttackUsed) {
        const humanDecrease = Math.floor(Math.random() * 31) + 40;
        const monsterDecrease = Math.floor(Math.random() * 21) + 10;

        let newHumanValue = parseFloat(humanProgress.style.width) - humanDecrease;
        newHumanValue = Math.max(newHumanValue, 0);

        let newMonsterValue = parseFloat(monsterProgress.style.width) - monsterDecrease;
        newMonsterValue = Math.max(newMonsterValue, 0);

        humanProgress.style.width = newHumanValue + '%';
        monsterProgress.style.width = newMonsterValue + '%';

        humanProgressText.textContent = newHumanValue.toFixed(2) + '%';
        monsterProgressText.textContent = newMonsterValue.toFixed(2) + '%';

        strongAttackUsed = true;
        strongAttackBtn.disabled = true;
      }
    });
    healBtn.addEventListener('click', () => {
      if (healUses > 0) {
        const humanIncrease = Math.floor(Math.random() * 26); // Random number between 0 and 25

        let newHumanValue = parseFloat(humanProgress.style.width) + humanIncrease;
        newHumanValue = Math.min(newHumanValue, 100);

        humanProgress.style.width = newHumanValue + '%';
        humanProgressText.textContent = newHumanValue.toFixed(2) + '%';

        healUses--; // Decrease the number of remaining heal uses
        healBtn.textContent = `Heal (${healUses} uses left)`;

        // Disable the button when all uses are exhausted
        if (healUses === 0) {
          healBtn.disabled = true;
        }
      }
    });