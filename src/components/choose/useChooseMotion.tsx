
interface props{
    delay: number
}


const useChooseMotion = ({delay = 0.5}:props) => {



const containerVariant = {
    hidden:{y:70},
    next:{y:-100},
    visible:{y:0,
    transition:{
        staggerChildren:0.3,
        delayChildren: delay
    },
  }
}

const itemVariant = {
    hidden:{y:50},
    visible:{y:0},
    exit:{y:-100},
}


  return{
    containerVariant,itemVariant
  }
}

export default useChooseMotion
