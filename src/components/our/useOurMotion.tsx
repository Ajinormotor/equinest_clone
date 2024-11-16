

const useOurMotion = ({delay}:{delay:number}) => {

    const containerVariant = {
        hidden:{y:100,opacity:0},
        visible:{
          y:0, opacity:1,
            transition: {
                staggerChildren:0.3,
                delayChildren:delay
            }

        }
    }

    const itemVariant = {
        hidden:{y:100,opacity:0},
        visible:{ y:0, opacity:1,}
    }


    const vissionVariant = {
        hidden:{y:100,opacity:0},
        visible:{
          y:0, opacity:1,
            transition: {
                staggerChildren:0.3,
                delayChildren:delay
            }

        }
    }

    const itemVissionVariant = {
        hidden:{x:100,opacity:0},
        visible:{ x:0, opacity:1,}
    }


  return {
    itemVariant,containerVariant,vissionVariant, itemVissionVariant
  }
   
}

export default useOurMotion
