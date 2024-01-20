const Modal = ({children, onClose}) => {



  return (
    <>
    <section
      className="fixed z-10 top-0 left-0 w-full h-dvh flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8"
      role="alert"
    >   <button onClick={onClose} className='absolute top-4 right-4 uppercase text-white font-medium'>close</button>
        <div className='min-w-72 md:min-w-96 bg-white p-10'>
            {children} 
        </div>  
    </section>
    </>
  );
}

export default Modal