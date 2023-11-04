export function formatDecimal(price) {
  return new Intl.NumberFormat('en-US', {style: 'decimal'}).format(price)
}

export function formatWon(price) {
  const result = formatDecimal(price)
  return result + " 원"
}

export function formatPlayTime(second) {
  const hours = Math.floor(second / (60 * 60));
  const minutes = Math.floor(second  % (60 * 60) / 60);
  const seconds = second % 60;

  if(hours === 0 && minutes === 0) {
    return `${seconds}초`
  } else if(hours !== 0 && minutes === 0) {
    return `${hours}시간`
  } else if(hours === 0 && minutes !== 0){
    return `${minutes}분`
  } else {
    return `${hours}시간 ${minutes}분`
  }
}
