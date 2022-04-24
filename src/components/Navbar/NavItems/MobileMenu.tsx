import { Dispatch, SetStateAction } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = (props: Props) => {

  return (
    <div className="xl:hidden lg:hidden block z-50">
      <button onClick={() => props.setIsOpen((prev) => !prev)}>
        {!props.isOpen ? (
          <CgMenuRight className="w-6 h-6 hover:text-white/80 transition-colors" />
        ) : (
          <CgClose className="w-6 h-6 hover:text-white/80 transition-colors" />
        )}
      </button>
    </div>
  );
}

export default MobileMenu