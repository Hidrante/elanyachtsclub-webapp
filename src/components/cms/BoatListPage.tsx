import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust the import path as needed

interface Boat {
  id: string;
  name: string;
  type: string;
  location: string;
  status: string;
  // Add other relevant fields you want to display
}

const BoatListPage: React.FC = () => {
  const [boats, set Boats] = useState<Boat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const boatsCollection = collection(db, 'boats');
        const q = query(boatsCollection, orderBy('createdAt', 'desc')); // Optional: order by creation date
        const boatSnapshot = await getDocs(q);
        const boatsList = boatSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Omit<Boat, 'id'> // Cast data to Boat interface
        }));
        setBoats(boatsList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching boats:", err);
        setError("Failed to fetch boats.");
        setLoading(false);
      }
    };

    fetchBoats();
  }, []);

  if (loading) {
    return <div>Loading boats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Boat List</h2>
      {boats.length === 0 ? (
        <p>No boats found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Status</th>
              {/* Add more table headers for other fields */}
            </tr>
          </thead>
          <tbody>
            {boats.map((boat) => (
              <tr key={boat.id}>
                <td className="py-2 px-4 border-b">{boat.name}</td>
                <td className="py-2 px-4 border-b">{boat.type}</td>
                <td className="py-2 px-4 border-b">{boat.location}</td>
                <td className="py-2 px-4 border-b">{boat.status}</td>
                {/* Add more table data for other fields */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BoatListPage;