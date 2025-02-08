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

    const response2 = await fetch("http://localhost:9000/api/clients/", {
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
    <div>
      <h3 className="mb-4">Client Monitoring</h3>
      <div className="row">
        {clients.map((client) => (
          <div key={client.id} className="col-12 col-md-6 col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-body">
                {/* ایجاد یک کانتینر فلکس ریسپانسیو */}
                <div className="d-flex flex-column flex-md-row align-items-center">
                  {/* بخش اطلاعات کلاینت */}
                  <div className="flex-grow-1">
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
                      <button className="btn btn-outline-primary btn-sm">Details</button>
                      <button className="btn btn-outline-warning btn-sm">Emergency Suspend</button>
                      <button className="btn btn-outline-info btn-sm">Edit</button>
                      <button className="btn btn-outline-danger btn-sm">Delete</button>
                    </div>
                  </div>
                  {/* بخش نوار پیشرفت */}
                  <div
                    className="mt-3 mt-md-0 ms-md-3"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <CircularProgress remainingRequests={25} totalRequests={100} />
                    <Link href={"/clients/upgrade"} className="btn btn-primary btn-sm w-100 mt-2">
                      Upgrade
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default MonitoringComponent;
