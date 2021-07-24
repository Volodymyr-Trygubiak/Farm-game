const state = () => ({
  medicine: {
    sad: 0,
    happy: 0,
    heart: 0,
    count: 0,
  },
});

const mutations = {
  updateSadMed(state, newMed) {
    state.medicine.sad = newMed;
  },
  updateHappyMed(state, newMed) {
    state.medicine.happy = newMed;
  },
  updateHeartMed(state, newMed) {
    state.medicine.heart = newMed;
  },
  updateLocalMed(state, localMed) {
    state.medicine = localMed || state.medicine;
  },
};

const actions = {
  addSadMedicine({ commit, state }) {
    let newMed = ++state.medicine.sad;
    state.medicine.count++;
    localStorage.setItem("medicine", JSON.stringify(state.medicine));
    commit("updateSadMed", newMed);
  },
  addHappyMedicine({ commit, state }) {
    let newMed = ++state.medicine.happy;
    state.medicine.count++;
    localStorage.setItem("medicine", JSON.stringify(state.medicine));
    commit("updateHappyMed", newMed);
  },
  addHeartMedicine({ commit, state }) {
    let newMed = ++state.medicine.heart;
    state.medicine.count++;
    localStorage.setItem("medicine", JSON.stringify(state.medicine));
    commit("updateHeartMed", newMed);
  },
  getLocalMedicine({ commit }) {
    let localMed = JSON.parse(localStorage.getItem("medicine"));
    commit("updateLocalMed", localMed);
  },
};

const getters = {
  // sadMed: ({ medicine: { sad } }) => sad,
  // happyMed: ({ medicine: { happy } }) => happy,
  // heartMed: ({ medicine: { heart } }) => heart,
  // count: ({ medicine: { count } }) => count,
  medicine: ({ medicine }) => medicine,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
