import { Button } from "@nextui-org/react";

const Landing = () => {
    return (
        <div className="justify-center items-center flex flex-col mx-60 max-md:mx-5">

            <div className="self-stretch mx-4 mt-40 max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[85%] max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">


                            <div className="justify-center items-start self-stretch flex flex-col max-md:max-w-full">

                                <div className="text-yellow-50 text-8xl leading-[64%] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
                                    <span className="instrument-serif">when </span>
                                    <span className="instrument-serif-italic">in my</span>
                                </div>

                                <div className="text-amber-300 text-9xl font-extrabold underline tracking-tighter mt-4 league-spartan max-md:text-6xl">
                                    indiranagar
                                </div>

                            </div>


                            <div className="flex w-full items-start justify-between gap-5 mt-32 max-md:flex-wrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/10c6d870-0fc8-499c-95f3-d3d1511a12c1?apiKey=82fbeafba71b456098d689d87f195e0a&"
                                    className="mt-2 max-md:mt-0"
                                />
                                <div className="justify-center text-yellow-50 text-2xl max-md:text-base xl:pr-[36rem]">
                                    Drive engagement (i.e. conversions) with branding, content, and websites that surpass loopy creativity to solve real problems and resonate with your people.
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="flex flex-col items-stretch justify-end max-md:w-full max-md:ml-0 mt-10">

                        {/* <button className="bg-[#fcd858] py-4 px-8 rounded-lg text-stone-900 font-semibold text-xl max-md:py-3">GET STARTED</button> */}

                        <Button className="bg-[#fcd858] text-md font-semibold p-6">
                            GET STARTED
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing

