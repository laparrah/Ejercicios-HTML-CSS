const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

const textHour = document.getElementById('text-hour'),
        textMinutes = document.getElementById('text-minutes'),
        textAmPm = document.getElementById('text-ampm')
        
        dateDay = document.getElementById('date-day'),
        dateMonth = document.getElementById('date-month'),
        dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        amppm,
        mm = date.getMinutes(),

        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
    
    //Cambio a formato 12 horas
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    } else{
        ampm = 'AM'
    }

    //Cambia de 0AM a 12AM
    if(hh == 0 ) {hh=12}

    //Muestra un 0 antes de la hora cuando sea menor de 10
    if(hh < 10) {hh = `0${hh}`}

    //Muestra un 0 antes de los minutos cuando sean menor a 10
    if(mm < 10) {mm = `0${mm}`}

    //Mostrar la hora
    textMinutes.innerHTML = mm  //minutos
    textHour.innerHTML = `${hh}:`   //horas
    textAmPm.innerHTML = ampm       //AM o PM

    //Mostrar fecha
    let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic']

    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year

}
setInterval(clockText, 1000)