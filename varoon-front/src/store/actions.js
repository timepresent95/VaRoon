import {
    auth,
    regist,
    medi,
    chart
} from '../api'

const actions = {
    LOGIN({
        commit
    }, {
        id,
        pw
    }) {
        return auth.login(id, pw)
            .then((data) => {
                commit('LOGIN', data)
            })
    },
    CHECK_DUPLICATE(_, {
        id
    }) {
        return regist.checkDuplicate(id)
    },
    REGIST(_, regist) {
        return regist.regist(regist)
    },
    TRAINING_CHART() {
        return medi.trainingChart()
    },
    PATIENT_REFER() {
        return chart.refer();
    },
    PATIENT_REGIST({
        dispatch
    }, id) {
        return chart.regist(id).then(() =>
            dispatch('PATIENT_REFER')
        );
    }
}

export default actions