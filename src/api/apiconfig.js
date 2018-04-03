/*
*author: junyang
*/
import Vue from 'vue'
const ISMOCK = true; // 测试数据


const API_VER = "0.1"; // API版本

// 下面两个是一些接口都要用到的默认参数
// const DEFAULT_CODE = "341000000000";
// const DEFAULT_TYPE = "3";
// 默认接口路径配置图片的和接口的
const CONTEXTPATHIMG = ISMOCK ? '/static/img' : "http://" + location.host + '/img'; // /static/img/
const CONTEXTPATH = ISMOCK ? '/static/mock' : "http://" + location.host + '/TourBigdataRESTful'; //CONTEXTPATH如果是本地json的mock数据的话就是配置的本地项目的mock目录

export default {
    /**
     * api接口地址
     * @type {Object}
     */

    API: {
        USERS: {
            getUsers:  CONTEXTPATH + "/users/users.json",
        },
        
        // COMMON:{
        //     LogoutRequest: ISWEBVIEW && '63bb2605de69470bbd570aad5b24ed61' || CONTEXTPATH + '/logout.do',
        //     LoginRequest: ISWEBVIEW && '3584aa906c6b408c9192b8bcc7011f1d' || CONTEXTPATH + '/login.do',
        //     validateUserName: ISWEBVIEW && '8d11298eddce46f3ada1bfc37ddab502' || CONTEXTPATH + '/validateUserName.do',
        // },
        // SYSTEM:{
        //     getUserSettingInfo: ISWEBVIEW && 'dd0c8ac810224ebfac81ae0f9020c57d' || CONTEXTPATH + '/system/getUserSettingInfo.do',
        //     setUserAlarm: ISWEBVIEW && '9a34727c294e4425a29adf30c801db88' || CONTEXTPATH + '/system/setUserAlarm.do',
        // },
    },
    ajax (url, type, params) {
        const promise = Vue.axios({
            method: type || "get",
            // url:'/static/mock/users/users.json',
            // url: this.$api.API.USERS.getUsers,
            url: url,
            params: params
        })
        return promise;
    },
    GET_PATH: function(id, path, ip) {
        id = id || '';
        return ISWEBVIEW && id || (ip || CONTEXTPATH) + path;
    }
}

// window.CONFIGPATH = CONFIGPATH;
