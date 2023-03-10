import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HabitHistoryCard from "../Component/HabitHistoryCard";
import TabBar from "../Component/TabBar";
import { RootState } from "../Redux/store";
// import { State } from "../redux/types";

export default function HistoryPage() {
  const history_habit_card = require("../Assests/history-habit-card.png");
  const {id} = useParams();
  const data: any  = useSelector((state: RootState) => state.updateHabit);

  return (

    // This page Display particular habit history and status of habit days wise.
    <div className="historypage ">
      <div className="design ">
        
        <div className="p-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHE_gwYgWJ30txioCFgHyycs-bH0INvgzOHKK92D_Mgl8HXCGJAP6w5NP68xP_uucwKhs&usqp=CAU" alt="History Habit Card" className="imghistory" />

          {/* <div className="text-xl font-normal">{data[0].title}</div> */}
          <div className="text-black text-xl py-2 font-bold">{ data[Number(id) - 1]?.title}</div>
          <div className="history-card  max-h-[40vh] overflow-y-scroll">
            {/* Using map to iterate and to render all the days with status */}
             {
              data[Number(id) - 1]?.day?.map( (e: any, index: number) => (
                <HabitHistoryCard
                day={e.day}
                habitStatus={e.status}
                index={index}
                key={index}
                id={Number(id)}
                />
              ) )
             }

          </div>
        </div>
        <div >
          {/* This is the component used for navigating to, homepage, add new page and habits page. */}
          <TabBar />
        </div>
      </div>
    </div>
  );
}
