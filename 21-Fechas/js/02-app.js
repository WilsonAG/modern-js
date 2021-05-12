const hoy = new Date()


moment.locale('es')

console.log(moment().format('MMMM do YYYY h:mm:ss a'))

console.log(moment().format('LLLL'))

console.log(moment().add(3, 'days').calendar())