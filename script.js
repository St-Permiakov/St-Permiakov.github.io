const Survs = document.querySelectorAll('.js_Surv');
const ResetButton = document.querySelector('.js_Reset');

const survsHookCount = [0, 0, 0, 0];

const resetCounters = () => {
  for (let i = 0; i < survsHookCount.length; i++) {
    survsHookCount[i] = 0;
  }
}

const incrementCounter = (index) => {
  survsHookCount[index]++;
}

const decrementCounter = (index) => {
  survsHookCount[index]--;
}

const updateSurv = (index) => {
  const ticks = Survs[index].querySelectorAll('.js_Tick');
  const hookCount = survsHookCount[index];
  ticks.forEach((tick, index) => {
    if (index < hookCount) {
        tick.classList.add('active');
    } else {
        tick.classList.remove('active');
    }
  });

  if (hookCount >= 3) {
    Survs[index].classList.add('dead');
  } else {
    Survs[index].classList.remove('dead');
  }
}

const resetState = () => {
  resetCounters();
  Survs.forEach((surv, index) => {
    updateSurv(index);
  });
}

// Event Listeners
Survs.forEach((surv, index) => {
  const addButton = surv.querySelector('.js_Add');
  const removeButton = surv.querySelector('.js_Remove');

  addButton.addEventListener('click', () => {
    incrementCounter(index);
    updateSurv(index);
  });

  removeButton.addEventListener('click', () => {
    decrementCounter(index);
    updateSurv(index);
  });
});

// Reset button
ResetButton.addEventListener('click', () => {
  resetState();
});

resetState();