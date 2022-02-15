import ApiContants from "../contants/ApiContants";

const getFlagIcon = (
    code = 'PK',
    style = ApiContants.COUNTRY_FLAG.STYLE.FLAT,
    size = ApiContants.COUNTRY_FLAG.SIZE[64],
  ) => `${ApiContants.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}.png`;
  
  export default {getFlagIcon};