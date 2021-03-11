import axios from 'axios';

export const submitContactInfo = (params: CONTACT.contactUs): Promise<IResponse<{ success: boolean }>> => {
  return axios({
    url: '/api/survey/login',
    params
  }).then(res=>res.data)
}
