
const state = {
	navIndex: 0
}
const mutations = {
	addCount(state) {
		state.count++
	},
	newNavIndex(state,i){
		state.navIndex = i
	}
}
export default {
	state,
	mutations
}