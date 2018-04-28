const Service = {
    platform: '',
    userId: '',//38862,//todo 登录后替换
    patientId: '',// 957,//todo 登录后替换
    token: '',
    // static: Config.static,
    // staticMedicine: Config.staticMedicine,
    getNowDate: '/system/getNowDate',//获取系统时间,无需登录
    getVersionInfo: '/system/getVersionInfo',//检测版本号
    reportAppMessage: '/reportAppMessage',// 汇报消息
    Register: '/user/register/validateUsername',
    login: '/user/login/passwordValidateLogin',
    smsLogin: '/user/login/smsValidateLogin',
    captcha: '/user/captcha',//获取图形验证码
    verifyCode: '/user/verifyCode',//发送验证码短信
    smsValidateForgetPassword: '/user/login/smsValidateForgetPassword',//忘记密码-校验短信验证码
    updatePassword: '/user/login/updatePassword',//忘记密码-更新密码
    uploadImageAttachment: '/uploadImageAttachment',//上传文件
    uploadImageAttachments: '/uploadImageAttachments',
    updateHeadImage: '/user/updateHeadImage',//修改用户头像
    ////////////////融云
    getRongCloudToken: '/rongCloud/getRongCloudToken',//将app用户登录到融云,获取token并缓存在本地
    ////////////////
    setRelationship: '/patient/setRelationship',//设置患者关系  requestParam:   userId(用户id),Relationship(与患者字典值)
    addPatientDisease: '/patient/addPatientDisease',//添加患者病种  requestParam:   userId(用户id),diseaseSubId(二级病种id)
    updateSex: '/patient/updateSex',//修改患者性别     requestParam:   userId(用户id),sex(性别字典值)
    updateInformation: '/patient/updateInformation',//更新患者信息// requestParam:   userId(用户id),(realname真实姓名),height(身高),weight(体重) birthday(生日),bornProvince(所在省),bornCity(所在市)
    ////////////////
    syscodeList: '/system/syscodeList',//获取字典值  requestParam:   type(字典值类型) responseParam code(字典值编码) name(字典值名称)  如：性别字典值获取 传入type=sex,type=Relationship
    diseaseList: '/system/diseaseList',//获取呼吸类二级病种  responseParam id(二级病种id) name(二级病种名称)
    ////////////////
    treatmentType: '/treatment/findPatientTreatmentTypeOfAsthmaList',//就诊类型
    province: '/treatment/findProvinceList',//省份
    area: '/treatment/findAreaList',//地区(省市区)
    hospital: '/treatment/findAllHospitalList',//医院
    department: '/treatment/findDepartmentListByHospital',//科室
    doctor: '/treatment/findDoctorListByDepartment',//医生
    doctorInfo: '/doctor/info',//医生
    homeDoctorList: '/doctor/homeDoctorList',//家庭医生列表 requestParam: cityId(城市id) title(职称)
    expertDoctorList: '/doctor/expertDoctorList',//专家医生列表 requestParam: cityId(城市id) title(职称)
    recommendDoctorVoList: '/doctor/recommendDoctorVoList',//推荐医生列表
    doctorExpertTeamList: '/doctorExpertTeam/list',//专家团队列表
    doctorExpertTeamDetail: '/doctorExpertTeam/detail',//专家团队详情
    doctorDetail: '/doctor/info',//医生详情
    findPatientTreatmentPage: '/treatment/findPatientTreatmentPage',
    findAllDiagnosisList: '/treatment/findAllDiagnosisList',
    savePatientTreatment: '/treatment/savePatientTreatment',//保存就诊记录
    findAllMedicineList: '/treatment/findAllMedicineList',//药品选择-添加
    findMedicinePlanResponse: '/treatment/findMedicinePlanResponse',//用药计划
    findMedicinePrescribeList: '/treatment/findMedicinePrescribeList',//药物
    findMedicinePrescribeUsingList: '/treatment/findMedicinePrescribeUsingList',//药品列表
    savePatientPrescribe: '/treatment/savePatientPrescribe',//保存药物
    deletePatientPrescribe: '/treatment/deletePatientPrescribe',//删除药物
    savePatientPrescribeMedicine: '/treatment/savePatientPrescribeMedicine',//保存药物
    deletePatientPrescribeMedicine: '/treatment/deletePatientPrescribeMedicine',//删除药物
    saveMedicinePlan: '/treatment/saveMedicinePlan',//保存用药计划
    deleteMedicinePlan: '/treatment/deleteMedicinePlan',//删除用药计划
    saveMedicineTakenRecord: '/treatment/saveMedicineTakenRecord',//添加服用记录
    deleteMedicineTakenRecord: '/treatment/deleteMedicineTakenRecord',//删除服用记录
    ////////////////
    actNewest: '/asthma/getACTNewest', //获取最新一次的ACT评测分数 requestParam:   userId(用户id) responseParam data（分数）
    addSymptom: '/asthma/addSymptom',  //添加今日症状 requestParam: patientId(患者id) symtom(症状) otherSymtom(其他症状)
    getSymptom: '/asthma/getSymptom', //获取今日症状 requestParam: patientId(患者id) response 今日症状
    getPef: '/asthma/getPef', //获取今日PEF（峰流速） requestParam: patientId(患者id) response: pefMorning（峰流速早） pefNight（峰流速晚）
    addPef: '/asthma/addPef', //添加PEF（峰流速）requestParam: patientId(患者id),pefType(峰流速类型，1-早，2-晚),pefValue(峰流速值),measureTime(测量时间)  response:在data中返回了本次峰流速添加的评估结果（evaluationResults:结果，riskWarning:风险提示，suggestions:干预建议）
    delPef: '/asthma/delPef',
    getAsthmaEmergencyList: '/asthma/getAsthmaEmergencyList', //获取急性发作列表 requestParam:asthmaId(哮喘日记id) response:急性发作记录列表
    addAsthmaEmergency: '/asthma/addAsthmaEmergency', //添加急性发作记录 requestParam:patientId,asthmaId,recordDate,emergencyJson
    getEmergencyReasonList: '/asthma/getEmergencyReasonList', //获取急性发作诱发原因列表 response:诱发原因列表
    uploadApp: '/uploadApp',
    delAsthmaEmergency: '/asthma/delAsthmaEmergency', //删除急性发作数据 requestParam:emergencyId(急性发作id)
    getWeekSwitchData: '/asthma/getWeekSwitchData', //首页星期切换数据显示(同时查出一周的数据) requestParam:patientId(患者id)
    //肺功能
    pulmonaryFunctionAdd: '/patient/pulmonaryFunction/add', //添加肺功能 requestParam:eventTime(发生时间,格式:yyyy-MM-dd HH:mm:ss),patientId(患者id),hospitalId(医院id),doctorId(医生id),remark(备注),paymentDocumentAttachmentIds(缴费清单附件id列表),pulmonaryFunctionResultAttachmentIds(检查结果附件id列表)
    pulmonaryFunctionDelete: '/patient/pulmonaryFunction/delete', //删除肺功能 requestParam:id(肺功能记录id)
    pulmonaryFunctionList: '/patient/pulmonaryFunction/list', //查询肺功能 requestParam:patientId(患者id)
    //手术
    surgeryAdd: '/patient/surgery/add',//添加手术 requestParam:eventTime(发生时间,格式:yyyy-MM-dd HH:mm:ss),patientId(患者id),hospitalId(医院id),doctorId(医生id),attachmentIds(附近id列表)
    surgeryDelete: '/patient/surgery/delete',//删除手术 requestParam:id(手术记录记录id)
    surgeryList: '/patient/surgery/list',//查询手术 requestParam:patientId(患者id)
    //其他资料
    otherDocumentAdd: '/patient/otherDocument/add',       //添加其他资料 requestParam:eventTime(发生时间,格式:yyyy-MM-dd HH:mm:ss),patientId(患者id),hospitalId(医院id),doctorId(医生id),remark(备注),attachmentIds(附件id列表)
    otherDocumentDelete: '/patient/otherDocument/delete', //删除其他资料 requestParam:id(其他资料id)
    otherDocumentList: '/patient/otherDocument/list',     //查询其他资料 requestParam:patientId(患者id)
    //患者检查
    inspectionAdd: '/patient/inspection/add',        //添加患者检查 requestParam:eventTime(发生时间,格式:yyyy-MM-dd HH:mm:ss),patientId(患者id),hospitalId(医院id),doctorId(医生id),itemName（检查项目），remark(备注),paymentDocumentAttachmentIds(缴费清单附件id列表),inspectionResultAttachmentIds(检查结果附件id列表)
    inspectionDelete: '/patient/inspection/delete',  //删除患者检查 requestParam:id(检查结果id)
    inspectionList: '/patient/inspection/list',      //查询患者检查 requestParam:patientId(患者id)
    //影像资料
    imgingInformationAdd: '/patient/imgingInformation/add',       //添加影像资料 requestParam:eventTime(发生时间,格式:yyyy-MM-dd HH:mm:ss),patientId(患者id),hospitalId(医院id),doctorId(医生id),attachmentIds(附近id列表)
    imgingInformationDelete: '/patient/imgingInformation/delete', //删除影像资料 requestParam:id(影像资料id)
    imgingInformationList: '/patient/imgingInformation/list',     //查询影像资料 requestParam:patientId(患者id)
    //疾病史
    diseaseHistoryAdd: '/patient/diseaseHistory/add',        //添加疾病史 requestParam:patientId(患者id)，diseaseName(疾病名称)
    diseaseHistoryDelete: '/patient/diseaseHistory/delete',  //删除疾病史 requestParam:id(疾病史id)
    diseaseHistoryList: '/patient/diseaseHistory/list',      //查询疾病史 requestParam:patientId(患者id)

    getUserInfo: '/user/getUserInfo',//查询用户信息 requestParam:userId(用户id)

    todayTip: '/cms/category/0/limit/1',//今日小贴士
    knowledgeLab: '/cms/category/1/limit/1',//哮喘知识库
    story: '/cms/category/2/limit/1',//医患故事
    breathingDisease: '/cms/category/3/limit/100',//呼吸百科
    medicineVideo: '/cms/category/4/limit/',//用药视频
    expertForum: '/cms/category/5/limit/',//专家讲堂
    patientCompulsory: '/cms/category/6/limit/',//成人哮喘
    childrenCompulsory: '/cms/category/7/limit/',//少儿哮喘
    honyaradoh: '/cms/category/8/limit/',//少儿哮喘
    carousel: '/cms/category/9/limit/',//少儿哮喘
    article: '/cms/article/',//文章详情
    //mine
    patientInfo: '/patient/getPatientBaseInfo',
    myDoctor: '/user/myDoctor',
    myDoctorList: '/user/myDoctorList',
    addressPage: '/shippingAddress/page',
    addressList: '/shippingAddress/list',
    addressInfo: '/shippingAddress/info',
    addressAdd: '/shippingAddress/add',
    addressModify: '/shippingAddress/modify',
    addressDelete: '/shippingAddress/delete',
    changePassword: '/user/login/changePassword',
    havePassword: '/user/havePassword',
    orderList: '/order/list',
    orderDetail: '/order/detail',
    orderInfo: '/order/info',
    orderCancel: '/order/cancel',
    orderSave: '/order/save',
    toWechatPay: '/order/toWechatPay',//微信预支付
    toJDPay: '/order/toPay',//京东支付

    feedback: '/feedback/add',
    addAllergen: '/patient/addAllergen', //添加患者过敏源
    getAllergen: '/patient/getAllergen', //获取患者填写过的过敏源
    //添加ACT测试记录 requestParam:userId(用户id) type(类型1-成人 2-儿童) score(得分)
    addACTTestRecord: '/patient/addACTTestRecord',
    findAllEmergencyMedicineList: '/treatment/findAllEmergencyMedicineList',//缓解类用药列表
    findEmergencyMedicinePlan: '/treatment/findEmergencyMedicinePlan',//缓解类用药用药计划

    pefDetailData: '/asthma/getPefDetailData',
    pefHistoryList: '/asthma/getPefHistoryList',
    getAreaData: '/system/generateAreaData',//获取服务-医生列表-地区数据
    serviceBannerList: '/product/bannerList',//获取服务-顶部轮播图列表
    insurancePackList: '/product/insurancePackList',//获取保险列表页
    insurancePackDetail: '/product/insurancePackDetail',//获取保险详情
    peakFlowMeterList: '/product/peakFlowMeterList',//锋速仪列表
    peakFlowMeterDetail: '/product/peakFlowMeterDetail',//锋速仪详情
    isBindingDoctor: '/patient/isBinding',//查询患者是否绑定该医生
    bindingDoctor: '/patient/bindDoctor', //绑定医生
    // 复诊提醒
    referralReminderList: '/reminder/referralReminderList', //复诊提醒列表
    addReferralReminder: '/reminder/addReferralReminder', //复诊提醒列表
    deleteReferralReminder: '/reminder/deleteReferralReminder', //复诊提醒列表
    /**
     * 统计
     */
    statWeeklyEvaluation: '/stat/weeklyEvaluation', //查询上周统计数据
    statWeeklyEvaluationById: '/stat/weeklyEvaluationById', //查询上周统计数据
    statMonthlyEvaluationById: '/stat/monthlyEvaluationById', //查询上周统计数据
    statWeeklyEvaluationList: '/stat/weeklyEvaluationList', //查询周评估列表
    statMonthlyEvaluationList: '/stat/monthlyEvaluationList', //查询月评估列表
    weeklyEvaluationChart: '/stat/weeklyEvaluationChart.hf', //请求周统计报表页面
    monthlyEvaluationChart: '/stat/monthlyEvaluationChart.hf', //请求月统计报表页面
    thisWeekEvaluationChart: '/stat/thisWeekEvaluationChart.hf', //请求周统计报表页面
};
module.exports = Service;
