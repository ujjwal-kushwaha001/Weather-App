import React from 'react'

const navbar = ({inputRef,setLocation}) => {

    const handleSearch = () => {
        setLocation(inputRef.current.value);
        inputRef.current.value = "";
      };

  return (
    <>
      <div className="navbar w-[100vw] flex items-center justify-between px-2 bg-cyan-600">
        <p className='font-bold text-2xl'>U Weather</p>
        <div className="input-div flex justify-center my-3 h-[30px] w-[80%] gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter City Name Here"
            name="location"
            id="location"
            className=" bg-amber-50 w-[70%] px-1 rounded-md"
          />
          <button
            onClick={(e) => handleSearch()}
            className=" bg-blue-400 px-2 rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default navbar
