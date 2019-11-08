const state = {
    loginComponent: 'login',
    marketComponent: 'market',
    sellingComponent: 'sdk',
    patientComponent: 'pd',
    managerComponent: 'approval',
    findComponent: 'id',
    mypageComponent: 'check',
    token: null,
    name: null,
    role: null,
    id: null,
    DocPrescription: {
        blurMax: 0,
        blurMin: 0,
        horizontalMax: 0,
        horizontalMin: 0,
        mainEye: null,
        objectMax: 0,
        objectMin: 0,
        verticalMax: 0,
        verticalMin: 0
    },
    Docpdlist: [],
    DocrangesList: [],
    DocplayLogs: []
}

export default state