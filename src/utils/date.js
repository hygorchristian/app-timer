export const formatMilisseconds = milis => {
  if (milis > 1000) {
    const seconds = parseInt((milis / 1000) % 60);
    const minutes = parseInt((milis / (1000 * 60)) % 60);
    const hours = parseInt((milis / (1000 * 60 * 60)) % 24);

    let sText = '';
    let mText = '';
    let hText = '';

    if (seconds < 10) {
      sText = `0${seconds}`;
    } else {
      sText = `${seconds}`;
    }

    if (minutes < 10) {
      mText = `0${minutes}`;
    } else {
      mText = `${minutes}`;
    }

    if (hours < 10) {
      hText = `0${hours}`;
    } else {
      hText = `${hours}`;
    }

    return `${hText}:${mText}:${sText}`;
  }

  return '00:00:00';
};

export const getTimeTodayString = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
};
