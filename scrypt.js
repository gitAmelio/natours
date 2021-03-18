const flipColumn = (imageIndex, col) => {
    el = document.querySelector(`.box--${col} .box__image .box__image--axes`) 
    el.style.transform = `rotateY(calc(${imageIndex} *-90deg))`;
}

const delay = (i, duration=200) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration, i);
    })
    return i
}

const colUp = async (imageIndex, duration = 500) => {
        for(let i = 1; i <= 7; i++ ){
           const r = await delay(i, duration);
           flipColumn(imageIndex,r)
        }
} 

const colDown = async (imageIndex, duration = 500) => {
    for(let i = 7; i >= 1; i-- ){
        const r = await delay(i, duration);
        flipColumn(imageIndex,r)
    }
} 

const imageUp = async (duration = 1000) => {
    let up = true;
    for(let i = 1; i <= 4; i++ ){
       const r = await delay(i, duration);
       if (up){
            await colUp(i);
            up = false;
        } else {
            await colDown(i);
            up = true;
        }
    }
} 

const imageDown = async (duration = 1000) => {
    let up = true;
    for(let i = 4; i >= 1; i-- ){
        const r = await delay(i, duration);
        if (up){
            await colUp(i);
            up = false;
        } else {
            await colDown(i);
            up = true;
        }
    }
} 

const flip = async () => {
    let up = true; 
    if (up){
        await imageUp();
        up = false;
    } else {
        await imageDown();
        up = true;
    }
}

const flipping = async() => {
    flip();
    setInterval(()=>flip(),20000);
}

flipping();