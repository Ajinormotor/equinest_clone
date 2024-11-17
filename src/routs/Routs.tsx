'use client'

import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/auth/Signup'
import VerifyEmail from '../pages/auth/VerifyEmail'
import Agreement from '../pages/auth/Agreement'
import Successfully from '../pages/auth/Successfully'
import Signin from '../pages/auth/Signin'
const Routs = () => {
  
 const location = useLocation()


  return (
    <section>
        <AnimatePresence mode='wait'>
            <Routes  key={location.pathname}>
                <Route path='/' element={<Home />}  />

                {/* auth routes */}
                <Route path='/sign-up'  element={<Signup  />} />
                <Route path='/sign-in'  element={<Signin  />} />
                <Route path='/verify-email'  element={<VerifyEmail  />} />
                <Route path='/agreement'  element={<Agreement  />} />
                <Route path='/successfully'  element={<Successfully  />} />

            </Routes>
            </AnimatePresence>

    </section>
  )
}

export default Routs


