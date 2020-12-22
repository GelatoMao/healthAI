const getTime = () => {
  let timestamp = new Date().getTime()
  let nowTime = new Date(timestamp),
    y = nowTime.getFullYear(),
    m = nowTime.getMonth() + 1,
    d = nowTime.getDate(),
    x = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + nowTime.toTimeString().substr(0, 8);
  // console.log(x);
  return x
}

export default getTime