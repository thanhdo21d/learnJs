function wait(time = 0) {
    return new Promise(function (resolve, reject) { 
        setTimeout(resolve, time)
    })
}

// async function runTime() {
//     await console.log("Running time")
//     await wait(5000)
//     await console.log("endding time")
// }
// runTime() 

const runTime = async () => {
    const time =  "Running time"
    await wait(5000)
    const time2 = "endding time"
    const logTime =  await Promise.all([time, time2])
    console.log(logTime)
}
runTime() 