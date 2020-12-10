const devUrl = '/jeecg-boot/';  //http://134.95.140.19:8018
const proUrl = '/clgl/appInterface/';  //http://134.64.116.90:8001
const nowTime = Date.now || function () {
    return new Date().getTime();
};


export default {
  devUrl,
	proUrl,
}