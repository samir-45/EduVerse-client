import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaLaptop, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const eventsData = [
  {
    id: 1,
    title: "React.js Masterclass",
    date: "2025-09-15",
    time: "7:00 PM - 9:00 PM",
    location: "Online (Zoom)",
    description: "Learn React.js fundamentals to advanced concepts with live coding sessions.",
    type: "Online",
    registerLink: "#"
  },
  {
    id: 2,
    title: "Data Science Career Talk",
    date: "2025-09-20",
    time: "5:00 PM - 6:30 PM",
    location: "Eduverse Main Auditorium",
    description: "Industry experts share insights on building a career in Data Science.",
    type: "Offline",
    registerLink: "#"
  },
  {
    id: 3,
    title: "AI in Education Webinar",
    date: "2025-09-25",
    time: "8:00 PM - 9:30 PM",
    location: "Online (Google Meet)",
    description: "Explore how AI is transforming the education sector worldwide.",
    type: "Online",
    registerLink: "#"
  },
  {
    id: 4,
    title: "UI/UX Design Bootcamp",
    date: "2025-10-01",
    time: "10:00 AM - 4:00 PM",
    location: "Eduverse Design Lab",
    description: "Hands-on bootcamp to design modern and user-friendly web apps.",
    type: "Offline",
    registerLink: "#"
  },
  {
    id: 5,
    title: "Cybersecurity Awareness Workshop",
    date: "2025-10-05",
    time: "3:00 PM - 5:00 PM",
    location: "Online (Microsoft Teams)",
    description: "Learn about online safety, hacking prevention, and data protection.",
    type: "Online",
    registerLink: "#"
  },
  {
    id: 6,
    title: "Python for Beginners",
    date: "2025-10-10",
    time: "6:00 PM - 8:00 PM",
    location: "Eduverse Main Hall",
    description: "Kickstart your programming journey with Python fundamentals.",
    type: "Offline",
    registerLink: "#"
  }
];

export default function Events() {
  const totalEvents = eventsData.length;
  const onlineEvents = eventsData.filter(e => e.type === "Online").length;
  const offlineEvents = eventsData.filter(e => e.type === "Offline").length;

  return (
    <div className="w-11/12 mx-auto px-4 py-10">

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Events & Webinars</h1>
        <p className="text-gray-600 mt-3 text-lg">
          Join our upcoming educational events, workshops, and webinars to enhance your skills.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaCalendarAlt className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">{totalEvents}</h3>
          <p className="text-gray-600">Total Events</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaLaptop className="text-green-600 text-3xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">{onlineEvents}</h3>
          <p className="text-gray-600">Online Events</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaUsers className="text-yellow-600 text-3xl mx-auto mb-3" />
          <h3 className="text-2xl font-bold">{offlineEvents}</h3>
          <p className="text-gray-600">Offline Events</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="p-5">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                event.type === "Online" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}>
                {event.type}
              </span>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{event.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <FaCalendarAlt className="mr-2" /> {event.date}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-1">
                <FaClock className="mr-2" /> {event.time}
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <FaMapMarkerAlt className="mr-2" /> {event.location}
              </div>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <Link 
                
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Register Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
