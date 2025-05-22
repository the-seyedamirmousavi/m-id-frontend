import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import CircularProgress from "../../components/CircularProgress";
import Link from "next/link";

interface Client {
  id: number;
  name: string;
  status: "Active" | "Inactive" | "Suspended";
  lastAccess: string;
  clientId: string;
  clientName: string;
}

const getStatusClass = (status: Client["status"]): string => {
  switch (status) {
    case "Active":
      return "bg-success";
    case "Inactive":
      return "bg-secondary";
    case "Suspended":
      return "bg-danger";
    default:
      return "bg-light";
  }
};

const MonitoringComponent: React.FC = () => {
  const {getAccessToken} = useAuth();
  const [clients, setClients] = useState<Client[]>([]);

  // useEffect to fetch clients after cookieValue is set
  useEffect(() => {
      userClient();
  }, []); // This will trigger whenever cookieValue changes

  const userClient = async () => {
    if (!getAccessToken) {
      console.error("Access token is missing.");
      return;
    }

    const response2 = await fetch("https://m-id.ir/api/clients/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    if (response2.ok) {
      const data: Client[] = await response2.json();
      console.log("Clients received:", data);
      setClients(data);
    } else {
      console.error("Failed to get clients:", response2.status, response2.statusText);
    }
  };

  return (
      <div className="row">
        {clients.map((client,index) => (
          <div key={index} className="col-12 col-md-6 col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                {/* ایجاد یک کانتینر فلکس ریسپانسیو */}
                <div className="flex flex-md-row align-items-center flex-col-reverse md:flex-row">
                  {/* بخش اطلاعات کلاینت */}
                  <div className="w-full">
                    <h5 className="card-title">{client.name}</h5>
                    <p className="card-text">
                      <strong>Client ID:</strong> {client.clientId}
                    </p>
                    <p className="card-text">
                      <strong>Client Name:</strong> {client.clientName}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong>
                      <span className={`badge ms-2 ${getStatusClass(client.status)}`}>
                        {client.status}
                      </span>
                    </p>
                    <p className="card-text">
                      <strong>Last Access:</strong> {client.lastAccess}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                    <button className="my-btn my-btn-primary">
                      Details
                    </button>
                    <button className="my-btn my-btn-outline-primary">
                      Edit
                    </button>

                      <button className="my-btn my-btn-outline-primary">Delete</button>
                    </div>
                  </div>
                  {/* بخش نوار پیشرفت */}
                  <div
                    className="mt-3 mt-md-0 ms-md-3 mb-6 md:mb-0 flex flex-col"
                  >
                    <CircularProgress remainingRequests={25} totalRequests={100} />
                    <Link href="/clients/upgrade" className="my-btn my-btn-primary mt-3">Upgrade</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
  
};

export default MonitoringComponent;
