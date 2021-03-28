// fn: reduce a string too long. Ex: 'lorem in life a lock' => 'lorem in ...'
function reduceString(str = '', quantity = 64, strReplace = '...') {
  if (str === '' || str.length < quantity) return str;
  return str.slice(0, quantity) + strReplace;
}

// fn: reduce time
function reduceTime(time) {
  try {
    const date = new Date(time).getTime();
    const now = Date.now();
    const diff = parseInt((now - date) / 1000);
    if (diff >= 31536000) return `${parseInt(diff / 31536000)} năm`;
    else if (diff >= 2592000) return `${parseInt(diff / 2592000)} tháng`;
    else if (diff >= 86400) return `${parseInt(diff / 86400)} ngày`;
    else if (diff >= 3600) return `${parseInt(diff / 3600)} giờ`;
    else if (diff >= 60) return `${parseInt(diff / 60)} phút`;
    else if (diff < 10) return 'Vừa gửi';
    return `${diff} giây`;
  } catch (error) {
    return '';
  }
}

export default {
  reduceString,
  reduceTime,
};
