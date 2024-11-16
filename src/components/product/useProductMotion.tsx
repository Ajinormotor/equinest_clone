
interface props{
    delay: number
}


const useProductMotion = ({delay = 0.5}:props) => {



const containerVariant = {
    hidden:{x:70},
    next:{x:-100},
    visible:{x:0,
    transition:{
        staggerChildren:0.3,
        delayChildren: delay
    },
  }
}

const itemVariant = {
    hidden:{x:70},
    visible:{x:0},
    exit:{x:-100},
}


  return{
    containerVariant,itemVariant
  }
}

export default useProductMotion
