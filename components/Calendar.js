import * as React from "react"
import { useEffect, useState } from "react"
import Moment from "react-moment"

export default function Calendar({ deadline }) {
    useEffect(() => {}, [deadline])
    return (
        <div className="calendar">
            <div className="flex h-3 w-full pt-2 pb-1 justify-center items-center  text-rose-500 text-[10px] font-bold ">
                <Moment unix format="MMM">
                    {deadline}
                </Moment>
            </div>
            <Moment unix format="D">
                {deadline}
            </Moment>
        </div>
    )
}
