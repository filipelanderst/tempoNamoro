function relogioNamoro() {
  const dataNamoro = new Date(2018, 00, 26, 1, 13).getTime();
  const hoje = new Date().getTime();

  const anos = new Date(hoje - dataNamoro).getFullYear() - 1970;
  const meses = new Date(hoje - dataNamoro).getMonth();
  const dias = new Date(hoje - dataNamoro).getDay();
  const horas = new Date(hoje - dataNamoro).getHours();
  const minutos = new Date(hoje - dataNamoro).getMinutes();
  const segundos = new Date(hoje - dataNamoro).getSeconds();

  const dataCorrida = `${anos} anos:${meses}:${dias}:${horas}:${minutos}:${segundos}`;
  const miliPorDias = 864000000;
  const namoroEmDias = (dataNamoro / miliPorDias - 49.4).toFixed();

  const txtDias = document.querySelector('.num-dias');
  txtDias.innerHTML = namoroEmDias;

  const texto = document.querySelector('.texto');
  texto.innerHTML = `Hoje está fazendo <span>${anos}</span> anos, <span>${meses}</span> meses, <span>${dias}</span> dias, <span>${horas}</span> horas, <span>${minutos}</span> minutos e <span>${segundos}</span> segundos que a gente está junto`;
}

setInterval(relogioNamoro, 1000);
