import {
    auth,
    regist,
    medi,
    chart
} from '../api'

const actions = {
    LOGIN({
        commit,
        state
    }, {
        id,
        pw
    }) {
        return auth.login(id, pw)
            .then((data) => {
                commit('LOGIN', data)
            })
    },
    CHECK_DUPLICATE(_,
        id
    ) {
        return regist.checkDuplicate(id)
    },
    REGIST_FUNC(_, data) {
        return regist.registIt(data)
    },
    PD_CHART() {
        return medi.pdchart()
    },
    RANGE_CHART() {
        return medi.rangeChart()
    },
    FOCOUS_CHART() {
        return medi.focusChart()
    },
    TRAINING_CHART() {
        return medi.trainingChart()
    },
    PATIENT_REFER() {
        return chart.refer();
    },
    PATIENT_REGIST(_, id) {
        return chart.regist(id)
    },
    PATIENT_CHART(_, id) {
        return chart.patientChart(id)
    },
    PATIENT_CHARTUPDATE(_, {
        id,
        prescription
    }) {
        return chart.patientChartUpdate({
            id,
            prescription
        })
    }
}

export default actions