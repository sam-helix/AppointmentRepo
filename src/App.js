// import {GiAndroidMask} from "react-icons/gi";
import "./index.css";
import Search from "./Search";
import { useCallback, useEffect, useState } from "react";
import AddAppointment from "./AddAppointment";
import { BiCalendarPlus } from "react-icons/bi";
import AppointmentInfo from "./AppointmentInfo";
function App() {
  let [AppointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredAppointment = AppointmentList.filter((item) => {
    return (
      item.petName.toLowerCase().includes(query.toString().toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toString().toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toString().toLowerCase())
    );
  }).sort((a, b) => {
    let order = orderBy === "asc" ? 1 : -1;
    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order
      : 1 * order;
  });

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="App conatainer ml-2 mx-auto mt-3 font-thin">
      <h1 className="text-5xl text-left sm:mb-10">
        {" "}
        <BiCalendarPlus className="inline-block text-red-500" />
        Your Appointments
      </h1>
      <AddAppointment
        onSendAppointment={(myAppointment) =>
          setAppointmentList([...AppointmentList, myAppointment])
        }
        lastId={AppointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <Search
        query={query}
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />
      <ul className="divide-y divide-gray-200">
        {filteredAppointment.map((appointment) => (
          <AppointmentInfo
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={(appointmentId) =>
              setAppointmentList(
                AppointmentList.filter(
                  (appointment) => appointment.id !== appointmentId
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
