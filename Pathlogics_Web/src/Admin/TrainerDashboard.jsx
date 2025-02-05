import { useState, useEffect } from "react";
import axios from "axios";

function TrainerDashboard() {
  const [trainers, setTrainers] = useState([]);
  const [view, setView] = useState("allTrainers"); // default view
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editTrainerData, setEditTrainerData] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/admin/getTrainer");
        if (response.status === 200) {
          setTrainers(response.data.TrainerData);
        }
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (trainerId) => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this trainer?");
    
      if (!isConfirmed) {
        // If user cancels the confirmation, break the operation and don't delete
        return;
      }
    
      const response = await axios.delete(`http://localhost:4000/api/admin/deleteTrainer/${trainerId}`);
      
      if (response.status === 200) {
        alert("Trainer deleted successfully");
        setTrainers(trainers.filter((trainer) => trainer.id !== trainerId));
      }
    } catch (error) {
      console.error("Error deleting trainer:", error);
      alert("Failed to delete trainer");
    }

  };

  const handleStatusChange = async (trainerId, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    try {
      const response = await axios.put(`http://localhost:4000/api/admin/updateTrainerStatus/${trainerId}`, {
        status: newStatus,
      });
      if (response.status === 200) {
        alert(`Trainer status updated to ${newStatus}`);
        setTrainers(
          trainers.map((trainer) =>
            trainer.id === trainerId ? { ...trainer, status: newStatus } : trainer
          )
        );
      }
    } catch (error) {
      console.error("Error updating trainer status:", error);
      alert("Failed to update trainer status");
    }
  };

  const handleEditTrainer = (trainer) => {
    setEditTrainerData(trainer);
    setIsPopupOpen(true);
  };

  const handleUpdateTrainer = async (e) => {
    e.preventDefault();
    const { id, name, phone, email, password, status } = editTrainerData;
    console.log("editTrainerData", editTrainerData)
    try {
      const response = await axios.put(`http://localhost:4000/api/admin/updateTrainer/${editTrainerData.id}`, {
        name,
        phone,
        email,
        password,
        status,
      });
      if (response.status === 200) {
        alert("Trainer updated successfully");
        setTrainers(
          trainers.map((trainer) =>
            trainer.id === editTrainerData.id ? editTrainerData : trainer
          )
        );
        setIsPopupOpen(false);
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
      alert("Failed to update trainer");
    }
  };

  const renderAllTrainers = () => (
    <div>
      <h1 className="text-xl font-bold mb-4">All Trainers</h1>
      <table className="w-[1000px] ml-[10px] bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. no.</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer, index) => (
            <tr key={trainer.id} className="text-center border-t">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{trainer.name}</td>
              <td className="border p-2">{trainer.phone}</td>
              <td className="border p-2">{trainer.email}</td>
              <td className="border p-2">
                <p>{trainer.status}</p>
                <button
                  onClick={() => handleStatusChange(trainer.id, trainer.status)}
                  className="mt-2 p-1 bg-blue-500 text-white"
                >
                  {trainer.status === "active" ? "Inactivate" : "Activate"}
                </button>
              </td>
              <td className="border p-2 bg-red-600">
                <button
                  onClick={() => handleDelete(trainer.id)}
                  className="text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEditTrainer(trainer)}
                  className="text-white ml-2 bg-yellow-500 p-1"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Trainer Popup */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 w-96 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Edit Trainer</h2>
            <form onSubmit={handleUpdateTrainer}>
              <input
                type="text"
                value={editTrainerData.name}
                onChange={(e) => setEditTrainerData({ ...editTrainerData, name: e.target.value })}
                className="border p-2 w-full mb-4"
                required
              />
              <input
                type="text"
                value={editTrainerData.phone}
                onChange={(e) => setEditTrainerData({ ...editTrainerData, phone: e.target.value })}
                className="border p-2 w-full mb-4"
                required
              />
              <input
                type="email"
                value={editTrainerData.email}
                onChange={(e) => setEditTrainerData({ ...editTrainerData, email: e.target.value })}
                className="border p-2 w-full mb-4"
                required
              />
              <input
                type="password"
                value={editTrainerData.password}
                onChange={(e) => setEditTrainerData({ ...editTrainerData, password: e.target.value })}
                className="border p-2 w-full mb-4"
                required
              />
              <select
                value={editTrainerData.status}
                onChange={(e) => setEditTrainerData({ ...editTrainerData, status: e.target.value })}
                className="border p-2 w-full mb-4"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                Update Trainer
              </button>
            </form>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="bg-red-500 text-white p-2 mt-4 w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderAddTrainer = () => <AddTrainer setView={setView} />;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Trainer Panel</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 ${view === "allTrainers" ? "bg-gray-700" : ""}`}
            onClick={() => setView("allTrainers")}
          >
            All Trainers
          </li>
          <li
            className={`cursor-pointer p-2 ${view === "addTrainer" ? "bg-gray-700" : ""}`}
            onClick={() => setView("addTrainer")}
          >
            Add Trainer
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {view === "allTrainers" && renderAllTrainers()}
        {view === "addTrainer" && renderAddTrainer()}
      </div>
    </div>
  );
}

function AddTrainer({ setView }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:4000/api/admin/addTrainer", {
        name,
        phone,
        email,
        password,
        status,
      });
      alert("Trainer added successfully");
      setView("allTrainers");
    } catch (error) {
      console.error("Error adding trainer:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Add Trainer</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full"
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Add Trainer
        </button>
      </form>
    </div>
  );
}

export default TrainerDashboard;
