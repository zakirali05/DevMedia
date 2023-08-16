
// const Loader = () => {
//   return (
    
//         <div className=" absolute top-[43%] right-[43%] w-5 h-5 rounded-full p-3   border-l-[4px] border-r-[4px]   border-t-[4px] border-black dark:border-white animate-spin"></div>
   
//   )
// }

// export default Loader


 const Loader=()=> {
  return (
    <div className="spinner-container absolute top-[45%] right-[48%]">
      <div className="loading-spinner">
      </div>
    </div>
  );
}

export default Loader