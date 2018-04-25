/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '2142002330@qq.com';
// email 登陆密码
const emailPassword = '123456qwe';
// 接收者 邮箱
const toEmail = '2142002330@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '__ckguid=r7qphPu2quK5tBtU1rX7l4; __jsluid=02c7a6efbdb2d359197817a89aec79c8; smzdm_user_source=D17B82529F131DC329259BF63D7DCF7F; device_id=37461863401510996590482606626a1a8b994ddaf3e6098bbf29bf6d9e; is_first_youhui=1; smzdm_id=2366259715; userId=2366259715; _ga=GA1.2.2111729721.1511256819; wt3_eid=%3B999768690672041%7C2151109020100366148%232151583849100408982; ad_date=25; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1522136548,1523243550,1523341891,1524638174; zdm_qd=%7B%7D; _gid=GA1.2.1265639267.1524638174; PHPSESSID=2655194245bd87217c2369c5e83ad120; _gat_UA-27058866-1=1; sess=MmZmZTJ8MTUyOTgyMjE3OXwyMzY2MjU5NzE1fDk5M2I1MTg4NmUwMTdmZjNiZjIwYzYzZGNlMDQ2NjAy; user=user%3A2366259715%7C2366259715; ad_json_banner=%7B%22J_slick-pic2%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A2%7D%2C%22J_slick-pic3%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A2%7D%7D; ad_json_feed=%7B%22J_feed_ad2%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A2%7D%7D; smzdm_user_view=298C4FD9C1C2EF179FD5431653188D1B; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1524638185
'
	},


//回复列表 用于发表评论的内容
let commitList = [
	'感谢分享，这个价可以入手吗 ',
	'感觉分享，这个可以关注一下',
	'这个不错，感谢分享，关注一下',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
