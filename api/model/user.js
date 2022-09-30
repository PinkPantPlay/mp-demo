import config from '../../config/index';
import http from '../../utils/request';

module.exports = {
  info: {
    url: `${config.API_URL}/user/info`,
    get: async function (data = {}) {
      return await http.get(this.url, data);
    }
  }
}