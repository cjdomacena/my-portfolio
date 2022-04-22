import React from 'react'
import { CgMenuRight } from 'react-icons/cg'

type Props = {}

const MobileMenu = (props: Props) => {
  return (
    <div className="xl:hidden lg:hidden block">
      <CgMenuRight className='w-6 h-6' />
    </div>
  );
}

export default MobileMenu