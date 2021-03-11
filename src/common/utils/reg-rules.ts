/**
 * Created by 含光<jiankang.pjk@alibaba-inc.com> on 2021/3/3 17:58.
 */
const RegularMap = {
  mobile: {pattern: /^(1[3|4|5|7|8|9])\d{9}$/, message: '请输入正确的手机号码'},
  email: {pattern: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/, message: '请输入正确email'},
};

export default RegularMap;
