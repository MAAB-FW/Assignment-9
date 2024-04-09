import React from "react"
import SingleEstateCard from "./SingleEstateCard"
import useDataLoad from "../../hooks/useDataLoad"

const Estate = () => {
    const data = useDataLoad()
    // console.log(data)

    return (
        <div className="w-[83%] mx-auto mt-12 md:mt-28">
            <div className="text-center ">
                {/* <h2>Your Gateway to Exceptional Residential Living</h2> */}
                <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">Properties</h2>
                <p className="max-w-xl mx-auto text-sm md:text-base text-slate-500 mb-7 md:mb-12">
                    At Urban Nest, we understand that finding the perfect place to call home is a journey filled with excitement
                    and possibilities.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((d) => (
                    <SingleEstateCard key={d.id} d={d}></SingleEstateCard>
                ))}
            </div>
        </div>
    )
}

export default Estate
